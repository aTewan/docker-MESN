import * as todoController from '../controllers/todo'

const API_TODOS = "/todos";

export class Routes {
    routes(app) {
        app.route(API_TODOS)
                .get(todoController.getTodos)
                .post(todoController.addTodo);
    }
}