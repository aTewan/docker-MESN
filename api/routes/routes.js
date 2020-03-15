import * as todoController from '../controllers/todo'

const API_TODOS = "/todos";
const API_TODO_ID = "/todos/:id";

export class Routes {
    routes(app) {
        app.route(API_TODOS)
                .get(todoController.getTodos)
                .post(todoController.addTodo);
        
        app.route(API_TODO_ID)
                .patch(todoController.checkTodo)
                .delete(todoController.deleteTodo);
    }
}