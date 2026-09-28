let mes = document.querySelector("#mes");
let dia = document.querySelector("#dia");
let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

for (let m = 0; m < 12; m++) {
    mes.innerHTML += `<option class="text-black">${meses[m]}</option>`;
}
for (let d = 1; d <= 31; d++) {
    dia.innerHTML += `<option class="text-black">${[d]}</option>`;
}

function descobrirNome() {
    let nome = "";
    if (mes.value == "Janeiro") {
        nome = "Pedrinho"
    } else if (mes.value == "Fev") {
        nome = "Betão"
    } else if (mes.value == "Março") {
        nome = "Paulinho";
    } else if (mes.value == "Abril") {
        nome = "Leozinho";
    } else if (mes.value == "Maio") {
        nome = "Fernando";
    } else if (mes.value == "Junho") {
        nome = "Arlindo";
    } else if (mes.value == "Julho") {
        nome = "Jorginho";
    } else if (mes.value == "Agosto") {
        nome = "Carlão";
    } else if (mes.value == "Setembro") {
        nome = "Fabinho";
    } else if (mes.value == "Outubro") {
        nome = "Elias";
    } else if (mes.value == "Novembro") {
        nome = "Marcão";
    } else if (mes.value == "Dezembro") {
        nome = "Tião";
    }

    if (dia.value == 1) {
        nome += "Treina bunbun"
    } else if (mes.value == 2) {
        nome = "Mata frango"
    } else if (dia.value == "3") {
        nome += " Do shape Zuado";
    } else if (dia.value == "4") {
        nome += " Dos Whey";
    } else if (dia.value == "5") {
        nome += " Pegador da Academia";
    } else if (dia.value == "6") {
        nome += " Taradão da Academia";
    } else if (dia.value == "7") {
        nome += " Do cico eterno";
    } else if (dia.value == "8") {
        nome += " Natural";
    } else if (dia.value == "9") {
        nome += " Frangolinho";
    } else if (dia.value == "10") {
        nome += " Dos 50cm de braço";
    } else if (dia.value == "11") {
        nome += " Do GH";
    } else if (dia.value == "12") {
        nome += " Da Luvinha";
    } else if (dia.value == "13") {
        nome += " Do Stano";
    } else if (dia.value == "14") {
        nome += " Peladão";
    } else if (dia.value == "15") {
        nome += " Panca de Verme";
    } else if (dia.value == "16") {
        nome += " Anomalia";
    } else if (dia.value == "17") {
        nome += " Peldorreiro";
    } else if (dia.value == "18") {
        nome += " Perna Fina";
    } else if (dia.value == "19") {
        nome += " Maromba Raiz";
    } else if (dia.value == "20") {
        nome += " Maromba Nutella";
    } else if (dia.value == "21") {
        nome += " Que não Treina Perna";
    } else if (dia.value == "22") {
        nome += " Que se Acha Grande";
    } else if (dia.value == "23") {
        nome += " Das Paradinhas";
    } else if (dia.value == "24") {
        nome += " Dos Trumbo";
    } else if (dia.value == "25") {
        nome += " Das Marmita";
    } else if (dia.value == "26") {
        nome += " Seringão";
    } else if (dia.value == "27") {
        nome += " Bodybuilder";
    } else if (dia.value == "28") {
        nome += " Dos Veneno";
    } else if (dia.value == "29") {
        nome += " Dos Ferros";
    } else if (dia.value == "30") {
        nome += " Sem Panturrilha";
    } else if (dia.value == "31") {
        nome += " Peito de Pombo";
    }
    
    let resultado = document.querySelector("#resultado");
    if(!resultado){
        resultado = document.createElement("h2");
        resultado.id = "resultado";
        resultado.className = "text-white text-2xl font-bold mt-10 text-center";
        document.querySelector("body div").appendChild(resultado);
    }
    resultado.innerText = nome;
    console.log(nome);
}