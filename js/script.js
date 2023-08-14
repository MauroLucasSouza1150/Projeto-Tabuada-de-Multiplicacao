// Seleção dos Elementos
const formContainer = document.querySelector("#form-container");
const numberInput = document.querySelector("#number");
const multiplicatorInput = document.querySelector("#multiplicator") 

const multiplicationTitle = document.querySelector("#table-title span")

const multiplicationTable = document.querySelector("#table-operations")
// Funções 
const createTable = (number, multiplicatorNumber) => {
    multiplicationTable.innerHTML = "";

    for(i = 1; i <= multiplicatorNumber; i++) {
    const result = number * i;

    const template = `<div class="row">
            <div class="operation">${number} x ${i} = </div>
            <div class="result"><mark>${result}</mark></div>
        </div>`;

    const parser = new DOMParser();

    const htmlTemplate = parser.parseFromString(template, "text/html");

    const row = htmlTemplate.querySelector(".row");

    multiplicationTable.appendChild(row);
    };

    multiplicationTitle.innerText = number;
};


// Eventos
formContainer.addEventListener("submit", (e) => {
    e.preventDefault();

    const multiplicationNumber = +numberInput.value;

    const multiplicatorNumber = +multiplicatorInput.value;

    if (!multiplicationNumber || !multiplicatorNumber) return;

    createTable(multiplicationNumber, multiplicatorNumber);
});