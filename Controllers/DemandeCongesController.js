import demandeConges from "../Models/demandeConges.js";
import Employes from "../Models/Employes.js";
import { validationResult } from "express-validator";

// 1. Liste de toutes les demandes de congé
export const listDemandesConges = async (req, res) => {
    try {
        const demandes = await demandeConges.findAll({
            include: {
                model: Employes,
                attributes: ["idEmploye", "nomEmploye", "prenomEmploye"], // Inclure les détails de l'employé
            },
        });
        res.status(200).json({ data: demandes });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// 2. Ajout d'une demande de congé
export const ajoutDemandeConge = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { dateDebutCong, dateFinCong, motifCong, etatDemandCong, idEmploye_DemandeConges } = req.body;

    try {
        const demande = await demandeConges.create({
            dateDebutCong,
            dateFinCong,
            motifCong,
            etatDemandCong,
            idEmploye_DemandeConges,
        });
        res.status(201).json({ message: "Demande de congé créée avec succès", data: demande });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// 3. Modification d'une demande de congé
export const modifierDemandeConge = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const idDemande = parseInt(req.params.id);
    const nouvellesInfosDemande = req.body;

    try {
        const demande = await demandeConges.findByPk(idDemande);
        if (!demande) {
            return res.status(404).json({ message: "Demande de congé non trouvée" });
        }

        await demande.update(nouvellesInfosDemande);
        res.status(200).json({ message: "Demande de congé mise à jour avec succès", data: demande });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// 4. Suppression d'une demande de congé
export const supprimerDemandeConge = async (req, res) => {
    const idDemande = parseInt(req.params.id);

    try {
        const demande = await demandeConges.findByPk(idDemande);
        if (!demande) {
            return res.status(404).json({ message: "Demande de congé non trouvée" });
        }

        await demande.destroy();
        res.status(200).json({ message: "Demande de congé supprimée avec succès" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// 5. Liste des demandes de congé par employé
export const listDemandesCongesEmploye = async (req, res) => {
    const idEmploye = parseInt(req.params.id);

    try {
        const demandes = await demandeConges.findAll({ where: { idEmploye_DemandeConges: idEmploye } });
        res.status(200).json(demandes);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};