import { DataTypes } from "sequelize";
import connexion from "../config/connexion.js";
const DemandeConges= connexion.define("DemandeConges", {
    idDemandCong: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull:false,
    },
    dateDebutCong: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    dateFinCong: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    motifCong: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    etatDemandCong: {
        type: DataTypes.STRING,
        allowNull: true,
    },
})

export default DemandeConges;