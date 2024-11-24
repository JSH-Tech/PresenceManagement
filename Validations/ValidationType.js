import { body, param } from "express-validator";

const typeValide=[
    body("typeAbsence").isString().withMessage("Veuillez sélectionner le type d'absence"),
    body("justificationAbsence").isLength({min: 250}).withMessage("La jutification doit etre minimum 250 caracteres"),
    body("idEmploye_Type").isInt().withMessage("Veuillez selectionnner un employe")
];

export default typeValide;
