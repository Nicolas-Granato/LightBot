import {Sistema} from "./models&Utils.js"
import {robo1, andar, direita, esquerda} from "./objects.js"

let ganhou = false;
let caminhoLivre = true;

andar.conectarEvento();
direita.conectarEvento();
esquerda.conectarEvento();
