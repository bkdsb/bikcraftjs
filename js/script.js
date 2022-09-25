//Verificando se os links estão ativos
const links = document.querySelectorAll('.header-menu a');

//Agora quero ativar uma função para cada um dos links

//verificar se uma url contém um termo específico se conter quero ativar ela 

//a informação do url temos dentro de location que está dentro de window, mas qualquer objeto dentro do window podemos acessa-lo diretamente sem necessidade de escrever window.location por exemplo
function ativarLink(link) {
  //pegamos a info do url através do .href
  const url = location.href;
  //pegamos a info do link também com o .href
  const href = link.href;
  //Podemos verificar se a url é igual ao href para ativarmos a função, porém não é o melhor método, ex;
  //   if (url === href){
  //     console.log(link);
  //   }
  // }
  // Existe o médodo .includes() que faz a verificação se algo contém dentro de onde estamos fazendo uma ativação de uma função ou algo parecido
  if (url.includes(href)) {
   //se a url incluir o href, então execute:
   //class.List.add('classeCss');
   link.classList.add('ativo');
    
  }
}
links.forEach(ativarLink);