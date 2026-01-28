class Animacoes {
    acenderRobo = ["images\\roboSprite0.png","images\\roboSpriteAcendendo0.png","images\roboSpriteAcendendo1.png"];

}

class Robo {
    roboImg = documento.querySelector("personagem img");
    angle = 0;
    posicao = {x: 0, y: 0}
}

class Sistem {
    botoesControle = documento.querySelector(".controles")
    listaVisual = documento.querySelector("listaDeComandos");
    botaoEnviar = document.querySelector(".enviar");

    fila = [];
    quadrado = 2.5;
}
