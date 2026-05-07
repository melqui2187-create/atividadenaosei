// LISTA DE PRODUTOS
const produtos = [
  {
    nome: "Camisa",
    preco: 50,
    imagem: "D:\\Usuarios\\1056592\\Downloads\\Atibidadestpervisionada\\download (1).jpg"
  },
  {
    nome: "Tênis",
    preco: 120,
    imagem: "D:\\Usuarios\\1056592\\Downloads\\Atibidadestpervisionada\\download (2).jpg"
  },
  {
    nome: "Boné",
    preco: 30,
    imagem: "D:\\Usuarios\\1056592\\Downloads\\Atibidadestpervisionada\\download.jpg"
  }
];

// CARRINHO
let carrinho = [];

// ELEMENTOS
const produtosDiv = document.getElementById("produtos");
const listaCarrinho = document.getElementById("lista-carrinho");
const totalSpan = document.getElementById("total");

// MOSTRAR PRODUTOS
function mostrarProdutos() {
  produtos.forEach((produto, index) => {
    const div = document.createElement("div");
    div.className = "card";

    div.innerHTML = `
      <img src="${produto.imagem}">
      <h3>${produto.nome}</h3>
      <p>R$ ${produto.preco}</p>
      <button onclick="adicionar(${index})">Adicionar</button>
    `;

    produtosDiv.appendChild(div);
  });
}

// ADICIONAR AO CARRINHO
function adicionar(index) {
  carrinho.push(produtos[index]);
  atualizarCarrinho();
}

// REMOVER DO CARRINHO
function remover(index) {
  carrinho.splice(index, 1);
  atualizarCarrinho();
}

// ATUALIZAR CARRINHO
function atualizarCarrinho() {
  listaCarrinho.innerHTML = "";

  carrinho.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "item-carrinho";

    div.innerHTML = `
      <img src="${item.imagem}">
      <div>
        <p>${item.nome}</p>
        <p>R$ ${item.preco}</p>
        <button onclick="remover(${index})">Remover</button>
      </div>
    `;

    listaCarrinho.appendChild(div);
  });

  calcularTotal();
}

// CALCULAR TOTAL
function calcularTotal() {
  const total = carrinho.reduce((soma, item) => soma + item.preco, 0);
  totalSpan.textContent = total;
}

// INICIAR
mostrarProdutos();