'use strict';

import { Router as routerFactory } from 'express';
import searchUsers from './searchUsers'

let router = routerFactory(),
    routes;

router.route('/api/users/')
  .get(searchUsers);

routes = (app) => {
  app.use(router);
};

export default routes;
