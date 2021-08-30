const Cursos = require('../models/courseModel');

async function createOne({ body }, res) {
  try {
    const newUser = await Cursos.create(body);
    res.json(newUser);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function getAll({ query }, res) {
  try {
    const users = await Cursos.find(query);
    res.json(users);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function getOneById({ params: { userId } }, res) {
  try {
    const user = await Cursos.findById(userId)
      .populate({
        path: 'friends',
        select: ['name']
      })
      .populate({
        path: 'adversaries',
        select: ['name', 'friends']
      });

    res.json(user);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function updateOneById(
  {
    body,
    params: { userId }
  },
  res
) {
  try {
    const updatedUser = await Cursos.findByIdAndUpdate(
      userId,
      body,
      {
        new: true,
        useFindAndModify: false
      }
    );

    res.json(updatedUser);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function deleteOneById({ params: { userId } }, res) {
  try {
    await Cursos.findByIdAndDelete(userId);
    res.status(204);
    res.json();
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

module.exports = {
  createOne,
  getAll,
  getOneById,
  updateOneById,
  deleteOneById
};
