ganhou = false;
robo1 = new Robos(0,[1,1],"images\\roboSprite0.png");
andar = new Controles(querys.botaoAndar,spritesControles.spritesBotaoAndar,robo1.Andar(caminhoLivre));
direita new Controles(querys.botaoGirarDireita,spritesControles.spritesBotaoGirarDireita,robo1.virarDireita());
esquerda = new Controles(querys.botaoGirarEsquerda,spritesControles.spritesBotaoGirarDireita,robo1.virarEsquerda());
/*acender = new Controles(querys.botaoAcender, pegar animacao,robo1.acender())*/

while(!ganhou){

}