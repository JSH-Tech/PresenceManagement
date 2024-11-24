import { body,param } from "express-validator";

const rapportValide=[
    body("periodeRapport").isEmpty().withMessage("La période du rapport est requise."),
    body("contenuRapport").notEmpty().withMessage("Le contenu du rapport est requis."),
    body("dateRapport").isDate().withMessage("Date de rapport invalide."),
    body("idEmploye_Rapport").isInt().withMessage("Veuillez selectionner un employe"),
];

export default rapportValide;
