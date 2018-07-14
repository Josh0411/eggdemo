'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
    async index() {
        this.ctx.body = 'hi, egg';
        this.ctx.logger.error('this egg project ');
    }
}

module.exports = HomeController;