import mongoose from 'mongoose'
import TodoSchema from '../models/todo'

export const addTodo = async(req, res) => {
    let newTodo = TodoSchema();
    newTodo.title = req.fields.title;
    newTodo.statut = false;

    return await newTodo.save((err, todo) => {
        if (err) {
            res.send(err);
        } else {
            res.json(todo);
        }
    })
}

export const getTodos = async(req, res) => {
    await TodoSchema.find((err, todos) => {
        if (err) {
            res.send(err);
        } else {
            res.json(todos);
        }
    })
}