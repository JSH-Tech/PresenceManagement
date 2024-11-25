import { Router } from "express";
import { listDemandesConges, ajoutDemandeConge, modifierDemandeConge, supprimerDemandeConge, listDemandesCongesEmploye } from "../Controllers/DemandesCongesController.js";
import demandeCongeValide from "../Validations/ValidationDemandesConges.js";

const DemandesCongesRoute = Router();

DemandesCongesRoute.get('/listDemandesConges', listDemandesConges);
DemandesCongesRoute.post('/ajout', demandeCongeValide, ajoutDemandeConge);
DemandesCongesRoute.put('/modifier/:id', demandeCongeValide, modifierDemandeConge);
DemandesCongesRoute.delete('/supprimer/:id', supprimerDemandeConge);
DemandesCongesRoute.get('/listDemandesCongesEmploye/:id', listDemandesCongesEmploye);

export default DemandesCongesRoute;