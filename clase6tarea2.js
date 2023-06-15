let $salariosAnuales = [];

//Función que le da la funcionalidad al botón de "Agregar" para que el usuario tipee los salarios.
function agregarSalariosAnuales() {
    const $salarioAnual = document.createElement("input");
    $salarioAnual.type = "number";
    const $labelSalarioAnual = document.createElement("label");
    $labelSalarioAnual.textContent = "Salario anual: ";
    
    document.getElementById("container").appendChild($labelSalarioAnual);
    document.getElementById("container").appendChild($salarioAnual);

    $salariosAnuales.push($salarioAnual);
}

//Función que le da la funcionalidad al botón de "Agregar" para que el usuario elimine los salarios que requiera.
function quitarSalariosAnuales() {
    if ($salariosAnuales.length > 0) {
        let $salarioAnual = $salariosAnuales.pop();
        let $labelSalarioAnual = $salarioAnual.previousElementSibling;

        $salarioAnual.parentNode.removeChild($salarioAnual);
        $labelSalarioAnual.parentNode.removeChild($labelSalarioAnual);
    }
}

//Función obtiene los valores de los salarios que cargó el usuario, verificando que el número sea válido (es decir, que no esté vacío el input y que se trate de un número)
function obtenerSalarios() {
    const salarios = [];

    $salariosAnuales.forEach(function ($salarioAnual) {
        const salario = parseInt($salarioAnual.value);
        if (!isNaN(salario) && salario !== '') {
            salarios.push(salario);
        }
    });

    return salarios;
}

//Funciones que realizan los cálculos de mayor, menor y promedios mediante iterar arrays y algoritmos
function calcularMayorSalario(salarios) {
    let mayorSalario = salarios[0];

    for (let i = 1; i < salarios.length; i++) {
        if (salarios[i] > mayorSalario) {
            mayorSalario = salarios[i];
        }
    }
    return mayorSalario;
}

function calcularMenorSalario(salarios) {
    let menorSalario = salarios[0];

    for (let i = 1; i < salarios.length; i++) {
        if (salarios[i] < menorSalario) {
            menorSalario = salarios[i];
        }
    }
    return menorSalario;
}

function calcularPromedioAnual(salarios) {
    let totalSalarios = 0;

    for (let i = 0; i < salarios.length; i++) {
        totalSalarios += salarios[i];
    }

    return totalSalarios / salarios.length;
}

function calcularPromedioMensual(salarioPromedioAnual) {
    return (salarioPromedioAnual / 12);
}

//Función que interactúa con el DOM para mostrar los resultados de los cálculos de las funciones anteriores en el HTML.
function colocarResultados() {
    const salarios = obtenerSalarios();

    if (salarios.length > 0) {
        const mayorSalario = calcularMayorSalario(salarios);
        const menorSalario = calcularMenorSalario(salarios);
        const salarioPromedioAnual = calcularPromedioAnual(salarios);
        const salarioPromedioMensual = calcularPromedioMensual(salarioPromedioAnual);

        document.getElementById("mayor-salario").textContent = mayorSalario;
        document.getElementById("menor-salario").textContent = menorSalario;
        document.getElementById("promedio-anual").textContent = salarioPromedioAnual;
        document.getElementById("promedio-mensual").textContent = salarioPromedioMensual;
    } else {
        document.getElementById("mayor-salario").textContent = '';
        document.getElementById("menor-salario").textContent = '';
        document.getElementById("promedio-anual").textContent = '';
        document.getElementById("promedio-mensual").textContent = '';

    }
}

colocarResultados();
