const express = require('express');

const UserService = require('./../services/user.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { updateUserSchema, createUserSchema, getUserSchema } = require('./../schemas/user.schema');

const service = new UserService();
const router = express.Router();

router.get('/', (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset){
    res.json(
      {
        limit,
        offset
      }
    );
  } else {
    res.send('sin parametros');
  }
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  res.json(
    {
      id,
      nombre: `User ${id}`,
      age: 27
    }
  )
});

router.get('/:userId/categories/:categoryId/product/:productId', (req, res) => {
  const { userId, categoryId, productId } = req.params;
  res.json(
    {
      userId,
      categoryId,
      productId
    }
  )
});

module.exports = router;
