import { Router } from "express";
import { listRetards, ajoutRetard, modifierRetard, supprimerRetard, listRetardsEmploye } from "../Controllers/RetardController.js";
import retardValide from "../Validations/ValidationRetard.js";

const retardRoute=Router();


// Récupérer tous les retards
retardRoute.get("/listRetards", listRetards)

// Ajouter un retard
.post("/ajout", retardValide, ajoutRetard)

// Modifier un retard
.put("/modifier/:idRetard", retardValide, modifierRetard)

// Supprimer un retard
.delete("/supprimer/:idRetard", supprimerRetard)

//liste retards employe
.get("/listeRetardEmploye/:idRetard", listRetardsEmploye)


export default retardRoute;