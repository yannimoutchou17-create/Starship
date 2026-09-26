
// importation de la classe Game.js
import Game from './game.js';


// mise en place de l'action des clics sur les boutons + les gestionnaires du clavier pour contrôler Greedy
const init = () => {
   const canvas = document.getElementById("playfield");
   const game = new Game(canvas);

   //alert('Complétez la fonction init(), la classe Game et les autres classes demandée');
   document.getElementById("stopAndStartGame").addEventListener("click", () => game.startAndStop());

   window.addEventListener("keydown", game.keyDownActionHandler.bind(game));
   window.addEventListener("keyup", game.keyUpActionHandler.bind(game));
   game.start();
}

init();

//
console.log('le bundle a été généré');
