import {Absences} from "../Models/Relations.js";
import {Employes} from "../Models/Relations.js";
import { validationResult } from "express-validator";


// Créer une absence
export const creerAbsence = async (req, res) => {
    try {
        const absence = await Absences.create(req.body);
        res.status(201).json(absence);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Lire toutes les absences
export const obtenirToutAbsences = async (req, res) => {
    try {
        const absences = await Absences.findAll();
        res.status(200).json({data:absences});
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Lire une absence par ID
export const obtenirAbsenceParId = async (req, res) => {
    try {
        const absence = await Absences.findByPk(req.params.id);
        if (!absence) return res.status(404).json({ message: 'Absence non trouvée' });
        res.status(200).json({data:absence});
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Mettre à jour une absence
export const mettreAJourAbsence = async (req, res) => {
    try {
        const absence = await Absences.findByPk(req.params.id);
        if (!absence) return res.status(404).json({ message: 'Absence non trouvée' });
        await absence.update(req.body);
        res.status(200).json({ message: 'Absence mise à jour avec succès' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Supprimer une absence
export const supprimerAbsence = async (req, res) => {
    try {
        const absence = await Absences.findByPk(req.params.id);
        if (!absence) return res.status(404).json({ message: 'Absence non trouvée' });
        await absence.destroy();
        res.status(200).json({ message: 'Absence supprimée avec succès' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
