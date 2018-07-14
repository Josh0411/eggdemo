'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/getlist/', controller.student.getList);
  router.get('/getdetail/:id', controller.student.getDetail);
};
