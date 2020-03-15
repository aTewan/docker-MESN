import express from 'express';
import mongoose from 'mongoose';
const formidable = require('express-formidable');

import { Routes } from './routes/routes'

class App {
    constructor() {
        this.app = express();
        this.config(this.app);
        this.connectToMongo();
        this.routing(this.app);
    }

    config(app) {
        app.use(formidable());
    }

    connectToMongo() {
        mongoose.Promise = global.Promise;
        let username = process.env.MONGO_USERNAME;
        let password = process.env.MONGO_PASSWORD;
        let host = process.env.MONGO_HOSTNAME;
        let port = process.env.MONGO_PORT;
        
        let mongoUri = `mongodb://${username}:${password}@${host}:${port}/`;
        mongoose.connect(mongoUri);

        mongoose.connection.on('open', () => {
            console.log("Connecté à MongoDB !");
        });

        mongoose.connection.on('error', () => {
            console.log("Erreur lors de la connexion à MongoDB !");
        })
    }

    routing(app) {
        let routesList = new Routes();
        routesList.routes(app);
    }
}

export default new App().app;