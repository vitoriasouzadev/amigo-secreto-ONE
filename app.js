let amigos = [];

function adicionarAmigo() {
  let input = document.getElementById("amigo");
  let nome = input.value.trim();

  if (nome && !amigos.includes(nome)) {
    amigos.push(nome);
    atualizarLista();
    input.value = "";
  } else {
    alert("Nome inválido ou já adicionado.");
  }
}

function atualizarLista() {
  let ul = document.getElementById("listaAmigos");
  ul.innerHTML = "";
  amigos.forEach(amigo => {
    let li = document.createElement("li");
    li.textContent = amigo;
    ul.appendChild(li);
  });
}

function sortearAmigo() {
  if (amigos.length < 2) {
    alert("É necessário pelo menos 2 amigos para o sorteio!");
    return;
  }

  let sorteio = {};
  let amigosDisponiveis = [...amigos];

  for (let amigo of amigos) {
    let possiveis = amigosDisponiveis.filter(a => a !== amigo);

    if (possiveis.length === 0) {
      alert("Sorteio inválido! Tente novamente.");
      return;
    }

    let escolhido = possiveis[Math.floor(Math.random() * possiveis.length)];
    sorteio[amigo] = escolhido;

    amigosDisponiveis = amigosDisponiveis.filter(a => a !== escolhido);
  }

  exibirResultado(sorteio);
}

function exibirResultado(sorteio) {
  let ul = document.getElementById("resultado");
  ul.innerHTML = "";
  for (let [amigo, secreto] of Object.entries(sorteio)) {
    let li = document.createElement("li");
    li.textContent = `${amigo} → ${secreto}`;
    ul.appendChild(li);
  }
}
