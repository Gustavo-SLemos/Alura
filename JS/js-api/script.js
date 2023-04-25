async function buscaEndereco(cep) {
  const mensagemErro = document.querySelector("#erro");
  mensagemErro.innerHTML = "";
  try {
    let consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    let consultaCepConvertida = await consultaCep.json();
    if (consultaCepConvertida.erro) {
      throw Error("CEP não existe!");
    }
    let cidade = document.querySelector("#cidade");
    let logradouro = document.querySelector("#endereco");
    let estado = document.querySelector("#estado");
    let bairro = document.querySelector("#bairro");

    cidade.value = consultaCepConvertida.localidade;
    logradouro.value = consultaCepConvertida.logradouro;
    estado.value = consultaCepConvertida.uf;
    bairro.value = consultaCepConvertida.bairro;
    console.log(consultaCepConvertida);
  } catch (erro) {
    mensagemErro.innerHTML = `<br><p>CEP inválido. Tente novamente!</p>`
    console.log(erro);
  }
}

let cep = document.querySelector("#cep");
cep.addEventListener("focusout", () => buscaEndereco(cep.value));
