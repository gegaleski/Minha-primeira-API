// controllers/mathController.js — Cozinheiro que prepara a comida (faz os cálculos)

// Importa a biblioteca de matemática (mathjs)
const math = require('mathjs');

// Função que recebe o pedido, faz os cálculos e responde
exports.calculateStats = (req, res) => {
  // Pega o pedido enviado pelo cliente (array de números)
  const numeros = req.body.numeros;

  try {
    // O cozinheiro calcula a média, máximo e mínimo usando funções prontas
    const media = math.mean(numeros);
    const maximo = math.max(numeros);
    const minimo = math.min(numeros);

    // O cozinheiro entrega a resposta com os resultados
    return res.json({ media, maximo, minimo });
  } catch (error) {
    // Se der problema na cozinha, avisa o cliente com erro 500
    console.error(error);
    return res.status(500).json({ erro: 'Erro ao calcular os valores.' });
  }
};