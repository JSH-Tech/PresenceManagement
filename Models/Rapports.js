import { DataTypes } from "sequelize";
import connexion from "../config/connexion.js";
const Rapports=connexion.define("Rapports", {
    idRapport: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },

    periodeRapport:{
        type: DataTypes.STRING,
        allowNull: false,
    },

    dateRapport: {
        type: DataTypes.DATE,
        allowNull: false
    },

    contenuRapport: {
        type: DataTypes.TEXT,
        allowNull: false
    },

})

export default Rapports;