var palavras = ["arroz","feijão","batata","macarrão","arroz","feijão","batata","macarrão","arroz","feijão","batata","macarrão","arroz","feijão","batata","macarrão",
    "arroz","feijão","batata","macarrão","arroz","feijão","batata","macarrão","arroz","feijão","batata","macarrão","arroz","feijão","batata","macarrão",
    "arroz","feijão","batata","macarrão","arroz","feijão","batata","macarrão","arroz","feijão","batata","macarrão","arroz","feijão","batata","macarrão",
    "arroz","feijão","batata","macarrão","arroz","feijão","batata","macarrão","arroz","feijão","batata","macarrão","arroz","feijão","batata","macarrão",
    "arroz","feijão","batata","macarrão","arroz","feijão","batata","macarrão","arroz","feijão","batata","macarrão","arroz","feijão","batata","macarrão",
    "arroz","feijão","batata","macarrão","arroz","feijão","batata","macarrão","arroz","feijão","batata","macarrão","arroz","feijão","batata","macarrão",
    "arroz","feijão","batata","macarrão","arroz","feijão","batata","macarrão","arroz","feijão","batata","macarrão","arroz","feijão","batata","macarrão",
    "arroz","feijão","batata","macarrão","arroz","feijão","batata","macarrão","arroz","feijão","batata","macarrão","arroz","feijão","batata","macarrão",
]

var palavraEscolhida = prompt("Escolha uma palavra entre Arroz, Feijão ,Batata e Macarrão").toLowerCase();

var contagem = 0;

for(var i=0;i<palavras.length;i++){
    if(palavras[i]===palavraEscolhida){
        contagem++
    }
}
alert("A palavra Escolhida aparece "+contagem+" vezes");