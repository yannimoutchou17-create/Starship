
import rocket_img from './assets/images/rocket.png';
import Mobile from './mobile';
import Egg from './egg';
import Basket from './basket';

export default class Rocket extends Mobile {

    static ROCKET_WIDTH = 107;
    static ROCKET_HEIGHT = 38;

    /**
     * constructeur pour Rocket
     * @param {*} x position x
     * @param {*} y position y
     * @param {*} deltaX vitesse horizontale ( standard = 3)
     */
    constructor(x, y, deltaX = 3) {
        super(x, y, deltaX, 0);
        this.image = this.createImage(rocket_img);
    }

    /**
     * methode pour faire bouger Rocket (mouvement toujours horizontale)
     */
    move() {
        this.x = this.x + this.deltaX;
    }

    /**
     * methode qui renvoie true s'il y'a une colision avec une basket
     * @param {*} basket 
     * @returns 
     */
    collisionWithBasket(basket) {
        let p1_x = Math.max(this.x, basket.x);
        let p1_y = Math.max(this.y, basket.y);
        let p2_x = Math.min(this.x + Rocket.ROCKET_WIDTH, basket.x + Basket.BASKET_WIDTH);
        let p2_y = Math.min(this.y + Rocket.ROCKET_HEIGHT, basket.y + Basket.BASKET_HEIGHT);
        if (p1_x < p2_x && p1_y < p2_y) {
            return true;
        }
        return false;
    }

    /**
     * methode qui renvoie true si l'objet Rocket et hors le canvas (qui depasse les limites)
     * @param {*} canvas 
     * @returns 
     */
    isOut(canvas) {
        return this.x > canvas.width;
    }

}