const numero_surpresa = 3;
let y;

do{
  let y= parseFloat(prompt("Digite um número de 0 a 10 até acertar o número secreto!"));
  if(y==numero_surpresa){
    alert("Parabéns, Você acertou o número")
    break;
  }else if(y!==numero_surpresa){
    alert("Número errado,tente novamente")
  }
  y++
}while(y!==numero_surpresa)
