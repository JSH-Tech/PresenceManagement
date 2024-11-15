import { Sequelize } from "sequelize";
import dotenv from "dotenv";

const ENV=dotenv.config().parsed
//Créer une connexion Sequelize à la base de données

const connexion = new Sequelize(ENV.DB_NAME, ENV.DB_USER, ENV.DB_PASSWORD,{host:ENV.DB_HOST,dialect:ENV.DB_HOST})
try {
    await connexion.authenticate();
    console.log("Connexion à la base de données réussie!");
} catch (error) {
    console.log("Error de connexion: " + error);
    
}

export default connexion;