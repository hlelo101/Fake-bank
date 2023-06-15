let para = document.querySelector('#nom');

para.addEventListener('click', updateName);

function updateName() {
  let name = prompt('Quel est votre nom ?');
  para.textContent = name;
}
