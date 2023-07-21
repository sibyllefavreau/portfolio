const texteTape = document.getElementById('texte-tape');

const texteComplet = texteTape.innerHTML;
texteTape.innerHTML = '';

let index = 0;
const vitesseEcriture = 1; // vitesse d'écriture en millisecondes

function taperTexte() {
  texteTape.innerHTML += texteComplet.charAt(index);
  index++;
  if (index < texteComplet.length) {
    setTimeout(taperTexte, vitesseEcriture);
  }
}

taperTexte();
