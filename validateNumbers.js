// middlewares/validateNumbers.js — Porteiro auxiliar que confere o pedido antes de entrar na cozinha

module.exports = (req, res, next) => {
  // Pega o campo 'numeros' do pedido (corpo JSON)
  const numeros = req.body.numeros;

  // Verifica se o pedido é um array e não está vazio
  if (!Array.isArray(numeros) || numeros.length === 0) {
    // Se não estiver correto, devolve erro 400 (pedido inválido)
    return res.status(400).json({ erro: 'Envie um array válido no campo "numeros".' });
  }

  // Verifica se todos os itens do array são números
  if (!numeros.every(n => typeof n === 'number')) {
    // Se algum não for número, retorna erro
    return res.status(400).json({ erro: 'Todos os elementos do array devem ser números.' });
  }

  // Se tudo ok, deixa o pedido seguir para o cozinheiro
  next();
};