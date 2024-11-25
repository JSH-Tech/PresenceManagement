import {Retards} from "../Models/Relations.js";
import {Employes} from "../Models/Relations.js";
import { validationResult } from "express-validator";

//1- Retourner la liste de tous les retards
export const listRetards= async (req, res) => {
    try {
        const retards = await Retards.findAll({include:{model:Employes,attributes:["idEmploye","nomEmploye","prenomEmploye"]}});
        //Pourquoi dada devant les donneees retournee
        res.status(200).json({data:retards});
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}


//2- Ajouter un reartds

export const ajoutRetard= async (req, res) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    const infosRetard = req.body

    try {

        //Le create c'est une function squelize?
        const nouveauRetard = await Retards.create(infosRetard);
        res.status(201).json({message:"Retard cree avec succes",data: nouveauRetard});
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}



//3- Modifier un retard

export const modifierRetard= async (req, res) => {
    const idRetard = parseInt(req.params.id);
    const nouvellesInfosRetard = req.body;

    try {
        //findOne c'est une function squelize?
        const retardAModifier = await Retards.findByPk(idRetard);

        if(!retardAModifier){
            return res.status(404).json({message: "Retard non trouve"});
        }

        await retardAModifier.update(nouvellesInfosRetard);

        res.status(200).json({message:"Retard modifie avec succes",data: retardAModifier});
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}


//4- Supprimer un retard

export const supprimerRetard= async (req, res) => {
    const idRetard = parseInt(req.params.id);

    try {
        const retardASupprimer = await Retards.findByPk(idRetard);

        if(!retardASupprimer){
            return res.status(404).json({message: "Retard non trouve"});
        }

        await retardASupprimer.destroy();

        res.status(200).json({message:"Retard supprime avec succes"});
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

//5- Retourner la liste des retards d'un employe

export const listRetardsEmploye= async (req, res) => {
    const idEmploye = parseInt(req.params.id);

    try {
        //Cherche l'utilisateur et utiliser getRetards()
        const employe = await Employes.findByPk(idEmploye);
        const retardsEmploye = await employe.getRetards();
        res.status(200).json({data:retardsEmploye});
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
