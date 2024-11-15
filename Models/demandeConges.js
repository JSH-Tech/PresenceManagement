import { DataTypes } from "sequelize";

const demandeConges={
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
    }
}

export default demandeConges;