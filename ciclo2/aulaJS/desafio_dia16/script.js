var  nome = prompt("Digite seu nome:");
var num = parseInt(prompt(nome + " digite um número:"));
var x = 20; 


document.write("1.Seja bem vindo " + nome + "<br>");
document.write("3.Você digitou o número "+ "("+ num + ")" + "<br>");

var booleana = (x == num);

document.write("4. O retorno da comparação booleana é: " + booleana + "<br>");

var soma = (x + num);
var subtracao = (x - num);
var resto = (x % num);
var quadrado = Math.pow(num, 2);

document.write("5. A soma dos valores é: " + soma + "<br>");
document.write("6. A subtração dos valores é: " + subtracao + "<br>");
document.write("7. O resto da divisão é: " + resto + "<br>");
document.write("8. O quadrado do número digitado é: " + quadrado);