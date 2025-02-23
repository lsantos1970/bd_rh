const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../config");

const router = express.Router();

// "Banco de dados" simulado (substitua por um banco real)
const users = [];

// Endpoint para registro de usuário
router.post("/register", async (req, res) => {
  const { nap_id, password, nome, permissoes } = req.body;

  // Verifica se o usuário já existe
  const userExists = users.find(u => u.nap_id == nap_id);
  if (userExists) {
    return res.status(400).json({ message: "Usuário já existe." });
  }

  // Gera hash da senha com bcrypt
  const hashedPassword = await bcrypt.hash(password, 10);

  // Cria e salva o novo usuário
  const newUser = { nap_id, password: hashedPassword, nome, permissoes };
  users.push(newUser);

  res.status(201).json({ message: "Usuário criado com sucesso." });
});

// Endpoint de login
router.post("/login", async (req, res) => {
  const { nap_id, password } = req.body;

  // Busca o usuário pelo nap_id
  const user = users.find(u => u.nap_id == nap_id);
  if (!user) {
    return res.status(401).json({ message: "Credenciais inválidas." });
  }

  // Compara a senha informada com o hash armazenado
  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    return res.status(401).json({ message: "Credenciais inválidas." });
  }

  // Gera um token JWT com os dados do usuário
  const token = jwt.sign(
    { nap_id: user.nap_id, nome: user.nome, permissoes: user.permissoes },
    config.jwtSecret,
    { expiresIn: config.jwtExpiresIn }
  );

  res.json({ token, user: { nap_id: user.nap_id, nome: user.nome, permissoes: user.permissoes } });
});

module.exports = router;