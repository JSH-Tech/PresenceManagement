import Employes from "../Models/Employes.js";
import Types from "../Models/Types.js";
import bcrypt from "bcryptjs";
import { validationResult } from "express-validator";

// 1. Liste de tous les employés
export const listEmployes = async (req, res) => {
    try {
        const employes = await Employes.findAll({
            include: {
                model: Types,
                attributes: ["nomType", "descriptionType"], // Inclure le type de chaque employé
            },
        });
        res.status(200).json({ data: employes });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// 2. Ajout d'un employé
export const ajoutEmploye = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { nomEmploye, prenomEmploye, dobEmploye, emailEmploye, departementEmploye, passwordEmploye, idType_Employe } = req.body;

    try {
        const hashPassword = await bcrypt.hash(passwordEmploye, 10); // Hashage du mot de passe
        const employe = await Employes.create({
            nomEmploye,
            prenomEmploye,
            dobEmploye,
            emailEmploye,
            departementEmploye,
            passwordEmploye: hashPassword,
            idType_Employe,
        });
        res.status(201).json({ message: "Employé créé avec succès", data: employe });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// 3. Modification d'un employé
export const modifierEmploye = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const idEmploye = parseInt(req.params.id);
    const nouvellesInfosEmploye = req.body;

    try {
        const employe = await Employes.findByPk(idEmploye);
        if (!employe) {
            return res.status(404).json({ message: "Employé non trouvé" });
        }

        if (nouvellesInfosEmploye.passwordEmploye) {
            nouvellesInfosEmploye.passwordEmploye = await bcrypt.hash(nouvellesInfosEmploye.passwordEmploye, 10);
        }

        await employe.update(nouvellesInfosEmploye);
        res.status(200).json({ message: "Employé mis à jour avec succès", data: employe });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// 4. Suppression d'un employé
export const supprimerEmploye = async (req, res) => {
    const idEmploye = parseInt(req.params.id);

    try {
        const employe = await Employes.findByPk(idEmploye);
        if (!employe) {
            return res.status(404).json({ message: "Employé non trouvé" });
        }

        await employe.destroy();
        res.status(200).json({ message: "Employé supprimé avec succès" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// 5. Liste les employés d'un type spécifique
export const listEmployesParType = async (req, res) => {
    const idType = parseInt(req.params.id);

    try {
        const employes = await Employes.findAll({ where: { idType_Employe: idType } });
        res.status(200).json(employes);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}