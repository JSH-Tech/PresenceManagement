import Employes from "./Employes.js";
import Retards from "./Retards.js";
import Types from "./Types.js";
import demandeConges from "./demandeConges.js";
import Absences from "./Absences.js";
import Rapports from "./Rapports.js";


// Association des modèles

// Voici les relations:
// -Un employe peut faire aucune ou plusieurs demandes de conges et une demande de conge peut etre fait par 1 seul employe.
// -Un employe ne peut avoir q'un seul type et un type peut concerner aucun ou plusieurs employe.
// -Une absence ne peut concerner qu'un seul employe et un employer peut avoir aucun ou plusieurs absence.
// -Un rapport ne peut concerner qu'un seul employer et un employer peut avoir aucun ou plusieurs rapport
// -Un employe peut avoir aucun ou plusieurs retard et un retard ne peut concerner qu'un seul employe
// Synchronisation des modèles avec la base de données

// Définition des relations
// Employe - Type (One-to-One)
Types.hasMany(Employes, { foreignKey: 'idType_Employe' });
Employes.belongsTo(Types, { foreignKey: 'idType_Employe' });


// Employe - Retard (One-to-Many)
Employes.hasMany(Retards, { foreignKey: 'idEmploye_Retards' });
Retards.belongsTo(Employes, { foreignKey: 'idEmploye_Retards' });

// Employe - Absence (One-to-Many)
Employes.hasMany(Absences, { foreignKey: 'idEmploye_Absences' });
Absences.belongsTo(Employes, { foreignKey: 'idEmploye_Absences' });

// Employe - Rapport (One-to-Many)
Employes.hasMany(Rapports, { foreignKey: 'idEmploye_Rapports' });
Rapports.belongsTo(Employes, { foreignKey: 'idEmploye_Rapports' });

// Employe - DemandeConge (One-to-Many)
Employes.hasMany(demandeConges, { foreignKey: 'idEmploye_DemandeConges' });
demandeConges.belongsTo(Employes, { foreignKey: 'idEmploye_DemandeConges' });


export {Employes, Rapports, demandeConges, Types, Retards, Absences}
// Synchronisation des modèles avec la base de données

// (async () => {
//     try {
//         await sequelize.sync({ force: true }); // Mettre `force: false` en production
//         console.log('La base de données a été synchronisée avec succès !');
//     } catch (error) {
//         console.error('Erreur lors de la synchronisation :', error);
//     }
// })();