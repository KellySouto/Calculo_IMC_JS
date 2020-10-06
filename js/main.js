//essa funcção para o envio do formulário

const form = document.querySelector('#formulario');

form.addEventListener('submit',function(e){
    e.preventDefault();
    const inputPeso=e.target.querySelector('#peso');
    const inputAltura=e.target.querySelector('#altura');

    const peso =Number(inputPeso.value);
    const altura =Number(inputAltura.value);

    if(!peso){
        setResultado('Peso invalido',false)
        return;
    }

    if(!altura){
        setResultado('Altura invalida',false)
        return;
    }
     const imc = getImc(peso, altura);
     const nivelImc = getNivelImc(imc);

    const msg = `Seu IMC é ${imc} (${nivelImc}).`;

    setResultado(msg,true);


    console.log(imc,nivelImc);
});

function getNivelImc (imc) {
    const nivel = ['ABAIXO DO PESO','PESO NORMAL','SOBREPESO ','OBESIDADE I','OBESIDADE II','OBESIDADE II'];

    if (imc >= 39.9)return nivel[5];
    if (imc >=34.9)return nivel[4];   
    if (imc >=29.9) return nivel[3];  
    if (imc >=24.9)return nivel[2];  
    if (imc >=18.5)return nivel[1];  
    if (imc < 18.5)return nivel[0];
   
}


function getImc(peso,altura){
     const imc = peso / altura ** 2;
     return imc.toFixed(2);

}

// função que cria paragrafo
function criaP (){   
    const p = document.createElement('p');// adicionado class no paragrafo
    return p;
}


function setResultado(msg, isvalid){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = criaP();

    if (isvalid){
        p.classList.add('paragrafo-resultado');
    }else{
        p.classList.add('bad');
    }

    p.innerHTML=msg;
    resultado.appendChild(p);
}