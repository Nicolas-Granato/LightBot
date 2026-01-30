import { Robos, Controles, spritesControles, querys, Sistema } from './models&Utils.js';

const robo1 = new Robos(
    0, 
    [1, 1], 
    querys.elementoRobo,
);

const andar = new Controles(
    querys.botaoAndar, 
    spritesControles.spritesBotaoAndar, 
    () => robo1.andar(caminhoLivre),
);

const direita = new Controles(
    querys.botaoGirarDireita, 
    spritesControles.spritesBotaoGirarDireita, 
    () => robo1.virarDireita(),
);

const esquerda = new Controles(
    querys.botaoGirarEsquerda, 
    spritesControles.spritesBotaoGirarEsquerda,
    () => robo1.virarEsquerda(),
);

/*
const acender = new Controles(
    querys.botaoAcender,
    spritesControles.spritesBotaoAcender,
    () = > robo1.acender(),
)
*/

function setupJogo() {
    const botaoAndar = querys.botaoAndar;
    const botaoDireita = querys.botaoGirarDireita;
    const botaoEsquerda = querys.botaoGirarEsquerda;
    const botaoPlay = querys.botaoEnviar;

    let caminhoLivre = true; 
    
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
    };

    return robo1;
};
