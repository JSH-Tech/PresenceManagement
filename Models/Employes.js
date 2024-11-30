import { type } from "os";
import { DataTypes } from "sequelize";
import connexion from "../config/connexion.js";


const Employes=connexion.define("Employes", {

    idEmploye:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allownull: false,
    },

    nomEmploye:{
        type: DataTypes.STRING,
        allowNull: false,
    },

    prenomEmploye:{
        type: DataTypes.STRING,
        allowNull: false,
    },

    dobEmploye:{
        type: DataTypes.DATEONLY,
    },

    emailEmploye:{
        type:DataTypes.STRING,
        unique: true,
        allowNull: false,
    },

    departementEmploye:{
        type: DataTypes.STRING,
        allowNull: false,
    },

    passwordEmploye:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    
    // idType_Employe: {  // Clé étrangère vers le modèle Types
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
    //     references: {
    //         model: "Types", // Nom de la table Types
    //         key: "idType",  // Clé primaire dans la table Types
    //     },
    //     onDelete: "CASCADE",
    //     onUpdate: "CASCADE",
    // },
})

export default Employes;