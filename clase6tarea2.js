let inputs = [];

function agregarInput() {
    const input = document.createElement("input");
    input.type = "number";
    const label = document.createElement("label");
    label.textContent = "Salario anual: ";
    
    document.getElementById("container").appendChild(label);
    document.getElementById("container").appendChild(input);

    inputs.push(input);
}

function quitarInput() {
    if (inputs.length > 0) {
        let input = inputs.pop();
        input.parentNode.removeChild(input);
        let label = input.previousSibling;
        label.parentNode.removeChild(label);
    }
}

function calcularSalarios() {
    let salarios = [];

    inputs.forEach(function (input) {
        let salario = parseInt(input.value);
        if (!isNaN(salario) && salario !== '') {
            salarios.push(salario);
        }
    });

if (salarios.length > 0) {
    const mayorSalario = Math.max(...salarios);
    const menorSalario = Math.min(...salarios);
    const salarioPromedioAnual = calcularPromedio(salarios);
    const salarioPromedioMensual = salarioPromedioAnual / 12;

    document.getElementById("mayor-salario").textContent = mayorSalario;
    document.getElementById("menor-salario").textContent = menorSalario;
    document.getElementById("promedio-anual").textContent = salarioPromedioAnual;
    document.getElementById("promedio-mensual").textContent = salarioPromedioMensual;
} else {
    document.getElementById("mayorSalario").textContent = '';
    document.getElementById("menorSalario").textContent = '';
    document.getElementById("promedioSalarioAnual").textContent = '';
    document.getElementById("promedioSalarioMensual").textContent = '';
}
}

function calcularPromedio(salarios) {
    const total = salarios.reduce(function (suma, salario) {
        return (suma + salario);
    }, 0);
    return total / salarios.length;
}

