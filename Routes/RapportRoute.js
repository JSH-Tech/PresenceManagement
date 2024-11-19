import { Router } from "express";
import { listRapports, ajoutRapport, listRapportsEmployee, modifierRapport, supprimerRapport } from "../Controllers/RapportController.js";
import rapportValide from "../Validations/validationsRapport.js";

const rapportRoute=Router();

rapportRoute.get("/rapports", listRapports)

.post("/rapports/ajout", rapportValide, ajoutRapport)

.get("/rapports/:id", listRapportsEmployee)

.put("/rapports/:id", rapportValide, modifierRapport)

.delete("/rapports/:id", supprimerRapport)

export default rapportRoute;