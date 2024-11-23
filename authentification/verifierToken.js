import jwt from "jsonwebtoken";

export const verifierToken = (req, res, next) =>{
    const bearerToken = req.headers.authorization

    if(!bearerToken){
        return res.status(401).json({message: "Aucun token fourni"});
    }

    const token = bearerToken.split(" ")[1];

    jwt.verify(token, process.env.CODE_SECRET, (error, payload) => {
        if(error){
            return res.status(401).json({message: error.message});
        }

        req.idEmploye=payload.idEmploye;
        next()
    });
}