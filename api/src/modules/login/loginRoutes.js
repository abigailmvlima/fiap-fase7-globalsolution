import express from "express";
import jwt from "jsonwebtoken";
import User from "../user/useModel";

const router = express.Router();

// Rota para fazer login
router.post("/login", async (req, res) => {
  const { mail, password } = req.body;  
  try {
    // Verifica se o usuário existe no banco de dados
    const user = await User.findOne({ mail });
    if (!user) {
      return res.status(401).json({ message: "Credenciais inválidas" });
    }

    // Verifica a senha do usuário
    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Credenciais inválidas" });
    }

    console.log(123, process.env.JWT_SECRET)
    // Cria e retorna um token JWT para o usuário logado
    const token = jwt.sign({ user: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro interno do servidor" });
  }
});

// Criar um novo usuário
router.post("/register", async (req, res) => {
  const { name, mail, password } = req.body;

  try {
    // Verifique se o usuário já existe no banco de dados
    const existingUser = await User.findOne({ mail });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // Crie um novo usuário
    const newUser = new User({ name, mail, password });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
