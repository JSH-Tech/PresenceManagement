import { body,param } from "express-validator";

const rapportValide=[
    body("periodeRapport").isEmpty().withMessage("La période du rapport est requise."),
    body("contenuRapport").notEmpty().withMessage("Le contenu du rapport est requis."),
    body("dateRapport").isDate().withMessage("Date de rapport invalide."),
    body("idEmploye_Rapport").isInt().withMessage("Veuillez selectionner un employe"),
];

export default rapportValide;
// validation des rapports
// Validation d'une chaîne de caractères non vide
// const validateString = (value) => {
//     return typeof value === "string" && value.trim().length > 0;
// };

// // Validation de la date au format YYYY-MM-DD
// const validateDate = (value) => {
//     return !isNaN(Date.parse(value));  // Vérifie si c'est une date valide
// };

// // Validation de l'ID de l'employé (assume que l'ID est un entier positif)
// const validateEmployeeId = (value) => {
//     return Number.isInteger(value) && value > 0;
// };

// // Validation de la période (ex: "Janvier 2024", "Q1 2024")
// const validatePeriodeRapport = (value) => {
//     return validateString(value);
// };

// // Fonction principale de validation pour un rapport
// const validateRapport = (rapport) => {
//     const { periodeRapport, contenuRapport, dateRapport, idEmploye_Rapport } = rapport;

//     // Vérification des champs requis
//     if (!validatePeriodeRapport(periodeRapport)) {
//         return { valid: false, message: "Période de rapport invalide." };
//     }

//     if (!validateString(contenuRapport)) {
//         return { valid: false, message: "Contenu du rapport invalide." };
//     }

//     if (!validateDate(dateRapport)) {
//         return { valid: false, message: "Date de rapport invalide." };
//     }

//     if (!validateEmployeeId(idEmploye_Rapport)) {
//         return { valid: false, message: "ID de l'employé invalide." };
//     }

//     return { valid: true, message: "Validation réussie." };
// };

// export default validateRapport;
