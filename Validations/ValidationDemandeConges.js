import { body } from "express-validator";

const demandeCongeValide = [
    body("dateDebutCong").isDate().withMessage("La date de début de congé est requise"),
    body("dateFinCong").isDate().withMessage("La date de fin de congé est requise"),
    body("motifCong").isString().withMessage("Le motif du congé est requis"),
    body("etatDemandCong").isString().withMessage("L'état de la demande de congé est requis"),
    body("idEmploye_DemandeConges").isInt().withMessage("L'ID de l'employé est requis")
];

export default demandeCongeValide;