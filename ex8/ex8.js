function novovetor(_quantidadedeitens){
    let vetor = Array();
    for(let pq=0; pq < _quantidadedeitens; pq++){
        vetor[pq] = parseFloat(prompt("Digite os valores para a média"));
    }
    return vetor;
}

function encontrarmedia(vetor){
    let soma=0;
    for(let i=0; i<vetor.length; i++){
        soma += vetor[i];
    }  
    let media = soma / vetor.length;
    return media;
}

var q = parseInt(prompt("Digite a quantidade de valores  desejados"));
const x = novovetor(q);
alert(encontrarmedia(x));


