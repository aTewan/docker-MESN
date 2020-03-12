import express from 'express'
import mongoose from 'mongoose'

class App {
    constructor() {
        this.app = express();
        this.connectToMongo();
    }

    connectToMongo() {
        mongoose.Promise = global.Promise;
        let mongoUri = `mongodb://${process.env.MONGO_HOSTNAME}:${process.env.MONGO_PORT}/`;

        console.log(mongoUri)

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