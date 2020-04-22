let bandNumber = 1

const takeNumber = function (bandName) {
    let bandPlacement = (bandNumber + ". " + bandName)
    bandNumber ++ 
    return bandPlacement
}

const vibed = takeNumber("Vibed")
console.log(vibed)

const polyphia = takeNumber("Polyphia")
console.log(polyphia)