import Retards from "../Models/Relations.js";
import Employes from "../Models/Relations.js";
import bcrypt from "bcryptjs"

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
        const retardsEmploye = await Retards.findAll({where:{idEmploye}});
        res.status(200).json({data:retardsEmploye});
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

//6- Retourner le nombre de retards d'un employe

export const nombreRetardsEmploye= async (req, res) => {
    const idEmploye = parseInt(req.params.id);

    try {
        const nombreRetardsEmploye = await Retards.count({where:{idEmploye}});
        res.status(200).json({data:nombreRetardsEmploye});
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}


// @@@Proposition
// export const ajoutRetard = async (req, res) => {
//     try {
//         const nouveauRetard = await Retards.create(req.body); // Sequelize gère les validations
//         res.status(201).json({ message: "Retard créé avec succès", data: nouveauRetard });
//     } catch (error) {
//         res.status(400).json({ message: "Erreur lors de la création du retard", error: error.message });
//     }
// };
