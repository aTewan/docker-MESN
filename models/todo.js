import mongoose from 'mongoose'

let TodoSchema = mongoose.Schema({
    title: { type: String },
    statut: { type: Boolean }
});

export default mongoose.model('Todo', TodoSchema);