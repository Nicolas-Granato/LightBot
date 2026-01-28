spritesAcenderRobo = ["images\\roboSprite0.png","images\\roboSpriteAcendendo0.png","images\roboSpriteAcendendo1.png"];
spritesBotaoGirarDireita = ["images\\90ºDireita0.png","images\\90ºDireita1.png"]
spritesBotaoGirarEsquerda = ["images\\90ºEsquerda0.png","images\\90ºEsquerda1.png"]
spritesBotaoAndar = ["images\\setaFrente0.png","images\\setaFrente1.png"]

class Robos {
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
        coordenadaX = this.posicao[0];
        coordenadaY = this.posicao[1];

        if (caminhoLivre){
            if (angle == 0 && coordenadaX <= 8) coordenadaX++;
            if (angle == 90 && coordenadaY >= 1) coordenadaY++; 
            if (angle == 180 && coordenadaX >= 1) coordenadaX--; 
            if (angle == 270 && coordenadaY <= 8) coordenadaY--;  
        }
    }
}

class Controles {
    botaoAndar = document.querySelector("andar");
    botaoGirarDireita = document.querySelector("direita");
    botaoGirarEsquerda = document.querySelector("esquerda");
    botaoAcender = document.querySelector("acender");

    constructor(nomeBotao, query, sprites){
        this.nomeBotao = nomeBotao;
        this.query = query;
        this.sprites = sprites;
    }

    animacaoBotao(){
        for (let i = 0; i < length(this.sprites); i++){
            setInterval(() => {
                this.query.src = this.sprites[i];
            },150)
        }
    }
}
