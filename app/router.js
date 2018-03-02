'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/account/index', controller.account.index);
  router.post('/account/register', controller.account.register);
  router.post('/account/login', controller.account.login);
};
