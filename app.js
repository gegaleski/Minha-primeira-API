// app.js — Chefe que organiza tudo e abre o restaurante API

// Importa o Express, que será nosso "garçom" da API
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Importa as rotas que são os "porteiros" do restaurante
const mathRoutes = require('./routes/mathRoutes');

// Faz o garçom entender pedidos em JSON (a "língua" do cliente)
app.use(express.json());

// Diz que toda requisição que começar com /calcular será entregue para os porteiros mathRoutes
app.use('/calcular', mathRoutes);

// O chefe abre o restaurante na porta definida
app.listen(port, () => {
  console.log(`🍽️ Restaurante API aberto na porta ${port}!`);
});