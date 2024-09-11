var x = Array(  )
let i = 0;
let soma = 0;

do{
    x[i] = parseInt(prompt("Digite um número qualquer, para parar digite 0"));
    i++;
}while(x[i-1] !== 0);

for(let y = 0;y < x.length;y++){
    soma+=x[y]
}

 alert(soma)