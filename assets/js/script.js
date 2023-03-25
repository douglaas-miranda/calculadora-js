/* Funcionalidades  da calculadora */

function inserir(num) {
  let tela = document.querySelector('.tela');
    tela.innerHTML += num;
}

function limpar() {
  document.querySelector('.tela').innerHTML = "";
}

function apagar() {
  let tela = document.querySelector('.tela').innerHTML;
  document.querySelector('.tela').innerHTML = tela.substring(0, tela.length-1);
}

function somar () {
  let tela = document.querySelector('.tela').innerHTML;  
  if(tela) {
    document.querySelector('.tela').innerHTML = eval(tela);
  }else {
    document.querySelector('.tela').innerHTML = "nenhum comando"
  }
}

/* Modo Escuro */

const toggleDark = document.getElementById('dark-theme');
const html = document.querySelector('html');

toggleDark.addEventListener('click', function () {
  console.log('OK');
  html.classList.toggle('dark-mode');
})