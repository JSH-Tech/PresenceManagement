import { body } from "express-validator";
import {Employes} from "../Models/Relations.js";
const employeValide = [
    body("nomEmploye").isString().withMessage("Le nom de l'employé est requis"),
    body("prenomEmploye").isString().withMessage("Le prénom de l'employé est requis"),
    body("dobEmploye").isDate().withMessage("La date de naissance est requise"),
    body('emailEmploye').custom(async (email) => {
        const employe = await Employes.findOne({ where: { emailEmploye: email } });
        if (employe) {
            throw new Error('Cet email est déjà utilisé.');
        }
        return true;
    }),    
    body("departementEmploye").isString().withMessage("Le département est requis"),
    body("passwordEmploye").isLength({ min: 8 }).withMessage("Le mot de passe doit contenir au moins 8 caractères"),
    body("idType_Employe").isInt().withMessage("Le type d'employé est requis")
];

export default employeValide;