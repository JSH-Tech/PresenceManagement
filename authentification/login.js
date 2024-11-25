import Employes from "../Models/Relations.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { validationResult } from "express-validator";

export const login = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }

    const {emailEmploye, passwordEmploye} = req.body

    if (!emailEmploye) return res.status(400).json({message: "L'email est incorrecte"});

    try {
        const Employe = await Employes.findOne({where: {emailEmploye}});
        if (!Employe) return res.status(400).json({message: "L'employe n'existe pas"});

        const motdepasseValid = await bcrypt.compare(passwordEmploye, Employe.passwordEmploye);
        if (!motdepasseValid) return res.status(400).json({message: "Le mot de passe est incorrect"});

        const payload = {id: Employe.id}
        const token= jwt.sign(payload, process.env.CODE_SECRET)
        
        res.status(200).json({data: Employe, token});

    } catch (error) {
        res.status(400).json({message: error.message});
    }
}