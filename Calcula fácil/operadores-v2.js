function somar(){
    let v1 = parseFloat(prompt('Digite o valor 01: '));
    let v2 = parseFloat(prompt('Digite o valor 02: '));
    document.getElementById('resultado').style.display = 'flex';

    const resultado = document.getElementById('resultado');
    resultado.innerHTML =

    `<h2> Memória de Cálculo </h2>
        <ul>
            <li>Operação: Soma </li>
            <li>O Valor 01 que foi digitado é: ${v1} </li>
            <li>O Valor 02 que foi digitado é: ${v2} </li>
            <li>O resultado dessa operação é: ${v1} + ${v2} = ${v1 + v2} </li>
        </ul> `;
}

function subtrair(){
    let v1 = parseFloat(prompt('Digite o valor 01: '));
    let v2 = parseFloat(prompt('Digite o valor 02: '));

    document.getElementById('resultado').style.display = 'flex';
    const resultado = document.getElementById('resultado');
    resultado.innerHTML =

    `<h2> Memória de Cálculo </h2>
        <ul>
            <li>Operação: Soma </li>
            <li>O Valor 01 que foi digitado é: ${v1} </li>
            <li>O Valor 02 que foi digitado é: ${v2} </li>
            <li>O resultado dessa operação é: ${v1} - ${v2} = ${v1 - v2} </li>
        </ul> `;
}

function multiplicar(){
    let v1 = parseFloat(prompt('Digite o valor 01: '));
    let v2 = parseFloat(prompt('Digite o valor 02: '));

    document.getElementById('resultado').style.display = 'flex';
    const resultado = document.getElementById('resultado');
    resultado.innerHTML =

    `<h2> Memória de Cálculo </h2>
        <ul>
            <li>Operação: Soma </li>
            <li>O Valor 01 que foi digitado é: ${v1} </li>
            <li>O Valor 02 que foi digitado é: ${v2} </li>
            <li>O resultado dessa operação é: ${v1} * ${v2} = ${v1 * v2} </li>
        </ul> `;
}

function dividir(){
    let v1 = parseFloat(prompt('Digite o valor 01: '));
    let v2 = parseFloat(prompt('Digite o valor 02: '));

    document.getElementById('resultado').style.display = 'flex';
    const resultado = document.getElementById('resultado');
    resultado.innerHTML =

    `<h2> Memória de Cálculo </h2>
        <ul>
            <li>Operação: Soma </li>
            <li>O Valor 01 que foi digitado é: ${v1} </li>
            <li>O Valor 02 que foi digitado é: ${v2} </li>
            <li>O resultado dessa operação é: ${v1} / ${v2} = ${v1 / v2} </li>
        </ul> `;
}

function porcentagem(){
    let v1 = parseFloat(prompt('Digite o valor que você deseja saber a porcentagem: '));
    let v2 = parseFloat(prompt('Digite o valor da porcentagem'));

    document.getElementById('resultado').style.display = 'flex';
    const resultado = document.getElementById('resultado');
    resultado.innerHTML =

    `<h2> Memória de Cálculo </h2>
        <ul>
            <li>Operação: Soma </li>
            <li>O Valor 01 que foi digitado é: ${v1} </li>
            <li>O Valor 02 que foi digitado é: ${v2} </li>
            <li>O resultado dessa operação é: ${v1} * ${v2} / 100 = ${v1 / v2} </li>
        </ul> `;

}

function limpar(){
    document.getElementById('resultado').style.display = 'none';
}