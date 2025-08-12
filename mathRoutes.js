// routes/mathRoutes.js — Porteiro principal que recebe o pedido e encaminha para o cozinheiro

const express = require('express');
const router = express.Router();

// Importa o porteiro auxiliar (validador)
const validateNumbers = require('../middlewares/validateNumbers');
// Importa o cozinheiro (controller)
const mathController = require('../controllers/mathController');

// Quando chegar um pedido POST no caminho /calcular:
// primeiro o porteiro confere se o pedido está correto (validateNumbers),
// depois entrega para o cozinheiro fazer os cálculos (calculateStats)
router.post('/', validateNumbers, mathController.calculateStats);

// Exporta o roteador para o chefe usar
module.exports = router;