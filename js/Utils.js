spritesAcenderRobo = ["images\\roboSprite0.png","images\\roboSpriteAcendendo0.png","images\roboSpriteAcendendo1.png"];
botaoGirarDireita = ["images\\90ºDireita0.png","images\\90ºDireita1.png"]
botaoGirarEsquerda = ["images\\90ºEsquerda0.png","images\\90ºEsquerda1.png"]

class Robo {
    constructor(angle, posicao, roboImg){
        this.angle = angle;
        this.posicao = posicao;
        this.roboImg = roboImg;
    }

    virarDireita(){
        this.angle = (this.angle + 90) % 360;
        this.roboImg.style.transform = `rotate(${this.angle}deg)`;
    }

    virarEsquerda(){
        this.angle = (this.angle - 90 + 360) % 360;
        this.roboImg.style.transform = `rotate(${this.angle}deg)`;
    }

    acender(){
        for (let i = 0; i < 3; i++){
            setInterval(() => {
                this.roboImg.src = this.spritesAcenderRobo[i];
            },150);
        }
        this.roboImg.src = "images\\roboSprite0.png";
    }

    andar(caminhoLivre){
        if (caminhoLivre){

    }
}

class System {
    botoesControle = documento.querySelector(".controles")
    listaVisual = documento.querySelector("listaDeComandos");
    botaoEnviar = document.querySelector(".enviar");
    fila = [];
    quadrado = 2.5;
}
