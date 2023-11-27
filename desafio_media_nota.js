// Neste projeto de começo de aprendizado da lingugem JavaScript foi feito um projeto para medição de notas, e conforme descrito, dependendo da nota a mesma teria que ser mostrada e executado uma determinada frase.

const nota1 = 5 
const nota2 = 3
const nota3 = 5

const mediaGeral = (nota1 + nota2 + nota3) / 3;

console.log(mediaGeral)

if (mediaGeral < 5) {
    console.log("Você está reprovado!.")
} else if(mediaGeral >= 5 && mediaGeral <=7) {
    console.log(" Você está de recuperação!")
} else{
    console.log("Você passou de semestre!")
}

// os valores podem ser modificados.
