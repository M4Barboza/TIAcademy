var  nome = prompt("Digite seu nome:");
var num = prompt(nome + " digite um número:");
if(typeof num !== Number ){
    alert("Foi enviada uma string");
    alert("A String será convertida para um número inteiro");
    num = parseInt(num);
} else{
    alert("Foi enviado um número inetiro, muito obrigado!");
}


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
document.write("8. O quadrado do número digitado é: " + quadrado + "<br>");

var fruta = prompt("Por gentileza " + nome + ", escolha uma fruta entre [Laranja, Uva, Pera e Manga]");

if((fruta == 'Laranja') || (fruta == 'laranja')){
    document.write("Você escolheu laranja");
}else {
    if((fruta == 'Uva') || fruta ==( 'uva')){
        document.write("Você escolheu Uva"  );
    }else{
        if((fruta == 'Pera') || (fruta =='pera')){
            document.write("Você escolheu Pera");
        }else{
            if((fruta == 'Manga') || (fruta == 'manga')){
                document.write("Você escolheu Manga");
            }else{
                document.write(nome + " sua fruta não está na lista");
            }
        }
    }
}
