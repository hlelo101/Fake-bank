var para = document.getElementById('nom');

para.addEventListener('click', function() {
  console.log("clicked"); 
  var name = prompt('Quel est votre nom ?');
  para.textContent = name;
});
