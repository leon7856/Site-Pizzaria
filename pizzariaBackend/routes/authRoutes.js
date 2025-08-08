// routes/authRoutes.js
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const JWT_SECRET = process.env.JWT_SECRET || "secreta123"; // depois coloque no .env

// Registro
router.post("/register", async (req, res) => {
  const { nome, email, senha } = req.body;

  try {
    const existente = await User.findOne({ email });
    if (existente) return res.status(400).json({ mensagem: "Email já cadastrado." });

    const senhaCriptografada = await bcrypt.hash(senha, 10);

    const novoUsuario = new User({ nome, email, senha: senhaCriptografada });
    await novoUsuario.save();

    res.status(201).json({ mensagem: "Usuário registrado com sucesso!" });
  } catch (err) {
    res.status(500).json({ mensagem: "Erro ao registrar", erro: err.message });
  }
});

// Login
router.post("/login", async (req, res) => {
  const { email, senha } = req.body;

  try {
    const usuario = await User.findOne({ email });
    if (!usuario) return res.status(404).json({ mensagem: "Usuário não encontrado." });

    const senhaValida = await bcrypt.compare(senha, usuario.senha);
    if (!senhaValida) return res.status(401).json({ mensagem: "Senha incorreta." });

    const token = jwt.sign({ id: usuario._id, tipo: usuario.tipo }, JWT_SECRET, {
      expiresIn: "3h",
    });

    res.json({ token, usuario: { nome: usuario.nome, tipo: usuario.tipo } });
  } catch (err) {
    res.status(500).json({ mensagem: "Erro no login", erro: err.message });
  }
});

module.exports = router;
