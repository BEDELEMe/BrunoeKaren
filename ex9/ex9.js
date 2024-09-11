function filtrodenumeros(vetor,valordecorte)
{
    let novovetor = Array();  
    for (let i=0; i<vetor.length; i++){
        if (vetor[i]>valordecorte){
            novovetor.push(vetor[i]);
        }
    }
    return novovetor;
}  
    var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var valordecorte = parseInt(prompt("Digite um número e descubra quais números são maiores do que ele!"));
    var resultado = filtrodenumeros(numeros, valordecorte);
alert("os números maiores que " +valordecorte+ " são " +resultado);
//#746f72