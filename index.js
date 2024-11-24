import express from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import dotenv from "dotenv";
import connexion from "./config/connexion.js";

import rapportRoute from "./Routes/RapportRoute.js";
import retardRoute from "./Routes/RetardRoute.js";

// Chargement des variables d'environnement
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares globaux
app.use(cors());
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/retards", retardRoute);
app.use("/api/rapports", rapportRoute);

// Synchronisation de la base de données
connexion.sync()
  .then(() => console.log("Base de données synchronisée."))
  .catch((err) => console.error("Erreur de synchronisation de la base de données :", err));

// Démarrage du serveur
app.listen(PORT, () => console.log(`Serveur démarré sur le port ${PORT}`));
