import { DataTypes } from "sequelize";

const Types={
    idType:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },

    nomType:{
        type: DataTypes.STRING,
        allowNull: false
    },

    descriptionType:{
        type: DataTypes.TEXT,
        allowNull: true
    }
}

export default Types;