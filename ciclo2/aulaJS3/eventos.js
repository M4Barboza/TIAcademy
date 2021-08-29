/*click Ao clicar em algum elemento HTML

mouseover Ao mover o cursor do mouse dentro do elemento

dblclick Ao efetuar dupli click (rápido) sobre o elemento
blur Ao perder o foco fo elemento, geralmente associado ao HTMl */

window.onload = function(){
    //alert("alerta");
    const btn1 = document.querySelector(".btn-click");
    const legP = document.querySelector(".legenda");
    const cxTexto = document.querySelector("#texto");

    btn1.addEventListener('click', ()=>{
        //escrever no elemento
        legP.innerHTML += cxTexto.value;
    })

    legP.addEventListener('click', ()=>{
        legP.innerHTML = '';
    })

    /* mousemove Ao mover o cursor do mouse acessa (entra) o elemento */
    legP.addEventListener('mousemove', ()=>{
       // alert("teste");
    })

    /* mouse out Ao mover o cursor para fora do elemento */
    /* legP.addEventListener('mouseout', ()=>{
         alert("teste");
     }) */

    /*TROCAR TIPO DE ELEMENTO*/      
    const trocaSenha = document.querySelector("#verSenha");
    const cxSenha = document.querySelector("#senha");
    trocaSenha.addEventListener('click', ()=>{
        //getAttribute()
        //setAttribute()
        if(cxSenha.getAttribute('type') == 'password'){
            cxSenha.setAttribute('type', 'text');
        }else{
            cxSenha.setAttribute('type', 'password');
        }
    })

    //alterar background

    const cxTrocaBg = document.querySelector("#cxTbg");
    cxTrocaBg.addEventListener('blur', ()=>{
        cxTrocaBg.setAttribute('class', 'cor-bg');

    })

    //somar valores cx input text
    const valor1 = document.querySelector("#v1");
    const valor2 = document.querySelector("#v2");
    const btnSomar = document.querySelector("#soma");
    const spResultado = document.querySelector("#resultado");

    btnSomar.addEventListener('click', ()=>{
        var cx1 = valor1.value;
        var cx2 = valor2.value;
        var r = Number (cx1) + Number(cx2);
        spResultado.innerHTML = r;
    })
    //alert("Olá");
    //evento modal
    const btnModal = document.querySelector("#chamarModal");
    const janelaM = document.querySelector("#janModal");
    const closeMod = document.querySelector("#fechaModal");
    btnModal.addEventListener('click', ()=>{
        janelaM.setAttribute('class', 'modal');
    })

    closeMod.addEventListener('click', ()=>{
        janelaM.classList.remove('modal');
    });
}

