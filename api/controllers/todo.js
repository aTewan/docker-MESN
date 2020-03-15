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

export const checkTodo = async(req, res) => {
    let todo = {statut: true};
    await TodoSchema.findByIdAndUpdate({_id: req.params.id}, {$set: todo}, (err, todo) => {
        if (err) {
            res.send(err);
        } else {
            res.json(todo);
        }
    })
}

export const deleteTodo = async(req, res) => {
    await TodoSchema.findById(req.params.id).remove(function(err,todo) {
        if(err) {
            res.send(err)
        }
        else {
            res.json(todo)
        }
    });

}