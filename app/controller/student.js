let Controller = require('egg').Controller;
class StudentController extends Controller {

    async getList() {
        console.log(this.service);
        this.ctx.body = await this.ctx.service.student.getStudents();
        this.ctx.status = 200;
        // this.logger.debug(
        // 	'XXXX'
        // );
        // this.app.logger.debug('YYYYY');
        // console.log(this.app.cache);
        // console.log('app.config.env', this.app.config.env);
    }

    async getDetail() {
        this.ctx.body =  {
        	id: 999,
        	name: '999'
        };
        this.ctx.status = 200;
    }
}

module.exports = StudentController;