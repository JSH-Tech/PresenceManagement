import {Rapports} from "../Models/Relations.js";
import {Employes} from "../Models/Relations.js";
import { validationResult } from "express-validator";

//1- Liste des rapports
export const listRapports = async (req, res) => {
    try {
        const rapports = await Rapports.findAll({
            include: [
                {
                    model: Employes,
                    attributes: ["idEmploye", "nomEmploye", "prenomEmploye"],
                },
            ],
        });
        console.log(rapports); // Inspectez ici les données
        res.json({ data: rapports });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


//2- Ajout d'un rapport

export const ajoutRapport = async(req,res)=> {

    //Destructuration du contenu d'unretard envoyer
    const nouveauRapport=req.body;

    const errors=validationResult(req)

    //Si les données sont invalides, renvoi une erreur avec le message d'erreur
    if(!errors.isEmpty()) {
        return res.status(400).json({errors:errors.array()});
    }
    
    try {
        const employe = await Employes.findByPk(nouveauRapport.idEmploye_Rapports);
        if (!employe) {
            return res.status(400).json({ message: "L'employé n'existe pas ou a été supprimé." });
        }
        const rapport = await Rapports.create(nouveauRapport);
        res.status(201).json(rapport);
    } catch (error) {
        res.status(401).json({message: error.message});
    }
}

//3- Modification d'un rapport

export const modifierRapport = async(req,res)=> {

    const rapportMiseAJour = req.body;
    const errors=validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }
    try {
        const rapport = await Rapports.findByPk(req.params.id);
        
        if(!rapport){
            return res.status(404).json({message: "Rapport non trouvé"});
        }
        await rapport.update(rapportMiseAJour);
        rapport.reload();

        res.status(200).json({message:"Rapport modifié avec succes",data:rapportMiseAJour})
    }
    catch(err) {
        res.status(500).json({message: err.message});
    }
}

//4- Suppression d'un rapport

export const supprimerRapport = async(req,res)=> {
    try {
        const rapport = await Rapports.findByPk(req.params.id);

        if(!rapport){
            return res.status(404).json({message: "Rapport non trouvé"});
        }

        await rapport.destroy();

        res.status(200).json({message: "Rapport supprimé avec succès"});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

//5-liste de rapport lié a un employee

export const listRapportsEmployee = async(req,res)=> {
    try {
        //Récupération des rapports liés à l'employé avec la jointure entre Employes et Rapports
        const rapports = await Rapports.findAll({
            where: {idEmploye_Rapport: req.params.idEmploye},
            include: [
                {
                    model: Employes,
                    attributes: ["idEmploye",'nomEmploye',"prenomEmploye"],
                }
            ]
        });
        res.json({data:rapports});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

// 6-Obtnenir un rapport par son ID
export const obtenirRapportParId = async (req, res) => {
    try {
        const rapport = await Rapports.findByPk(req.params.id);
        if (!rapport) return res.status(404).json({ message: 'Rapport non trouvé' });
        res.status(200).json({data:rapport});
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};