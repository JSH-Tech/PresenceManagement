import demandeConges from "../Models/demandeConges.js";
import Employes from "../Models/Employes.js";

// 1. Liste de tous les employés
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

// 3. Modification d' un employé
export const modifierDemandeConge = async (req, res) => {
    const idDemandCong = parseInt(req.params.id);
    const nouvellesInfos = req.body;

    try {
        const demandeAModifier = await demandeConges.findByPk(idDemandCong);

        if (!demandeAModifier) {
            return res.status(404).json({ message: "Demande de congé non trouvée" });
        }

        await demandeAModifier.update(nouvellesInfos);
        res.status(200).json({ message: "Demande de congé modifiée avec succès", data: demandeAModifier });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// 4 Suppression d' un employé
export const supprimerDemandeConge = async (req, res) => {
    const idDemandCong = parseInt(req.params.id);

    try {
        const demandeASupprimer = await demandeConges.findByPk(idDemandCong);

        if (!demandeASupprimer) {
            return res.status(404).json({ message: "Demande de congé non trouvée" });
        }

        await demandeASupprimer.destroy();
        res.status(200).json({ message: "Demande de congé supprimée avec succès" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// 5. Liste les employés d'un type spécifique
export const listDemandesCongesEmploye = async (req, res) => {
    const idEmploye = parseInt(req.params.id);

    try {
        const demandes = await demandeConges.findAll({ where: { idEmploye_DemandeConges: idEmploye } });
        res.status(200).json({ data: demandes });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
