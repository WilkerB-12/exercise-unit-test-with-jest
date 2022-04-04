const sum = (a,b)=>{
    return a+b
}
console.log(sum(3,7))

const fromEuroToDollar = function(valueInEuro){
    let valueInDollar = valueInEuro * 1.2;
    return valueInDollar;
}
const fromEuroToYen = function(valueInEuro){
    let valueInYen = valueInEuro * 127.9;
    let valueInYen2=valueInYen
    return valueInYen2;
}
const fromEuroToPound = function(valueInEuro){
    let valueInPound = valueInEuro * 0.8;
    let valueInPound2=valueInPound
    return valueInPound2;
}
module.exports ={sum,fromEuroToDollar, fromEuroToPound, fromEuroToYen}