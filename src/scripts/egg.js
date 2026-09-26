
import Mobile from "./mobile";
import blueEgg from './assets/images/blue-egg.png';
import greenEgg from './assets/images/green-egg.png';
import yellowEgg from './assets/images/yellow-egg.png';
import Basket from './basket';
import Rocket from './rocket';

export default class Egg extends Mobile {

    static EGG_WIDTH = 64;
    static EGG_HEIGHT = 82;
    /**
     * methode static pour retourner aleatoirement un oeuf (bleu vert, jaune)
     * @returns un oeuf
     */
    static random() {
        const eggs = [
            blueEgg,
            greenEgg,
            yellowEgg
        ];

        const index = Math.floor(Math.random() * eggs.length);
        return eggs[index];
    }

    /**
     * constructeur pour Egg
     * @param {*} x position x
     * @param {*} y poistion y
     * @param {*} deltaY vitesse au niveau de y ( deltaY = 3 )
     */
    constructor(x, y, deltaY = 3) {
        super(x, y, 0, deltaY);
        this.image = this.createImage(Egg.random());
    }

    /**
     * methode pour faire bouger l'oeuf
     */
    move() {
        this.y = this.y + this.deltaY;
    }

    /**
     * methode pour savoir si l'oeuf a depasser les bornes du canvas.
     */
    isOut(canvas) {
        return this.y > canvas.height;
    }
    /**
     * methode qui renvoie true si y'a une colision avec l'objet Basket.
     * @param {*} basket objet Basket
     * @returns boolean true ou false 
     */
    collisionWithBasket(basket) {
        let p1_x = Math.max(this.x, basket.x);
        let p1_y = Math.max(this.y, basket.y);
        let p2_x = Math.min(this.x + Egg.EGG_WIDTH, basket.x + Basket.BASKET_WIDTH);
        let p2_y = Math.min(this.y + Egg.EGG_HEIGHT, basket.y + Basket.BASKET_HEIGHT);
        if (p1_x < p2_x && p1_y < p2_y) {
            return true;
        }
        return false;
    }

    /**
     * methode qui renvoie true si et seulement si y'a une colision avec une rocket.
     * @param {*} rocket objet rocket
     * @returns 
     */
    collisionWithRocket(rocket) {
        let p1_x = Math.max(this.x, rocket.x);
        let p1_y = Math.max(this.y, rocket.y);
        let p2_x = Math.min(this.x + Egg.EGG_WIDTH, rocket.x + Rocket.ROCKET_WIDTH);
        let p2_y = Math.min(this.y + Egg.EGG_HEIGHT, rocket.y + Rocket.ROCKET_HEIGHT);
        if (p1_x < p2_x && p1_y < p2_y) {
            return true;
        }
        return false;
    }
}