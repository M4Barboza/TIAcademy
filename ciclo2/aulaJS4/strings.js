/* var nome = "Matheus";
console.log(nome.length);
console.log(nome[0]); */
/*match()
o método match procura uma palavra em uma string.
Existem alguns parametros de pesquisa que permite uma maior precisão conforme a  n flags g / i / /m
*/


//var palavras = "Maçã doce";
//console.log(palavras.match(/D/gi));
/* search()
o metodo search() procura pela ocorrencia e retornando a posição na cadeia string, a posição é em relação ao primeiro caractere da ocorrencia 
*/


//console.log(palavras.search(/d/gi));

/*replace()
Este metodo substitui uma string por outra, simples assim, ele pesquisa a string informada, como no metdo"match" e a substitui por outra string nas aspas informada com segundo paramentro
*/

/* var str = "Lorem ipsum, dolor sit amet consectetur adipisicing elit." + "Rerum, autem fuga nobis saepe iusto fugit sint officiis consequuntur.";
var mudaStr = str.replace(/e/gi, 'X');
console.log(mudaStr); */

/*localeCompare()
o metodo localeCompare compara efetua a comparação entre duas strings, se estas forem iguais o retorno será "0" zero. O valores -1 e 1 podem ser esperados caso elas não sejam iguais.
 */

/* var comp1 = "Comparar";
var comp2 = "comparar";

var c1 = comp1.toLowerCase();
var c2 = comp2.toLowerCase() */

//console.log(`Este é o c1:${c1} Este é o c2: ${c2}`);

/* var comparacao = c1.localeCompare(c2);
console.log(comparacao); */


/*trim()
Faz a remoção de espaços antes e depois da string especificada
 */
var p = '   fpalavra+  ';

var r = p.trim();
console.log(r);
var s = r.replace(/f/gi,'');
console.log(s);
var sub_a = s.replace('+','');
console.log(`Removido ${sub_a}`);

//toLocaleString
//formatação de moedas
var valor = 1.357; //1,35
var formatarMoeda = valor.toLocaleString('pt-BR', {
    style: 'currency',
    currency:'BRL'
})
console.log(formatarMoeda);