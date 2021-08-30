window.onload = function(){

//produtos
(()=>{
    let mostrarProdutosCliente = document.querySelector("#content-produtos > ul#produtos");

    for(let idx in produtos){
        mostrarProdutosCliente.innerHTML += `<li class =itemProduto  data-preco=${produtos[idx].prodPreco}>${produtos[idx].prodDesc}</li>`
    }
})(produtos)



//compra
const itemProduto = document.querySelectorAll("#produtos > li.itemProduto");
const cestaDoCliente = document.querySelector("ul#cestaDoCliente");
const mostraTotalCompra = document.querySelector("#mostraTotalCompra");
const armazenaItens = [];
var totalPedido = 0;

itemProduto.forEach((item) => {
    item.addEventListener('click', ()=>{
        //alert("LISTA");
        li = document.createElement("li");
        if(armazenaItens.indexOf(item.textContent) == -1){
            armazenaItens.push(item.textContent);
            cestaDoCliente.appendChild(li).textContent = item.textContent;
            li.setAttribute('data-preco', (item.dataset.preco));
            li.setAttribute('class', 'itemProduto');
            totalPedido += Number(item.dataset.preco);
            mostraTotalCompra.value = totalPedido.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'});
        }else{
            alert(`Este item ${item.textContent} já está na sua cesta`);
        }
    })
})

const removerProdutoCesta = document.querySelectorAll("ul#cestaDoCliente");
removerProdutoCesta.forEach((item)=>{
    item.addEventListener('click', (produto)=>{
        var indexItemCesta = armazenaItens.indexOf(produto.target.textContent);
        if(indexItemCesta > -1){ 
            let confirmar = confirm("Deseja excluir o item da cesta?");
            if(confirmar == true){
                armazenaItens.splice(indexItemCesta, 1);
                totalPedido -= Number(produto.target.dataset.preco);
                cestaDoCliente.removeChild(produto.target);
                mostraTotalCompra.value = totalPedido.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'});
            }    
        }

    })
})

}//fim