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

    idEmploye_Absences: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "Employes", // Nom de la table `Employes`
            key: "idEmploye",  // Clé primaire dans la table `Employes`
        },
        onDelete: "CASCADE", // Supprime les absences si l'employé est supprimé
        onUpdate: "CASCADE", // Met à jour la clé étrangère si nécessaire
    },

}

export default Absence;