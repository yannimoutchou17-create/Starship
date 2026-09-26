
import basketImgSrc from './assets/images/basket.png';
import Mobile from './mobile';

export default class Basket extends Mobile {

    static BASKET_WIDTH = 128;
    static BASKET_HEIGHT = 94;

    /**
     * constructeur qui prend en parametre position x et y du Basket.
     * @param {*} x position x
     * @param {*} y position y
     */
    constructor(x, y) {
        super(x, y, 0, 0);
        this.image = this.createImage(basketImgSrc);
    }

    /**
     * vitesse a gauche 
     */
    moveLeft() {
        this.deltaX = -10;
    }

    /**
     * vitesse a droite
     */
    moveRight() {
        this.deltaX = 10;
    }

    /**
     * vitesse = 0
     */

    stopMoving() {
        this.deltaX = 0;
        this.deltaY = 0;
    }

    /**
     * bouger vers le haut
     */
    moveUp() {
        this.deltaY = -10;
    }

    /**
     * bouger vers le bat
     */
    moveDown() {
        this.deltaY = 10;
    }

    /**
     * methode pour faire bouger le Basket.
     * @param {*} canvas 
     */
    move(canvas) {
        this.x = Math.max(0, Math.min(canvas.width - Basket.BASKET_WIDTH, this.x + this.deltaX));
        this.y = Math.max(0, Math.min(canvas.height - Basket.BASKET_HEIGHT, this.y + this.deltaY))
    }

    /**
     * methode pour gerer tout les mouvement.
     * @param {*} keyManager 
     */
    handleMoveKeys(keyManager) {
        this.stopMoving();

        if (keyManager.left)
            this.moveLeft();

        if (keyManager.right)
            this.moveRight();

        if (keyManager.up)
            this.moveUp();

        if (keyManager.down)
            this.moveDown();
    }

}