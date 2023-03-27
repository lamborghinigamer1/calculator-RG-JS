const optionsContainer = document.getElementById('options-container');

function viewAll() {
    const options = [
        "Temperature",
        "Resistance",
        "length",
        "Mass Energy equivalence",
        "table of",
        "random number",
        "normal math",
        "factorial",
        "percentages",
        "discount",
        "VAT",
        "power (exponentiation)"
    ]
    for (let i = 0; i < options.length; i++) {
        console.log(options[i])
        const option = document.createElement('option');
        option.innerHTML = options[i];
        option.classList.add('juan');
        optionsContainer.appendChild(option);
    }
}

viewAll();

function FToC() {
    let inputF, outputC;
    if (inputF < -459.67) {

    }
    else {
        outputC = (inputF - 32) / 1.8;
        const answer = document.createElement('h1');
        answer.innerHTML = "Result: " + answer;
    }
}

function StartTemp() {
    const options = [
        "Fahrenheit to Celcius",
    ]
    const tijmoe = document.querySelector('body');
    const select = document.createElement('select');
    const calculate = document.createElement('button');
    calculate.innerHTML = "calculate";
    tijmoe.appendChild(select);
    tijmoe.appendChild(calculate);
    for (let i = 0; i < options.length; i++) {
        const option = document.createElement('option');
        option.innerHTML = options[i];
        option.classList.add('tijmoe');
        select.appendChild(option);
    }
}

function UseFormula() {
    console.log(optionsContainer.value);
    switch (optionsContainer.value) {
        case "Temperature":
            StartTemp();
            break;
    }
}