import { Router } from "express";
import { listRapports, ajoutRapport, listRapportsEmployee, modifierRapport, supprimerRapport } from "../Controllers/RapportController.js";
import rapportValide from "../Validations/validationsRapport.js";

const rapportRoute=Router();

rapportRoute.get("/listRapports", listRapports)

.post("/ajout", rapportValide, ajoutRapport)

.get("/listRapportsEmploye/:id", listRapportsEmployee)

.put("/modifier/:id", rapportValide, modifierRapport)

.delete("/suprimer/:id", supprimerRapport)

export default rapportRoute;