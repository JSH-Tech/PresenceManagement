import { body } from "express-validator";

const typeValide = [
    // Validation pour le champ nomType
    body("nomType")
        .isString()
        .withMessage("Le nom du type doit être une chaîne de caractères.")
        .notEmpty()
        .withMessage("Le nom du type ne peut pas être vide.")
        .isLength({ min: 3, max: 100 })
        .withMessage("Le nom du type doit comporter entre 3 et 100 caractères."),
    
    // Validation pour le champ descriptionType (facultatif)
    body("descriptionType")
        .optional() // Champ facultatif
        .isString()
        .withMessage("La description doit être une chaîne de caractères.")
        .isLength({ max: 500 })
        .withMessage("La description ne peut pas dépasser 500 caractères."),
    
    // idType n'est pas requis dans la création car il est auto-incrémenté.
];

export default typeValide;
