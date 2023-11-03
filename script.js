function calculate(num1, operation, num2) {
    switch (operation) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num1 / num2;
        default:
            return "dato errado";
    }
}
//console.log(calculate(5, "+", 12))

function convertTemperature(temperature, unit) {
    if (unit == "C") {
        result = (temperature * 9) / 5 + 32;
        return result;
    } else if (unit == "F") {
        result = ((temperature - 32) * 5) / 9;
        return result;
    } else {
        return "Invalid data";
    }
}
// const userTemperature = parseFloat(prompt("Ingresa la temperature"))
// const userUnit = prompt("Elije la unidad (C o F)").toUpperCase();
// console.log(convertTemperature(userTemperature, userUnit))

function generatePassword(letras_numbers, caracteres) {
    let pass = "";
    let str = "ABCDEFGhijkl0123456789!#$%&"
    let longitud = parseInt(prompt("Dime la longitud de la contraseña"))
    for (let i = 1; i <= longitud; i++) {
        let char = Math.floor(Math.random() * str.length + 1)
        pass += str.charAt(char)
    }
    return pass;
};
console.log(generatePassword())