function comprar(){
  //resgatar tipo e quantidade de ingressos
  let ingressoTipo = document.getElementById('tipo-ingresso').value;
  let quantidade = parseInt(document.getElementById('qtd').value);

  selecionarIngresso(ingressoTipo, quantidade);

}

function selecionarIngresso(tipo ,quantidade){
  let qntDisponivel = parseInt(document.getElementById(`qtd-${tipo}`).textContent);
  if (quantidade > qntDisponivel) {
    alert(`Quantidade indisponivel para o tipo ${tipo}!`);
  } else {
    qntDisponivel = qntDisponivel - quantidade;
    document.getElementById(`qtd-${tipo}`).textContent = qntDisponivel;
    alert('Compra realizada com sucesso!');
  }
}