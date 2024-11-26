import {Types} from "../Models/Relations.js";

// Créer un type d'abscence
export const creerType = async (req, res) => {
    try {
        const type = await Types.create(req.body);
        res.status(201).json(type);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Lire tous les types
export const obtenirTypes = async (req, res) => {
    try {
        const types = await Types.findAll();
        res.status(200).json(types);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Lire un type par ID
export const obtenirTypeParId = async (req, res) => {
    try {
        const type = await Types.findByPk(req.params.id);
        if (!type) return res.status(404).json({ message: 'Type non trouvé' });
        res.status(200).json(type);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Mettre à jour un type
export const MettreAjourLeType = async (req, res) => {
    try {
        const type = await Types.findByPk(req.params.id);
        if (!type) return res.status(404).json({ message: 'Type non trouvé' });
        await type.update(req.body);
        res.status(200).json({ message: 'Type mis à jour avec succès' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Supprimer un type
export const supprimerType = async (req, res) => {
    try {
        const type = await Types.findByPk(req.params.id);
        if (!type) return res.status(404).json({ message: 'Type non trouvé' });
        await type.destroy();
        res.status(200).json({ message: 'Type supprimé avec succès' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
