import { body, param } from "express-validator";

const absenceValide=[
    body("dateDebutAbsence").isDate().withMessage("La date de début doit être une date valide"),   
    body("dateFinAbsence").isDate() .withMessage("La date de fin doit être une date valide"),
    body("typeAbsence").isString().withMessage("Veillez selectionner le type d'absence"),
    body("justificationAbsence").isLength({min: 250}).withMessage("La jutification doit etre minimum 250 caracteres"),
    body("idEmploye_Absence").isInt().withMessage("Veuillez selectionnner un employe")
];

export default absenceValide;

