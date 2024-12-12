import { DataTypes } from "sequelize";
import connexion from "../config/connexion.js";

const Absence=connexion.define("Absences", {
    idAbsence: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull:false
    },

    dateDebutAbsence: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },

    dateFinAbsence:{
        type: DataTypes.DATEONLY,
        allowNull: true
    },

    typeAbsence: {
        type: DataTypes.STRING,
        allowNull: false
    },

    justificationAbsence: {
        type: DataTypes.TEXT,
        allowNull: true
    },

})

export default Absence;