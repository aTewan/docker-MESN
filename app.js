import express from 'express'
import mongoose from 'mongoose'

class App {
    constructor() {
        this.app = express();
        this.connectToMongo();
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
}

export default new App().app;