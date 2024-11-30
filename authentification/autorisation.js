import{Employes, Types } from "../Models/Relations";

//Autoriser un employer a acceder au rapport si nomType=="Manager"

export const verificationManager = async (req, res, next) => {
    const idEmploye=req.idType_Employe;
    try {
        //Récupération de l'employé connecté
        const employe = await Employes.findByPk(idEmploye);
        if (!employe){
            return res.status(404).json({message: "Employes non trouvé"})
        }
        const typeEmploye = await employe.getTypes()

        //Vérification du type d'employé
        if (typeEmploye.nomType === "Manager" || typeEmploye.nomType === "manager") {
            next(); //Passe à l'étape suivante si l'employé est Manager
        } else {
            res.status(403).json({ message: "Vous n'êtes pas autorisé à accéder à cette fonctionnalité" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}; 