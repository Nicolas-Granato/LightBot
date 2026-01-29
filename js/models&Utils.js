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

    acender(spritesAcenderRobo){
        for (let i = 0; i < 3; i++){
            setInterval(() => {
                this.roboImg.src = spritesAcenderRobo[i];
            },150);
        }
        this.roboImg.src = "images\\roboSprite0.png";
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

    animacaoBotao(timer){
        for (let i = 0; i < length(this.sprites); i++){
            setInterval(() => {
                this.query.src = this.sprites[i];
            },timer)
        }
    }

    conectarEvento(){
        this.query.addEventListener("click",funcao);
    }

    setupJogo() {
        const elementoRobo = querys.elementoRobo;
        const botaoAndar = querys.botaoAndar;
        const botaoDireita = querys.botaoGirarDireita;
        const botaoEsquerda = querys.botaoGirarEsquerda;
        const botaoPlay = querys.botaoEnviar;

        let caminhoLivre = true; 

        const robo1 = new Robos(0, [1, 1], elementoRobo);
        
        const controleAndar = new Controles(
            botaoAndar, 
            spritesControles.botaoAndar, 
            () => robo1.andar(caminhoLivre) 
        );

        const controleDireita = new Controles(
            botaoDireita, 
            spritesControles.botaoDireita, 
            () => robo1.virarDireita()
        );

        const controleEsquerda = new Controles(
            botaoEsquerda, 
            spritesControles.botaoEsquerda,
            () => robo1.virarEsquerda()
        );

        controleAndar.conectarEvento();
        controleDireita.conectarEvento();
        controleEsquerda.conectarEvento();

        if (botaoPlay) {
            botaoPlay.addEventListener("click", () => {
                Sistema.executarFila();
            });
        }

        return robo1;
    }
}

const Sistema = {
    fila: [],

    adicionarEventoFila(linkBotaoAcao){
        this.fila.push(linkBotaoAcao);
    },
}

const spritesControles = {
    spritesBotaoAndar : ["images\\setaFrente0.png","images\\setaFrente1.png"],
    spritesBotaoGirarDireita : ["images\\90ºDireita0.png","images\\90ºDireita1.png"],
    spritesBotaoGirarEsquerda : ["images\\90ºEsquerda0.png","images\\90ºEsquerda1.png"],

}

const querys = {
    botaoAndar : document.querySelector("andar"),
    botaoGirarDireita : document.querySelector("direita"),
    botaoGirarEsquerda : document.querySelector("esquerda"),
    botaoAcender : document.querySelector("acender"),
    botaoEnviar : document.querySelector(".enviar"),

    elementoRobo : documento.querySelector("personagem"),
}
