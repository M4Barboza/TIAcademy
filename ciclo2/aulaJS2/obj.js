/* var nome = "matheus"; //var global
let sobreNome = "barboza";
if(true){
    console.log("Var nome = "+ nome);
    var nm = nome;
    console.log("Chamando o sobreNome " + sobreNome);
    let sn = "barboza";
    console.log(sobreNome);
}
console.log("meu nome é "+nm+" "+sobreNome+" "+ sn);
console.log("Var nome = "+ nm); */
var Pessoa = {
    nome : "Matheus",
    rua : "Rua lá",
    ncasa : "777",
    dados : function(){
        document.write(
            "Nome...:" + this.nome + "<br>"+
            "Rua...:" + this.rua + "<br>"+
            "N. casa...:" + this.ncasa + "<br>"
        )
    }
}

Pessoa.dados();

/* console.log("Nome "+Pessoa.nome+
" Endereço "+Pessoa.rua +" N. "+Pessoa.ncasa); */
