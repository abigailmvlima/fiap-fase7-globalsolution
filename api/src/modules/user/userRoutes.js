import express from 'express';
import {  getAllUsers, getUserById, updateUser, deleteUser } from './userService';

const router = express.Router();


// Endpoint para obter todos os usuários
router.get('/', async (req, res) => {
  try {
    const users = await getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Endpoint para obter um usuário pelo ID
router.get('/:id', async (req, res) => {
  try {
    const user = await getUserById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// Endpoint para atualizar um usuário pelo ID
router.patch('/:id', async (req, res) => {
  try {
    const user = await updateUser(req.params.id, req.body);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Endpoint para deletar um usuário pelo ID
router.delete('/:id', async (req, res) => {
  try {
    const user = await deleteUser(req.params.id);
    res.status(200).json({ message: 'Usuário deletado com sucesso', user });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

export default router;
