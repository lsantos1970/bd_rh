const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("../config");
const User = require("../models/user.model");

const router = express.Router();

// Endpoint para registo de novo user
router.post("/register", async (req, res) => {
  const { nap_id, nome, password, role } = req.body;

  try {
    // Verifica se o user já existe (pela propriedade nap_id)
    const userExists = await User.findOne({ nap_id });
    if (userExists) {
      return res.status(400).json({ message: "User já existe." });
    }

    // Gera um hash da senha (10 salt rounds)
    const hashedPassword = await bcrypt.hash(password, 10);

    // Cria o novo usuário
    const newUser = new User({
      nap_id,
      nome,
      password: hashedPassword,
      role: role && ["admin", "colaborador"].includes(role) ? role : "colaborador",
    });

    // Salva o usuário na base
    await newUser.save();

    res.status(201).json({
      message: "User registado com sucesso.",
      user: { nap_id: newUser.nap_id, nome: newUser.nome, role: newUser.role },
    });
  } catch (error) {
    console.error("Erro no registo:", error);
    res.status(500).json({ message: "Erro interno." });
  }
});

// Endpoint de login (opcional, para efetuar autenticação)
router.post("/login", async (req, res) => {
  const { nap_id, password } = req.body;

  try {
    const user = await User.findOne({ nap_id });
    if (!user) {
      return res.status(401).json({ message: "Credenciais inválidas." });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: "Credenciais inválidas." });
    }

    const token = jwt.sign(
      { nap_id: user.nap_id, nome: user.nome, role: user.role },
      config.jwtSecret,
      { expiresIn: config.jwtExpiresIn }
    );

    res.json({ token, user: { nap_id: user.nap_id, nome: user.nome, role: user.role } });
  } catch (error) {
    console.error("Erro de login:", error);
    res.status(500).json({ message: "Erro interno." });
  }
});

module.exports = router;