import { Router } from "express";
import { creerAbsence, obtenirAbsenceParId, obtenirToutAbsences, mettreAJourAbsence, supprimerAbsence } from "../Controllers/AbsencesController.js";
import absenceValide from "../Validations/ValidationAbsence.js";
const AbsencesRoute = Router();

AbsencesRoute.post('/absences/creer',absenceValide, creerAbsence);
AbsencesRoute.get('/obtenirAbsence', obtenirToutAbsences);
AbsencesRoute.get('/obtenirAbsenceParId/:id', obtenirAbsenceParId);
AbsencesRoute.put('/mettreAJourAbsence/:id',absenceValide, mettreAJourAbsence);
AbsencesRoute.delete('/supprimerAbsence/:id', supprimerAbsence);

export default AbsencesRoute;