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

    acender(sprites) {
        sprites.forEach((sprite, i) => {
            setTimeout(() => {
                this.roboImg.src = sprite;
            }, i * 150);
        });
    }

    andar(caminhoLivre){
        if (!caminhoLivre) return;

        if (this.angle == 0 && this.posicao[0] <= 8) this.posicao[0]++;
        if (this.angle == 90 && this.posicao[1] >= 1) this.posicao[1]++; 
        if (this.angle == 180 && this.posicao[0] >= 1) this.posicao[0]--; 
        if (this.angle == 270 && this.posicao[1] <= 8) this.posicao[1]--;  
        
        this.roboImg.parentElement.style.gridColumn = this.posicao[0];
        this.roboImg.parentElement.style.gridRow = this.posicao[1];
    }
}

class Controles {
    constructor(query, sprites, funcao){
        this.query = query;
        this.sprites = sprites;
        this.funcao = funcao;
    }

    animacaoBotao(){
        let i = 0;
        const intervalo = setInterval(() => {
            this.query.src = this.sprites[i];
            i++;

            if (i >= this.sprites.length) {
                clearInterval(intervalo);
            }
        }, 200);
    }

    conectarEvento(){
        this.query.addEventListener("click", () => {
            Sistema.adicionarEventoFila(this.funcao);
        });
    }
}

const Sistema = {
    fila: [],

    adicionarEventoFila(linkBotaoAcao){
        this.fila.push(linkBotaoAcao);
    },

    executarFila() {
        let delay = 0;

        this.fila.forEach(funcao => {
            setTimeout(() => {
                funcao();
            }, delay);

            delay += 400;
        });

        this.fila = [];
    },

    getQuerys() {
        return{
            botaoAndar : document.querySelector(".andar img"),
            botaoGirarDireita : document.querySelector(".direita img"),
            botaoGirarEsquerda : document.querySelector(".esquerda img"),
            botaoAcender : document.querySelector(".acender img"),
            botaoEnviar : document.querySelector(".enviar"),

            elementoRobo : document.querySelector(".personagem img"),
        }
    },
}

const spritesControles = {
    spritesBotaoAndar : ["images/setaFrente0.png","images/setaFrente1.png"],
    spritesBotaoGirarDireita : ["images/90ºDireita0.png","images/90ºDireita1.png"],
    spritesBotaoGirarEsquerda : ["images/90ºEsquerda0.png","images/90ºEsquerda1.png"],

}

export { Robos, Controles, spritesControles, Sistema};
