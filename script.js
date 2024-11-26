// Função para formatar valores como moeda (R$)
function formatCurrency(value) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }); // Converte o valor para formato monetário brasileiro (R$)
}

// Função para atualizar o texto de um elemento com um valor formatado
function updateResult(elementId, value) {
  document.getElementById(elementId).textContent = formatCurrency(value); // Atualiza o conteúdo do elemento com o valor formatado
}

// Função para mostrar o modal de resultados
function showModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.visibility = "visible"; // Torna o modal visível
}

// Função para esconder o modal
function hideModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.visibility = "hidden"; // Torna o modal invisível
}

// Adiciona evento de clique no botão "Fechar" do modal
document.getElementById("closeBtn").addEventListener("click", function () {
  hideModal("resultModal"); // Ao clicar no botão de fechar, o modal é ocultado
});

// Evento principal do formulário
document.getElementById("dreCalculator").addEventListener("submit", function (event) {
  event.preventDefault(); // Impede o envio do formulário e recarregamento da página

  // Obtenha os valores digitados nos campos, com valores padrão de 0 caso não sejam preenchidos
  const receitaBruta = parseFloat(document.getElementById("receitaBruta").value) || 0; 
  const deducoes = parseFloat(document.getElementById("deducoes").value) || 0;
  const custosProdutos = parseFloat(document.getElementById("custosProdutos").value) || 0;
  const despesasOperacionais = parseFloat(document.getElementById("despesasOperacionais").value) || 0;
  const provisoes = parseFloat(document.getElementById("provisoes").value) || 0;

  // Calcule os valores intermediários
  const receitaBrutaresul = receitaBruta; // A receita bruta é a mesma que foi informada
  const receitaLiquida = receitaBruta - deducoes; // Subtrai as deduções da receita bruta
  const receitaOperacional = receitaLiquida - custosProdutos; // Subtrai os custos dos produtos da receita líquida
  const roair = receitaOperacional - despesasOperacionais; // Subtrai as despesas operacionais da receita operacional
  const lucroPrejuizo = roair - provisoes; // Subtrai as provisões do resultado operacional

  // Atualize os campos de resultado com os valores calculados
  updateResult("receitaBrutaresul", receitaBrutaresul);
  updateResult("resultReceitaLiquida", receitaLiquida);
  updateResult("resultLucroBruto", receitaOperacional);
  updateResult("resultLair", roair);
  updateResult("resultLucroPrejuizoOperacional", lucroPrejuizo);

  // Exiba o modal de resultados
  showModal("resultModal"); // Exibe o modal com os resultados
});
