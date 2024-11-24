import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import connexion from './config/connexion.js';

import rapportRoute from './Routes/RapportRoute.js';
import retardRoute from './Routes/RetardRoute.js';

import AbsencesRoute from './Routes/AbsencesRoute.js';
import TypeRoute from './Routes/TypesRoute.js';

const app = express();

app.use(cors());
app.use(helmet());
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/retards", retardRoute)
app.use("/api/rapports", rapportRoute)
app.use("/api/absence", AbsencesRoute)
app.use("/api/type", TypeRoute)

const PORT = dotenv.config().parsed.PORT

connexion.sync({force: true})
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));