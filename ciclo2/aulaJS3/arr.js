/*concat() junta os elementos de dois ou mais arrays e retorna uma
copia com os elementos juntos*/
var frutas =["Uva", "Banana", "Amora", "Melão"];
console.log(`Quantidade do array ${frutas.length} fruta: ${frutas[0]}`);

var frutas2 = ["Maça", "Pera", "Laranja"];

var todasAsFrutas = frutas.concat(frutas2);
console.log(frutas);
console.log(todasAsFrutas);


/*indexOf() Procura por um elemento especifico no array e retorna a sua posição*/
var retornoIndexOf = todasAsFrutas.indexOf("Amora");
console.log(retornoIndexOf);

/*join() Junta todos os elementos de um array em uma string */
var stringDeArray = todasAsFrutas.join();
console.log(stringDeArray);

/*push() Insere um novo elemento no final do array*/
var outraLista = ["Bola", "Peteca"];
var novaLista = outraLista.push("Boneca", "Qualquer brinquedo");
console.log(novaLista);
console.log(outraLista);
console.log(outraLista[3]);

/*pop() Remove o último elemento do array */

console.log(outraLista.pop());
console.log(outraLista);
/* Reverse() Inverte a ordem dos elementos do array*/
console.log(outraLista.reverse());

/*shift()Remove o primeiro elemento do array*/
var removerPrimeiro = ["fusca", "variante"];
removerPrimeiro.shift()
console.log(removerPrimeiro);

/*sort() Ordena os elementos do array em ordem crescente*/
var alfa = ["b", "z", "t", "a"];
var alfa1 = [4, 6, 9, 2];

alfa.sort();
alfa1.sort();

console.log(alfa);
console.log(alfa1);

/*toString() Converte um array em string e retorna essa string*/
//vide join

/* unshift() Insere um novo elemento no inicio do array */
alfa1.unshift(9);
alfa1.sort();
console.log(alfa1);
/*splice() Corta o array em um ponto indicado dois paramentros indice e quantos elementos quer remover a partir da posição */
var f =["Uva", "Banana", "Amora", "Melão"];
var idx = f.indexOf("Banana");
console.log(idx);
console.log(f.splice(idx, 1));
console.log(f);
/* console.log(f.splice(1, 2) */


//array de objetos
var dados = [
            {nome:"Matheus"},
            {nome:"Raphael"}

            ]
            
//console.log(dados[0].nome );
//console.log(dados[1].nome);


function Pessoa2(nome, sobrenome, idade, doc=[]){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
    this.doc = {
        rg : doc[0],
        cpf : doc[1]
    }
}

var pessoa2 = new Pessoa2("Raphael", "", "", ['22', '555']);

/* console.log("Nome: "+ pessoa2.nome+ ' ' + pessoa2.doc.rg); */
console.log(`Nome ${pessoa2.nome} - CPF ${pessoa2.doc.cpf}`);