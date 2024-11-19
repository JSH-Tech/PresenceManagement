import { Router } from "express";
import { listRetards, ajoutRetard, modifierRetard, supprimerRetard, listRetardsEmploye, nombreRetardsEmploye } from "../Controllers/RetardController.js";
import retardValide from "../Validations/ValidationRetard.js";

const retardRoute=Router();


// Récupérer tous les retards
retardRoute.get("/retards", listRetards)

// Ajouter un retard
.post("/retards", retardValide, ajoutRetard)

// Modifier un retard
.put("/retards/:idRetard", retardValide, modifierRetard)

// Supprimer un retard
.delete("/retards/:idRetard", supprimerRetard)

//liste retatards employe
.get("/retards/:idRetard", listRetardsEmploye)

// nombre retard employee
.get("/retards/count/:idEmploye", nombreRetardsEmploye)

export default retardRoute;