import { DataTypes } from "sequelize";

const Absence={
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
        allowNull: false
    },

    typeabsence: {
        type: DataTypes.STRING,
        allowNull: false
    },

    justificationAbsence: {
        type: DataTypes.TEXT,
    },
}

export default Absence;