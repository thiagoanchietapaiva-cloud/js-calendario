let mes = document.querySelector("#mes");
let dia = document.querySelector("#dia");
let meses = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];

for(let m = 0; m < 12; m++){
    mes.innerHTML += `<option class="text-black">${meses[m]}</option>`;
}
for(let d = 1; d <= 31; d++){
    dia.innerHTML += `<option class="text-black">${[d]}</option>`;
}

 if(mes.value == "Janeiro"){
        nome = "Pedrinho";
    } else if(mes.value == "Fevereiro"){
        nome = "Betão";
    } else if(mes.value == "Março"){
        nome = "Jão";
    } else if(mes.value == "Abril"){
        nome = "Dudu";
    } else if(mes.value == "Maio"){
        nome = "Vitinho";
    } else if(mes.value == "Junho"){
        nome = "Claudinho";
    } else if(mes.value == "Julho"){
        nome = "Juninho";
    } else if(mes.value == "Agosto"){
        nome = "jota";
    } else if(mes.value == "Setembro"){
        nome = "Cebolinha";
    } else if(mes.value == "Outubro"){
        nome = "Magrelo";
    } else if(mes.value == "Novembro"){
        nome = "Boladão";
    } else if(mes.value == "Dezembro"){
        nome = "Tonhão";
    }

    // COMPLETANDO OS DIAS
    if(dia.value == "1"){
        nome += " Treina bunbun";
    } else if(dia.value == "2"){
        nome += " Mata frango";
    } else if(dia.value == "3"){
        nome += " Come quieto";
    } else if(dia.value == "4"){
        nome += " Pula leg day";
    } else if(dia.value == "5"){
        nome += " Só faz bíceps";
    } else if(dia.value == "6"){
        nome += " Não toma banho";
    } else if(dia.value == "7"){
        nome += " Chora no banho";
    } else if(dia.value == "8"){
        nome += " Levanta 5kg";
    } else if(dia.value == "9"){
        nome += " Fede a suor";
    } else if(dia.value == "10"){
        nome += " Rouba marmita";
    } else if(dia.value == "11"){
        nome += " Treina fofo";
    } else if(dia.value == "12"){
        nome += " Toma whey vencido";
    } else if(dia.value == "13"){
        nome += " Treina de jeans";
    } else if(dia.value == "14"){
        nome += " Grita na academia";
    } else if(dia.value == "15"){
        nome += " Nunca falha";
    } else if(dia.value == "16"){
        nome += " Puxa ferro";
    } else if(dia.value == "17"){
        nome += " Come frango cru";
    } else if(dia.value == "18"){
        nome += " Dorme no supino";
    } else if(dia.value == "19"){
        nome += " Finge que treina";
    } else if(dia.value == "20"){
        nome += " Tira foto no espelho";
    } else if(dia.value == "21"){
        nome += " Reclama do preço do whey";
    } else if(dia.value == "22"){
        nome += " Só faz cardio";
    } else if(dia.value == "23"){
        nome += " Perde a garrafinha";
    } else if(dia.value == "24"){
        nome += " Treina descalço";
    } else if(dia.value == "25"){
        nome += " Viciado em pré-treino";
    } else if(dia.value == "26"){
        nome += " Monstro da academia";
    } else if(dia.value == "27"){
        nome += " Frango da academia";
    } else if(dia.value == "28"){
        nome += " Lenda do supino";
    } else if(dia.value == "29"){
        nome += " Rei do agachamento";
    } else if(dia.value == "30"){
        nome += " Fura dieta";
    } else if(dia.value == "31"){
        nome += " Nunca limpa o aparelho";
    }

    console.log(nome);
    return nome;
