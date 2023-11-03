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

function generatePassword() {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$%&"; // Incluye caracteres en minúsculas
    let longitud = parseInt(prompt("Dime la longitud de la contraseña"));

    for (let i = 0; i < longitud; i++) { // Inicia el bucle desde 0 y usa '<' en lugar de '<='
        let char = Math.floor(Math.random() * str.length); // Corregir esta línea
        pass += str.charAt(char);
    }

    return pass;
}

console.log(generatePassword());
