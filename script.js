document.getElementById("dreCalculator").addEventListener("submit", function (event) {
  event.preventDefault();

  // Obtenha os valores digitados nos campos
  const receitaBruta = parseFloat(document.getElementById("receitaBruta").value);
  const deducoes = parseFloat(document.getElementById("deducoes").value);
  const custosProdutos = parseFloat(document.getElementById("custosProdutos").value);
  const despesasOperacionais = parseFloat(document.getElementById("despesasOperacionais").value);
  const provisoes = parseFloat(document.getElementById("provisoes").value);

  // Calcule os valores intermediários
  const receitaBrutaresul = receitaBruta;
  const receitaLiquida = receitaBruta - deducoes;
  const receitaOperacional = receitaLiquida - custosProdutos;
  const roair = receitaOperacional - despesasOperacionais;
  const lucroPrejuizo = roair - provisoes;

  // Atualize os campos de resultado com os valores calculados
  document.getElementById("receitaBrutaresul").textContent = receitaBrutaresul.toFixed(2);
  document.getElementById("resultReceitaLiquida").textContent = receitaLiquida.toFixed(2);
  document.getElementById("resultLucroBruto").textContent = receitaOperacional.toFixed(2);
  document.getElementById("resultLair").textContent = roair.toFixed(2);
  document.getElementById("resultLucroPrejuizoOperacional").textContent = lucroPrejuizo.toFixed(2);

  // Oculte a mensagem de resultado antes de exibi-la novamente
  const modal = document.getElementById("resultModal");
  modal.style.visibility = "hidden";

  // Exiba a mensagem de resultado
  modal.style.visibility = "visible";

  // Adicione um evento de clique para fechar a mensagem
  const closeBtn = document.getElementById("closeBtn");
  closeBtn.addEventListener("click", function () {
    modal.style.visibility = "hidden";
  });
});
