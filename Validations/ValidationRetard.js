import { body, param } from "express-validator";

const retardValide=[
    body("dateRetard").isDate().withMessage("La date de retard doit être une date valide"),
    body('heureDebutRetards').matches(/^([01]\d|2[0-3]):([0-5]\d)$/).withMessage("L'heure doit être au format HH:mm"),
    body('heureFinRetards').matches(/^([01]\d|2[0-3]):([0-5]\d)$/).withMessage("L'heure doit être au format HH:mm"),
    body("justificationRetard").isLength({min: 10}).withMessage("La jutification doit etre minimum 250 caracteres"),
    body("idEmploye_Retards").isInt().withMessage("Veuillez selectionnner un employe")
];

export default retardValide;

