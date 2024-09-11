var numero = parseFloat(prompt("Digite um número!"));

if(numero>0){
   alert("O número "+numero+" é um número positivo");
}else if(numero<0){
    alert("O número "+numero+" é um número negativo");
}else if(numero===0){
    alert("Esse é o número 0");
}else{
    alert("Você não digitou nenhum número ");
}
