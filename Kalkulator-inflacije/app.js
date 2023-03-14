function inflationCalculator () {
    let inflationRate = document.getElementById("inflationRate")
    let money = document.getElementById("money")
    
    // parseFloat sluzi za pretvaranje stringa u broj sa zarezom
    inflationRate = parseFloat(inflationRate.value)
    money = parseFloat(money.value)

    let years = document.getElementById("years").value
    years = parseFloat(years)

    // formula za izracunavanje inflacije   
    let worth = money + (money * (inflationRate / 100))

    for( let i = 0; i < years; i++){
        worth += worth * (inflationRate / 100)
    }
    worth = worth.toFixed(2)

    let newElement  = document.createElement("div")
    newElement.className = "new - value"
    newElement.innerText = `Danasnjih ${money}€ vrijedi isto kao ${worth}€ za ${years} godina.`

    document.querySelector(".container").appendChild(newElement);
}