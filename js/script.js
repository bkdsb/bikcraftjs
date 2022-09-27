/* Ativar links do menu

Verificando se os links estão ativos
const links = document.querySelectorAll('.header-menu a');

Agora quero ativar uma função para cada um dos links

verificar se uma url contém um termo específico se conter quero ativar ela 

a informação do url temos dentro de location que está dentro de window, mas qualquer objeto dentro do window podemos acessa-lo diretamente sem necessidade de escrever window.location por exemplo
function ativarLink(link) {
  pegamos a info do url através do .href
  const url = location.href;
  pegamos a info do link também com o .href
  const href = link.href;
  Podemos verificar se a url é igual ao href para ativarmos a função, porém não é o melhor método, ex;
    if (url === href){
      console.log(link);
    }
  }
  Existe o médodo .includes() que faz a verificação se algo contém dentro de onde estamos fazendo uma ativação de uma função ou algo parecido
  if (url.includes(href)) {
   se a url incluir o href, então execute:
   class.List.add('classeCss');
   link.classList.add('ativo');
    
  }
}
links.forEach(ativarLink); */

//Função Ativar Links do Menu e mante-los ativos
const links = document.querySelectorAll('.header-menu a');
function ativarLink(link) {
  const url = location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add('ativo');
  }
}
links.forEach(ativarLink);

//###############################################################

/*  Ativar itens do Orçamento // Parâmetros URL

No JS existe uma função para pesquisar os parametros específicos que é URLSearchParams(); o 'new' presente na URLSearchParams indica que na verdade ela é uma class então precisamos passar a palavra chave new antes de executa-la

Essa função retorna basicamente um Array com esses params
const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro){
  Para selecionar o produto e ativa-lo:
  const elemento = document.getElementById(parametro);
  Verificar se o parâmetro existe para evitar erros
  if(elemento) {
    Para mudar no input para checked
    elemento.checked = true;
  }
  console.log(elemento);
}

Para verificar o que tem dentro desses parâmetros usamos o forEach e ativamos a função que criamos acima
parametros.forEach(ativarProduto);
 */

const parametros = new URLSearchParams(location.search);
function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
  console.log(elemento);
}
parametros.forEach(ativarProduto);

//###############################################################

/* Perguntas frequentes

Selecionando cada botão dentro de perguntas 


// Selecionando cada botão dentro de perguntas 
const perguntas = document.querySelectorAll('.perguntas button');

//Aqui definimos o que vai ocorrer quando clicar na pergunta
//Se estou dentro de um evento tenho acesso ao parâmetro event
function ativarPergunta(event){
  //Para puxar o elemento que está selecionado/clicado
 const pergunta = event.currentTarget;
  //O botão e a pergunta tem o mesmo id e então se relacionam
  //Para puxar o valor que está em ariacontrols quando clicar
  const controls = pergunta.getAttribute('aria-controls');

  //Agora é só selecionar o elemento
  const resposta = document.getElementById(controls);

  //Adicionar uma classe na resposta que ativa e desativa com o toggle
  resposta.classList.toggle('ativa');

  //Para verificarmos se no botão contém a classe 'ativa' e então adicionar o aria-expanded=true
  const ativa = resposta.classList.contains('ativa');
  console.log(ativa)
  //Para mudarmos o valor do aria-controls selecionamos ele e depois o novo valor que será definido usando o setAttribute()

  //Se passamos o valor direto, por ser booleano, ele transforma automaticamente na string
  pergunta.setAttribute('aria-expanded', ativa);
}


//Aqui na função temos acesso a cada pergunta específica 
function eventosPerguntas(pergunta) {
  //dentro da pergunta adicionamos o evento de clique
  pergunta.addEventListener('click', ativarPergunta);

}

perguntas.forEach(eventosPerguntas);
*/

//FUNÇÃO PARA PERGUNTAS FREQUENTES QUE ADICIONA CLASSE E VALOR, OU REMOVE-OS TAMBÉM
const perguntas = document.querySelectorAll('.perguntas button');
function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute('aria-controls');
  const resposta = document.getElementById(controls);
  resposta.classList.toggle('ativa');
  const ativa = resposta.classList.contains('ativa');
  pergunta.setAttribute('aria-expanded', ativa);
}
function eventosPerguntas(pergunta) {
  pergunta.addEventListener('click', ativarPergunta);
}
perguntas.forEach(eventosPerguntas);

//###############################################################

//GALERIA DE BICICLETAS

//Começar selecionando a lista
const galeria = document.querySelectorAll('.bicicleta-imagens img');
//Selecionando também o container que envolve a galeria
const galeriaContainer = document.querySelector('.bicicleta-imagens');

//Função de trocar imagem 
function trocarImagem(event){
 const img = event.currentTarget;
 //Uma verificação se a tela está em um tamanho para parar de executar o prepend(), o método é o matchMedia('') que recebe string e um media como escreveríamos no CSS matchMedia('(min-width: 1000px)') e adicionamos o '.matches' para verificar se está no tamanho definido
 //
 const media = matchMedia('(min-width: 1000px)').matches;
 console.log(media);

 if(media){
   //Temos um metodo para trocar a ordem de itens no DOM (html), que é o prepend() que remove um elemento e coloca-o em outra posição
   galeriaContainer.prepend(img);
  }
 }




//Passando as imagens e dentro delas o evento de click e uma função para trocar imagem
function eventosGaleria(img) {
  img.addEventListener('click', trocarImagem);
}

//Sempre começamos adicionando o evento de click
galeria.forEach(eventosGaleria);