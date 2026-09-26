import Basket from "./basket";
import Egg from "./egg";
import KeyManager from "./keyManager";
import Rocket from "./rocket";
import rocket from './assets/images/rocket.png'

export default class Game {

   /**
    * constructeur qui prend en parametre le canvas sur laquelle on va dessiner.
    * @param {*} canvas 
    */
   constructor(canvas) {
      this.canvas = canvas;
      this.context = canvas.getContext("2d");

      this.joueur = new Basket(canvas.width / 2, canvas.height / 2);
      this.eggs = [];
      this.rockets = [];

      this.score = 0;
      this.vies = 3;

      this.keyManager = new KeyManager();

      this.req = null;
      this.lastTime = 0;
   }

   /**
    * methode pour commencer le jeu
    * @returns 
    */
   start() {
      if (this.req !== null) return

      this.lastTime = 0;
      this.eggTimerID = setInterval(() => {
         if (Math.random() < 0.75) {
            this.addEgg();
         }
      }, 1000);

      this.rocketTimerID = setInterval(() => {
         if (Math.random() < 0.5) {
            this.addRocket();
         }
      }, 1500);

      this.req = requestAnimationFrame(this.animate);
   }

   /**
    * methode pour arreter le jeu.
    */
   stop() {
      clearInterval(this.eggTimerID);
      clearInterval(this.rocketTimerID);
      cancelAnimationFrame(this.req);
      this.req = null;
   }

   /**
    * methode pour donnez un entier entre min et max.
    * @param {*} min 
    * @param {*} max 
    * @returns 
    */
   alea(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
   }

   /**
    * methode pour ajouter un Egg dans la liste.
    */
   addEgg() {
      let x = this.alea(0, this.canvas.width - Egg.EGG_WIDTH);
      let deltaY = 4;
      this.eggs.push(new Egg(x, 0, deltaY));
   }

   /**
    * methode pour ajouter une rocket dans la liste    */
   addRocket() {
      let y = this.alea(0, this.canvas.height - Rocket.ROCKET_HEIGHT);
      let deltaX = 4;
      this.rockets.push(new Rocket(0, y, deltaX));
   }

   /**
    * methode pour gerer tout le jeu
    * elle detecte si y'a une colision avec un objet Mobile :
    * rocket -> joueur = supprimer une vie
    * rocket -> oeuf = supprimer l'oeuf dans la liste des oeufs
    * oeuf -> joueur = augmenter le score
    * et quitter ou rejouer le jeu en fonction du joueur
    * @param {*} time timestap actuel
    * @returns 
    */
   animate = (time) => {
      const deltaTime = (time - this.lastTime) / 1000;
      this.lastTime = time;

      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);


      this.joueur.handleMoveKeys(this.keyManager);
      this.joueur.move(this.canvas);


      this.eggs.forEach(egg => egg.move());


      this.rockets.forEach(rocket => rocket.move());


      this.eggs = this.eggs.filter(egg => {

         if (this.rockets.some(r => egg.collisionWithRocket(r))) {
            return false;
         }

         if (egg.collisionWithBasket(this.joueur)) {
            this.score += 100;
            return false;
         }

         if (egg.isOut(this.canvas)) {
            return false;
         }

         return true;
      });

      this.rockets = this.rockets.filter(rocket => {

         if (rocket.collisionWithBasket(this.joueur)) {
            this.vies--;
            this.score -= 500;
            return false;
         }

         if (rocket.isOut(this.canvas)) {
            return false;
         }

         return true;
      });

      for (let i = 1; i <= 3; i++) {
         const life = document.getElementById("life-" + i);

         if (i <= this.vies) {
            life.style.visibility = "visible";
         } else {
            life.style.visibility = "hidden";
         }
      }

      document.getElementById("score").textContent = this.score;

      this.eggs.forEach(egg => egg.draw(this.context));

      this.rockets.forEach(rocket => rocket.draw(this.context));

      this.joueur.draw(this.context);


      if (this.vies <= 0) {
         this.joueur = null;
         this.stop();
         alert("Game Over !");
         if (confirm("Rejouer ?")) {
            this.reset();
            this.start();
         }
         return;
      }

      this.req = requestAnimationFrame(this.animate);
   }

   /**
    * methode pour initialiser les variables une autre fois si le joueur 
    * veu jouer encore
    */
   reset() {
      this.joueur = new Basket(this.canvas.width / 2, this.canvas.height / 2);
      this.eggs = [];
      this.rockets = [];
      this.score = 0;
      this.vies = 3;
   }

   /**
    * methode pour gerer les touche quand elles seront presser.
    * @param {*} event 
    */
   keyDownActionHandler(event) {
      switch (event.key) {
         case "ArrowLeft":
            this.keyManager.leftPressed();
            break;
         case "ArrowRight":
            this.keyManager.rightPressed();
            break;
         case "ArrowUp":
            this.keyManager.upPressed();
            break;
         case "ArrowDown":
            this.keyManager.downPressed();
            break;
      }
      event.preventDefault();
   }

   /**
    * methode pour gerer les touche quand elles seront dans leurs etat normal (non presser);
    * @param {*} event 
    */
   keyUpActionHandler(event) {
      switch (event.key) {
         case "ArrowLeft":
            this.keyManager.leftReleased();
            break;
         case "ArrowRight":
            this.keyManager.rightReleased();
            break;
         case "ArrowUp":
            this.keyManager.upReleased();
            break;
         case "ArrowDown":
            this.keyManager.downReleased();
            break;
      }
      event.preventDefault();
   }
   /**
    * methode pour start and stop du jeu.
    */
   startAndStop() {
      if (this.req === null) {
         this.start();
      } else {
         this.stop();
      }
   }
}