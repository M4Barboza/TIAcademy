window.onload = function(){

    const btnBuscarCep = document.querySelector("#btnBuscarCep");
    const cxCep = document.querySelector(".cxCep");

    const dadosCep = async(cepUrl) =>{

        var url = `https://viacep.com.br/ws/${cepUrl}/json/`
        var consultaCep = await fetch(url);
        var dadosCep = await consultaCep.json();
        
        

        //console.log(dadosCep);
        for (var campos in dadosCep){
            console.log(campos);
            
            document.querySelector("#" + campos).value = dadosCep[campos]
        }
        
    }

    btnBuscarCep.addEventListener('click', ()=>{
        let cep = cxCep.value;
        dadosCep(cep);
        
        
        //console.log(url);

        
    })








}