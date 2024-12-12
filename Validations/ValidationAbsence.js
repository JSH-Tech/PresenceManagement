import { body, param } from "express-validator";

const absenceValide=[
    body("dateDebutAbsence").isDate().withMessage("La date de début doit être une date valide"),   
    body('dateFinAbsence').custom((value, { req }) => {if (new Date(value) < new Date(req.body.dateDebutAbsence)) 
        {
            throw new Error('La date de fin doit être postérieure ou égale à la date de début');
        }
        return true;
    }),
    
    body("typeAbsence").isString().withMessage("Veillez selectionner le type d'absence"),
    body("justificationAbsence").isLength({min: 10}).withMessage("La jutification doit etre minimum 250 caracteres"),
    body("idEmploye_Absence").isInt().withMessage("Veuillez selectionnner un employe")
];

export default absenceValide;

