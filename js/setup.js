import { Robos, Controles, spritesControles, Sistema } from './models&Utils.js';

function setupJogo() {
    let caminhoLivre = true;
    const querys = Sistema.getQuerys();
    
    const robo1 = new Robos(
        0, 
        [1, 1], 
        querys.elementoRobo,
    );
    
    const controleAndar = new Controles(
        querys.botaoAndar, 
        spritesControles.spritesBotaoAndar, 
        () => robo1.andar(caminhoLivre) 
    );

    const controleDireita = new Controles(
        querys.botaoGirarDireita, 
        spritesControles.spritesBotaoGirarDireita, 
        () => robo1.virarDireita()
    );

    const controleEsquerda = new Controles(
        querys.botaoGirarEsquerda, 
        spritesControles.spritesBotaoGirarEsquerda,
        () => robo1.virarEsquerda()
    );

    controleAndar.conectarEvento();
    controleDireita.conectarEvento();
    controleEsquerda.conectarEvento();

    if (querys.botaoEnviar) {
        querys.botaoEnviar.addEventListener("click", () => {
            Sistema.executarFila();
        });
    };

    return robo1;
};

export {setupJogo}