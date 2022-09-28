/* 
Formulario JS - Integrando com o PHP - URL do Script PHP de envio> https://www.origamid.com/slide/html-e-css-para-iniciantes/#/1304-formulario-php/3

Selecionamos o formulário das duas páginas, mas temos que tomar cuidado em projetos maiores e que existam mais

const formulario = document.querySelector('form');

Função do then, para mensagem de sucesso ou falha formularioEnviado
function formularioEnviado(resposta){
Se a resposta deu certo
 if(resposta.ok){
  formulario.innerHTML = "<p class='font-2-l style='grid-column: 1/-1; padding: 1rem; border-radius: 4px; background: #f7f7f7;'><span style='color: #317a00'>Mensagem enviada</span>, em breve entraremos em contato. Geralmente respondemos em 24h.</p>"
Se a resposta deu erro
 } else {
  formulario.innerHTML = "<p class='font-2-l style='grid-column: 1/-1; padding: 1rem; border-radius: 4px; background: #f7f7f7;'><span style='color: #E00000'>Erro no envio</span>, você pode enviar diretamente para o nosso email em: contato@bikcraftjs.hypegrowth.com.br</p>";
 }
}


Adicionando função de enviar
function enviarFormulario(event){
Adicionamos o preventDefault() no form para evitar o padrão do formulário, se fosse no botão ele evitaria todo o processo do botão
  event.preventDefault();

Para as pessoas não clicarem diversas vezes gerando novos e-mails
const botao = document.querySelector('form button')

Depois de clicado, desativar o botão
botao.disabled = true;
Alterando o texto depois de clicado para Enviando...
botao.innerText = "Enviando...";

Pegar os dados do formulário
const data = new FormData(formulario);
Dentro de data adicionamos o get('') e o que queremos puxar entre aspas

A função fetch recebe o url o qual está enviando ou puxando dados e depois um objeto com as configs da conexão, com o method e de onde estou puxando
fetch('./enviar.php', {
  method: 'POST',
  body: data
}).then(formularioEnviado)
Existe um method que usamos no próprio fetch para depois que a tentativa ter tido sucesso ou falha que é o then
;
}

Adicionando um evento no formulario 
formulario.addEventListener('submit', enviarFormulario) 

*/

//FUNÇÃO DO FORMULARIO JS INTEGRADA AO PHP
const formulario = document.querySelector('form');
function formularioEnviado(resposta) {
  if (resposta.ok) {
    formulario.innerHTML = "<p class='font-2-l style='grid-column: 1/-1; padding: 1rem; border-radius: 4px; background: #f7f7f7;'><span style='color: #317a00'>Mensagem enviada</span>, em breve entraremos em contato. Geralmente respondemos em 24h.</p>"
  } else {
    formulario.innerHTML = "<p class='font-2-l style='grid-column: 1/-1; padding: 1rem; border-radius: 4px; background: #f7f7f7;'><span style='color: #E00000'>Erro no envio</span>, você pode enviar diretamente para o nosso email em: contato@bikcraftjs.hypegrowth.com.br</p>";
  }
}
function enviarFormulario(event) {
  event.preventDefault();
  const botao = document.querySelector('form button')
  botao.disabled = true;
  botao.innerText = "Enviando...";
  const data = new FormData(formulario);
  fetch('./enviar.php', {
    method: 'POST',
    body: data
  }).then(formularioEnviado);
}
formulario.addEventListener('submit', enviarFormulario) 