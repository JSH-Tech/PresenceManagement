import { Router } from "express";
import { listRapports, ajoutRapport, listRapportsEmployee, modifierRapport, supprimerRapport, obtenirRapportParId } from "../Controllers/RapportController.js";
import rapportValide from "../Validations/validationsRapport.js";

const rapportRoute=Router();

rapportRoute.get("/listRapports", listRapports)

.post("/ajout", rapportValide, ajoutRapport)

.get("/listRapportsEmploye/:id", listRapportsEmployee)

.get("/obtenirRapport/:id",obtenirRapportParId)

.put("/modifier/:id", rapportValide, modifierRapport)

.delete("/suprimer/:id", supprimerRapport)

export default rapportRoute;