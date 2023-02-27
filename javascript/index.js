const listaInteiros = [10, 67, 785];
const palavras = ["Aula", "de", "Programação"];
const inteiro = parseInt("89");

console.log(inteiro);

class Pessoa {
  constructor(_idade, _nome) {
    this.idade = _idade;
    this.nome = _nome;
  }
}

const mawer = new Pessoa(42, "Mawer");
const kiari = new Pessoa(12, "Kiari");

console.log(mawer.nome);
console.log(kiari.nome);

function executar() {
  let numero1 = document.getElementById("numero1") || 0;
  let numero2 = document.getElementById("numero2") || 0;
  let operacao_valor =
    document.getElementById("operacao_valor") || "Não encontrado";
  let resultado_valor = document.getElementById("resultado_valor");

  try {
    if (operacao_valor.value === "soma") {
      resultado_valor.value = parseInt(numero1.value) + parseInt(numero2.value);
    } else if (operacao_valor.value === "subtracao") {
      resultado_valor.value = parseInt(numero1.value) - parseInt(numero2.value);
    } else if (operacao_valor.value === "multiplicacao") {
      resultado_valor.value = parseInt(numero1.value) * parseInt(numero2.value);
    } else if (operacao_valor.value === "divisao") {
      resultado_valor.value = parseInt(numero1.value) / parseInt(numero2.value);
    } else if (operacao_valor.value === "exponenciacao") {
      resultado_valor.value =
        parseInt(numero1.value) ** parseInt(numero2.value);
    } else if (operacao_valor.value === "porcentagem") {
      const porcentagem = parseInt(numero2.value) / 100;
      resultado_valor.value = parseInt(numero1.value) * porcentagem;
    } else {
      let mensagem_erro = "Operação não encontrada";
      mensagem_erro.innerHTML =
        "<div class='mensagem'>" + mensagem_erro + "</div>";
      //mensagem_erro.innerText = mensagem_erro;
      console.log(mensagem_erro);
      //alert(mensagem_erro);
    }
  } catch (e) {
    console.log = e;
  }
}
