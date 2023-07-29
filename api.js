"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.editTodo = exports.addTodo = void 0;
// const baseURL = 'http://localhost:3001';
var baseURL = 'https://todoapp-fac75-default-rtdb.europe-west1.firebasedatabase.app/todos.json';
// export const getAllTodos = async (): Promise<ITask[]> => {
//     try {
//       const response = await axios.get<ITask[]>(`${baseURL}/todos.json`);
//       return response.data;
//     } catch (error) {
//       // Handle any errors that occurred during the fetch or JSON parsing
//       console.error('Error fetching todos:', error);
//       throw error; // Rethrow the error to inform the caller about the failure
//     }
//   };
// export const getAllTodos = async (): Promise<ITask[]> => {
//     const res = await fetch(`${baseURL}`);
//     const todos = await res.json();
//     return todos;
// }
var fetch = require("node-fetch");
fetch('https://todoapp-fac75-default-rtdb.europe-west1.firebasedatabase.app/todos.json')
    .then(function (result) { return result.text(); })
    .then(function (textformat) { return console.log(textformat); });
// export const getAllTodos = async (): Promise<ITask[]> => {
//     const task: ITask = {
//         id: "1",
//         text: "Finish the TypeScript tutorial",
//     };
//     return [task]
// }
var addTodo = function (todo) { return __awaiter(void 0, void 0, void 0, function () {
    var res, newTodo;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetch("".concat(baseURL, "/todos"), {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(todo)
                })];
            case 1:
                res = _a.sent();
                return [4 /*yield*/, res.json()];
            case 2:
                newTodo = _a.sent();
                return [2 /*return*/, newTodo];
        }
    });
}); };
exports.addTodo = addTodo;
// export const addTodo = async (todo: ITask): Promise<ITask> =>  {
//     const task: ITask = {
//         id: "1",
//         text: "Finish the TypeScript tutorial",
//     };
//     return task
// }
// export const editTodo = async (todo: ITask): Promise<ITask> =>  {
//     const res = await fetch(`${baseURL}/tasks/${todo.id}`, {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(todo)
//     })
//     const updatedTodo = await res.json();
//     return updatedTodo;
// }
var editTodo = function (todo) { return __awaiter(void 0, void 0, void 0, function () {
    var task;
    return __generator(this, function (_a) {
        task = {
            id: "1",
            text: "Finish the TypeScript tutorial",
        };
        return [2 /*return*/, task];
    });
}); };
exports.editTodo = editTodo;
// export const deleteTodo = async (id: string): Promise<void> =>  {
//     await fetch(`${baseURL}/tasks/${id}`, {
//         method: 'DELETE'
//     })
// }
var deleteTodo = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/];
    });
}); };
exports.deleteTodo = deleteTodo;
// import db from "./data/database";
// import { ITask } from "./types/tasks";
// export const getAllTodos = (): ITask[] => {
//   const query = db.prepare('SELECT * FROM tasks');
//   return query.all() as ITask[];
// };
// export const addTodo = (todo: ITask): ITask => {
//   const insertQuery = db.prepare('INSERT INTO tasks (title, description) VALUES (@title, @description)');
//   const { lastInsertRowid } = insertQuery.run(todo);
//   return { ...todo, id: lastInsertRowid };
// };
// export const editTodo = (todo: ITask): ITask => {
//   const updateQuery = db.prepare('UPDATE tasks SET title = @title, description = @description WHERE id = @id');
//   updateQuery.run(todo);
//   return todo;
// };
// export const deleteTodo = (id: number): void => {
//   const deleteQuery = db.prepare('DELETE FROM tasks WHERE id = ?');
//   deleteQuery.run(id);
// };
