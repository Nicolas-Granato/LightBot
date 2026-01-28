const robo = {
    image: document.querySelector(personagem > img),
    aceso: false,
    direcao: {
        direta: 0 || 360,
        cima: 90,
        esquerda: 180,
        baixo: 270
    },
    estados: ["apagado/parado","acelerando","vmaxima","desacelerando","acendendo"],

    girarDireita() {
        this.angle += 45;
        this.image.style.transform = `rotate(${this.angle}deg)`
        setTimeout(() => {},300);
        this.angle += 45;
        this.angle.style.transform = `rotate(${this.angle}deg)`
    },

    girarEsquerda() {
        this.angle -= 45;
        this.image.style.transform = `rotate(${this.angle}deg)`;
        setTimeout(() => {},300);
        this.angle -= 45;
        this.angle.style.transform = `rotate(${this.angle}deg)`;
    },

    acender() {
        parado = "images\\roboSprite0.png";
        acender0 = "images\\roboSpriteAcendendo0.png";
        acender1 = "images\\roboSpriteAcendendo1.png";
        this.image.style.transform = `rotate(${this.angle}deg)`;

        this.image.src = parado 
    }
}
