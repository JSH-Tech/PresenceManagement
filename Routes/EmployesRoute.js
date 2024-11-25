import { Router } from "express";
import { listEmployes, ajoutEmploye, modifierEmploye, supprimerEmploye, listEmployesParType } from "../Controllers/EmployesController.js";
import employeValide from "../Validations/ValidationEmployes.js";

const EmployesRoute = Router();

EmployesRoute.get('/listEmployes', listEmployes);
EmployesRoute.post('/ajout', employeValide, ajoutEmploye);
EmployesRoute.put('/modifier/:id', employeValide, modifierEmploye);
EmployesRoute.delete('/supprimer/:id', supprimerEmploye);
EmployesRoute.get('/listEmployesParType/:id', listEmployesParType);

export default EmployesRoute;