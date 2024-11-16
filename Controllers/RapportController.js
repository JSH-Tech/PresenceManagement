import Rapports from "../Models/Relations.js";
import Employes from "../Models/Relations.js";
import bcript from "bcriptjs"

//1- Liste des rapports

export const listRapports = async(req,res)=> {
    try {
        const rapports = await Rapports.findAll({
            include: [
                {
                    model: Employes,
                    attributes: ["idEmploye",'nomEmploye',"prenomEmploye"],
                }
            ]
        });
        res.json(rapports);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

//2- Ajout d'un rapport

export const ajoutRapport = async(req,res)=> {
    try {
        const rapport = await Rapports.create({
            periodeRapport: req.body.periodeRapport,
            contenuRapport: req.body.contenuRapport,
            dateRapport: req.body.dateRapport,
            idEmploye: req.body.idEmploye,
        });
        res.status(201).json(rapport);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}