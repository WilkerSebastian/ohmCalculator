const texto = document.querySelector("#texto")

let url = window.location.href

url = url.substring(url.length - 2 , url.length)

switch (url) {
    case 'US':

        texto.innerHTML = "Ohm's 1st law states that the potential difference between two points of a resistor is proportional to the electric current that is established in it. Also, according to this law, the ratio of electric potential to electric current is always constant for ohmic resistors. U = I * R"
        
        break;

    default:

        texto.innerHTML = "A 1ª lei de Ohm determina que a diferença de potencial entre dois pontos de um resistor é proporcional à corrente elétrica que é estabelecida nele. Além disso, de acordo com essa lei, a razão entre o potencial elétrico e a corrente elétrica é sempre constante para resistores ôhmicos. U = I * R"

        break;
}


function calculo() {

    let resultados = [document.querySelector('#res1') , document.querySelector('#res2') , document.querySelector('#res3')]

    setTimeout(() => {

        resultados[0].value = volts()
        resultados[1].value = ampere()
        resultados[2].value = resistencia()

        calculo()

    } , 1)

}

function volts() {

    const R = parseFloat(document.querySelector("#r1").value)
    const A = parseFloat(document.querySelector("#a1").value)

    const resultado = R * A

    
    if (isNaN(resultado)) {

        return ''
        
    } else {

        return ` ${resultado}V`

    }
}

function ampere() {

    const R = parseFloat(document.querySelector("#r2").value)
    const V = parseFloat(document.querySelector("#v1").value)

    const resultado = V / R
    
    if (isNaN(resultado)) {

        return ''
        
    } else {

        return ` ${resultado}A`

    }

}

function resistencia() {

    const A = parseFloat(document.querySelector("#a2").value)
    const V = parseFloat(document.querySelector("#v2").value)

    const resultado = V / A
    
    if (isNaN(resultado)) {

        return ''
        
    } else {

        return ` ${resultado}Ω`

    }

}

calculo()