import { DataTypes } from "sequelize";

const Rapports={
    idRapport: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allownull: false,
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
}

export default Rapports;