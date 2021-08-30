const { Router } = require('express');
const coursesController = require('../controllers/coursesController');

const coursesRouter = new Router();

coursesRouter
  .route('/')
  .post(coursesController.createOne)
  .get(coursesController.getAll);

coursesRouter
  .route('/:userId')
  .get(coursesController.getOneById)
  .put(coursesController.updateOneById)
  .delete(coursesController.deleteOneById);

module.exports = coursesRouter;
