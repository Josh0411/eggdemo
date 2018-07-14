var Service = require('egg').Service;

class StudentService extends Service {
	async getStudents() {
		return [{
            id: 1,
            name: 's1'
        }, {
            id: 2,
            name: 's2'
        }, {
            id: 3,
            name: 's3'
        }, {
            id: 4,
            name: 's4'
        }, {
            id: 5,
            name: 's5'
        }, {
            id: 6,
            name: 's6'
        }];
	}
}

module.exports = StudentService;