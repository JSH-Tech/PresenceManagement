import { body, param } from "express-validator";

const retardValide=[
    body("dateRetard").isDate().withMessage("La date de retard doit être une date valide"),
    body("heureDebutRetards").isTime().withMessage("L'heure doit etre valide"),
    body("heureFinRetards").isTime().withMessage("L'heure doit etre valide"),
    body("justificationRetard").isLength({min: 250}).withMessage("La jutification doit etre minimum 250 caracteres"),
    body("idEmploye_Retards").isInt().withMessage("Veuillez selectionnner un employe")
];

export default retardValide;