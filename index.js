import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

//@@@Proposition
// import express from "express";
// import cors from "cors";
// import helmet from "helmet";
// import compression from "compression";
// import bodyParser from "body-parser";
// import dotenv from "dotenv";

// import connexion from "./config/connexion.js"; // Importer la connexion

// dotenv.config();
// const app = express();

// // Middlewares
// app.use(cors());
// app.use(helmet());
// app.use(compression());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// // Test de connexion à la base
// connexion.authenticate()
//     .then(() => console.log("Connexion à la base de données réussie"))
//     .catch((err) => console.error("Erreur de connexion à la base : ", err));

// // Exemple de route
// app.get("/", (req, res) => {
//     res.send("API PresenceManagement opérationnelle !");
// });

// // Démarrage du serveur
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Serveur démarré sur le port ${PORT}`));
