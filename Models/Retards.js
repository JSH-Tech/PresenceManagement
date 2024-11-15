import { DataTypes } from "sequelize";

const Retards={
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
    }
};

export default Retards;