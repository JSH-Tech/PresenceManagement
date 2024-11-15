import { type } from "os";
import { DataTypes } from "sequelize";


const Employes={

    idEmploye:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allownull: false,
    },

    nomEmploye:{
        type: DataTypes.STRING,
        allowNull: false,
    },

    prenomEmploye:{
        type: DataTypes.STRING,
        allowNull: false,
    },

    dobEmploye:{
        type: DataTypes.DATEONLY,
    },

    emailEmploye:{
        type:DataTypes.STRING,
        unique: true,
        allowNull: false,
    },

    departementEmploye:{
        type: DataTypes.STRING,
        allowNull: false,
    },

    passwordEmploye:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    
}

export default Employes;