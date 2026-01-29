const robo1 = new Robos(
    0, 
    [1, 1],
    elementoRobo,
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
