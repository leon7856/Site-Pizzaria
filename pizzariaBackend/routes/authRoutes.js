const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');


router.post('/login', async (req, res) => {
  const { email, senha } = req.body;

  try {
    
    const usuario = await User.findOne({ email });
    if (!usuario) {
      return res.status(400).json({ mensagem: 'Email ou senha inválidos.' });
    }

  
    const senhaCorreta = await bcrypt.compare(senha, usuario.senha);
    if (!senhaCorreta) {
      return res.status(400).json({ mensagem: 'Email ou senha inválidos.' });
    }

    
    const token = jwt.sign(
      { id: usuario._id, email: usuario.email },
      process.env.JWT_SECRET,
      { expiresIn: '2h' }
    );

    res.json({ mensagem: 'Login realizado com sucesso!', token });

  } catch (error) {
    console.error('Erro no login:', error);
    res.status(500).json({ mensagem: 'Erro interno no servidor.' });
  }
});

const autenticarToken = require('../middlewares/authMiddleware');

router.get('/perfil', autenticarToken, (req, res) => {
  res.json({ mensagem: 'Você acessou um perfil protegido!', usuario: req.usuario });
});



module.exports = router;
