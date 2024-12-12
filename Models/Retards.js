import { DataTypes } from "sequelize";
import connexion from "../config/connexion.js";
const Retards=connexion.define("Retards", {
    idRetard: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
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
});

export default Retards;