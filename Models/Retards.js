import { DataTypes } from "sequelize";
import connexion from "../config/connexion.js";
const Retards=connexion.define("Retards", {
    idRetard: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allownull: false,
    },

    dateRetard: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    heureDebutRetards: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    heureFinRetards:{
        type: DataTypes.TIME,
        allowNull: false
    },

    justificationRetard:{
        type: DataTypes.TEXT,
        allowNull: false,
    },

    // idEmploye_Retards: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
    //     references: {
    //         model: "Employes", // Nom de la table `Employes`
    //         key: "idEmploye",  // Clé primaire dans la table `Employes`
    //     },
    //     onDelete: "CASCADE", // Supprime les retards si l'employé est supprimé
    //     onUpdate: "CASCADE", // Met à jour la clé étrangère si nécessaire
    // },
});

export default Retards;