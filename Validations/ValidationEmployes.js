import { body } from "express-validator";

const employeValide = [
    body("nomEmploye").isString().withMessage("Le nom de l'employé est requis"),
    body("prenomEmploye").isString().withMessage("Le prénom de l'employé est requis"),
    body("dobEmploye").isDate().withMessage("La date de naissance est requise"),
    body("emailEmploye").isEmail().withMessage("L'email est requis et doit être valide"),
    body("departementEmploye").isString().withMessage("Le département est requis"),
    body("passwordEmploye").isLength({ min: 8 }).withMessage("Le mot de passe doit contenir au moins 8 caractères"),
    body("idType_Employe").isInt().withMessage("Le type d'employé est requis")
];

export default employeValide;