import { Router } from "express";
import { creerType, obtenirTypes, obtenirTypeParId,MettreAjourLeType , supprimerType } from "../Controllers/TypesController.js";
import typeValide from "../Validations/ValidationType.js";

const TypeRouter= Router()

TypeRouter.post('/creer',typeValide, creerType);
TypeRouter.get('/obtenirTypes', obtenirTypes);
TypeRouter.get('/obtenirTypeParId/:id', obtenirTypeParId);
TypeRouter.put('/MettreAjourLeType/:id',typeValide, MettreAjourLeType);
TypeRouter.delete('/supprimerType/:id', supprimerType);

export default TypeRouter;
