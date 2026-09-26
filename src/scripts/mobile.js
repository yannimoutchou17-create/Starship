


export default class Mobile {
    /**
     * les attribit de cette classe abstraite Mobile
     * x pour la position x
     * y pour la position y
     * deltaX vitesse horizontale
     * deltaY vitesse verticale
     * image pour l'image de l'objet.
     */
    x;
    y;
    deltaX;
    deltaY;
    image;
    /**
     * 
     * @param {*} x position x
     * @param {*} y position y
     * @param {*} deltaX vitesse horizontal (standard  = 0)
     * @param {*} deltaY vitesse verticale (standard = 0)
     */
    constructor(x, y, deltaX = 0, deltaY = 0) {
        this.x = x;
        this.y = y;
        this.deltaX = deltaX;
        this.deltaY = deltaY;
    }

    /**
     * methode pour cree l'objet image du Mobile
     * @param {*} imageSource chemin de l'image
     * @returns l'objet image cree
     */
    createImage(imageSource) {
        this.image = new Image();
        this.image.src = imageSource;
        return this.image;
    }

    /**
     * methode pour dessiner l'image dans le canvas
     * @param {*} context 
     */
    draw(context) {
        context.drawImage(this.image, this.x, this.y, this.image.width, this.image.height);
    }


}