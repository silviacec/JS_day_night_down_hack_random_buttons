//step1: avec seulement deux boutons en haut:

// document.querySelector('.night-button').addEventListener('click', function() {
//   document.querySelector('body').classList.add('night');
//   document.querySelector('body').classList.remove('day');
// });
// document.querySelector('.day-button').addEventListener('click', function() {
//   document.querySelector('body').classList.add('day');
//   document.querySelector('body').classList.remove('night');
// });

// Step2: avec des boutons en haut et deux en bas, du coup avec des fonctions qui regroupent les changement, pour les appliquer à deux boutons à la fois

// pour afficher un thème par défaut avec JavaScript, on peut l'appeler sans click:
// faireNuit();
//
// function faireJour() {
//   document.querySelector('body').classList.add('day');
//   document.querySelector('body').classList.remove('night', 'down', 'hack');
// }
// function faireNuit() {
//   document.querySelector('body').classList.add('night');
//   document.querySelector('body').classList.remove('day', 'down', 'hack');
// }
// function faireDown() {
//   document.querySelector('body').classList.add('down');
//   document.querySelector('body').classList.remove('day', 'night', 'hack');
// }
// function hacker() {
//   document.querySelector('body').classList.add('hack');
//   document.querySelector('body').classList.remove('day', 'night', 'down');
// }
//
// document.querySelector('.day-button-haut').addEventListener('click', faireJour);
// document.querySelector('.day-button-bas').addEventListener('click', faireJour);
//
// document.querySelector('.night-button-haut').addEventListener('click', faireNuit);
// document.querySelector('.night-button-bas').addEventListener('click', faireNuit);
//
// document.querySelector('.down-button-haut').addEventListener('click', faireDown);
// document.querySelector('.down-button-bas').addEventListener('click', faireDown);
//
// document.querySelector('.hack-button-haut').addEventListener('click', hacker);
// document.querySelector('.hack-button-bas').addEventListener('click', hacker);
//marche aussi
// function changerTheme(theme1, theme2, theme3, theme4) {
//     document.querySelector('body').classList.add(theme1);
//     document.querySelector('body').classList.remove(theme2, theme3, theme4);
// }
// document.querySelector('.day-button-haut').addEventListener('click', function (){
//   changerTheme('day', 'night', 'down', 'hack');
// });
// document.querySelector('.night-button-haut').addEventListener('click', function (){
//   changerTheme('night', 'day', 'down', 'hack');
// });
// document.querySelector('.down-button-haut').addEventListener('click', function (){
//   changerTheme('down', 'night', 'day', 'hack');
// });
// document.querySelector('.hack-button-haut').addEventListener('click', function (){
//   changerTheme('hack', 'down', 'night', 'day');
// });
//
// fonction résumée
function changerTheme(premierArgument) {
  let leBody = document.querySelector('body');
  leBody.classList.remove('theme1', 'theme2', 'theme3', 'theme4');
  leBody.classList.add(premierArgument);
}
// le makeRandom pour changer de thème de manière aléatoire
function makeRandom() {
    i = Math.floor((Math.random() * 4)+1);
    var x = document.querySelector("body");
    var v = x.getAttribute("class");
    v = "theme"+i;
    x.setAttribute("class", v);
}

document.querySelector('.day-button-haut').addEventListener('click', function (){
  changerTheme('theme1');
});
document.querySelector('.night-button-haut').addEventListener('click', function (){
  changerTheme('theme2');
});
document.querySelector('.down-button-haut').addEventListener('click', function (){
  changerTheme('theme3');
});
document.querySelector('.hack-button-haut').addEventListener('click', function (){
  changerTheme('theme4');
});
document.querySelector('.day-button-bas').addEventListener('click', function (){
  changerTheme('theme1');
});
document.querySelector('.night-button-bas').addEventListener('click', function (){
  changerTheme('theme2');
});
document.querySelector('.down-button-bas').addEventListener('click', function (){
  changerTheme('theme3');
});
document.querySelector('.hack-button-bas').addEventListener('click', function (){
  changerTheme('theme4');
});

document.querySelector('.random-button-haut').addEventListener('click', makeRandom);
