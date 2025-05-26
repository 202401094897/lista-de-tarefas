function adicionarTarefa() {
  // cria o input
  const inputTarefa = document.getElementById("inputTarefa");
  // pega o valor digitado no input
  let tarefa = inputTarefa.value.trim();

  const mensagem = document.getElementById("mensagem");
  // insere o valor digitado no input no objeto html

  // se o valor do input for vazio, mostre uma mensagem de erro
  if (tarefa == "") {
    let mensagemErro = "Digite um valor";
    mensagem.textContent = mensagemErro;
  } else {
    let mensagemSucesso = "Tarefa adicionada com sucesso!";
    mensagem.textContent = mensagemSucesso;

    // pega o elemento ul e joga para o JS
    const listaTarefas = document.getElementById("listaTarefas");
    // cria um elemento li e atribui à variável novaTarefa
    let novaTarefa = document.createElement("li");
    // atribui o valor tarefa ao texto da novaTarefa
    novaTarefa.textContent = tarefa;
    // acrescenta elementos li dentro da ul
    listaTarefas.appendChild(novaTarefa);
  }
  // quando inclui uma nova tarefa, deixa o valor do campo vazio novamente.
  inputTarefa.value = "";
}
