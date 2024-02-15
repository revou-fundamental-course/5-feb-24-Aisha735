let celsiusInput = document.querySelector('#celsius > input')
let fahrenheitInput = document.querySelector('#fahrenheit > input')
let rumusInput = document.getElementById('rumus')

function roundNumber(number){
    return Math.round(number*100)/100
}

/* Celcius to Fahrenheit beserta rumusnya */
celsiusInput.addEventListener('input', function(){
    let cTemp = parseFloat(celsiusInput.value)
    let fTemp = (cTemp * 9/5) + 32

    fahrenheitInput.value = roundNumber(fTemp)
    rumusInput.textContent = '(' + cTemp + ' °C × 9/5) + 32 = ' + roundNumber(fTemp) + ' °F';
})

/* Fahrenheit to Celcius beserta rumusnya */
fahrenheitInput.addEventListener('input', function(){
    let fTemp = parseFloat(fahrenheitInput.value)
    let cTemp = (fTemp - 32) * (5/9)
    
    celsiusInput.value = roundNumber(cTemp)
    rumusInput.textContent = '(' + fTemp + ' °F - 32) × 5/9 = ' + roundNumber(cTemp) + ' °C';
})