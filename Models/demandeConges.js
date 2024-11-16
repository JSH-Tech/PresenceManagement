import { DataTypes } from "sequelize";

const DemandeConges={
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

    idEmploye_DemandeConges: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "Employes", // Nom de la table `Employes`
            key: "idEmploye",  // Clé primaire dans la table `Employes`
        },
        onDelete: "CASCADE", // Supprime les demandes de congé si l'employé est supprimé
        onUpdate: "CASCADE", // Met à jour la clé étrangère si nécessaire
    },
    
}

export default DemandeConges;