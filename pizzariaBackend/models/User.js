const mongoose = require('mongoose');

const EnderecoSchema = new mongoose.Schema({
  rua: String,
  numero: String,
  complemento: String,
  bairro: String,
  cidade: String,
  estado: String,
  cep: String,
}, { _id: false });

const UserSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  senha: {
    type: String,
    required: true
  },
  telefone: String,
  endereco: EnderecoSchema,
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);
