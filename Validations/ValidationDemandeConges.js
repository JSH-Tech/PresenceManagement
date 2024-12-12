import { body } from "express-validator";

const demandeCongeValide = [
    body('dateDebutCong').custom((value) => {
        if (new Date(value) < new Date()) {
            throw new Error('La date de début de congé ne peut pas être dans le passé');
        }
        return true;
    }),
    body("dateFinCong").isDate().withMessage("La date de fin de congé est requise"),
    body("motifCong").isString().withMessage("Le motif du congé est requis"),
    body("etatDemandCong").isString().withMessage("L'état de la demande de congé est requis"),
    body("idEmploye_DemandeConges").isInt().withMessage("L'ID de l'employé est requis")
];

export default demandeCongeValide;