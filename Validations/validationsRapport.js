import { body,param } from "express-validator";

const rapportValide=[
    body("periodeRapport").notEmpty().withMessage("La période du rapport est requise."),
    body("contenuRapport").notEmpty().withMessage("Le contenu du rapport est requis."),
    body("dateRapport").isDate().withMessage("Date de rapport invalide."),
    body("idEmploye_Rapports").isInt().withMessage("Veuillez selectionner un employe"),
];

export default rapportValide;
