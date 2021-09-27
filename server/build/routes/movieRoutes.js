"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const movieController_1 = __importDefault(require("../controllers/movieController"));
class MovieRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', movieController_1.default.list);
        this.router.get('/:id', movieController_1.default.getOne);
        this.router.post('/', movieController_1.default.create);
        this.router.delete('/:id', movieController_1.default.delete);
        this.router.put('/:id', movieController_1.default.update);
    }
}
const movieroutes = new MovieRouter();
exports.default = movieroutes.router;
