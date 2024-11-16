import { DataTypes } from "sequelize";

const Rapports={
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

    idEmploye_Rapport: {
        type: DataTypes.INTEGER,
        references: {
            model: 'employes',
            key: 'idEmploye',
        },
        allowNull: false,
        onDelete:"CASCADE",
        onUpdate:"CASCADE"
    }
}

export default Rapports;