const divpai = document.getElementById('dom');
const textarea = document.getElementById('textarea');

function adicionar() {
  console.log(divpai);
  const divfilho = document.createElement('div');
  divfilho.innerText = textarea.value;
  divpai.appendChild(divfilho);
}