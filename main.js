
//Funzionamento con i bottoni
let button = document.getElementById("btn");
let buttonMed = document.getElementById("btn_med");
let buttonHard = document.getElementById("btn_hard");

//La griglia la inizializzo qui, altrimenti mi creava un problema
let griglia = document.querySelector(".grid");

let bombe = [];
let setSenzaDuplicati = [];
let i = 1;
for (i; i <= 16; i++) {
    singolaBomba = Math.floor(Math.random() * 100);


    bombe[i] = singolaBomba;

    setSenzaDuplicati = new Set(bombe);
}
console.log(setSenzaDuplicati)

/*
function generaNumeriSenzaDuplicati() {
    let numeri = [];
    while (numeri.length < 16) {
        let nuovoNumero = Math.floor(Math.random() * 101); // Genera un numero casuale da 1 a 100
        if (numeri.indexOf(nuovoNumero) === -1) { // Verifica se il numero non è già presente nell'array
            numeri.push(nuovoNumero); // Aggiunge il numero all'array se non è duplicato
        }
    }
    return numeri;
}
*/
let arrayNumeri = generaNumeriSenzaDuplicati();
console.log(arrayNumeri);














//Al click abbiamo la versione facile
button.addEventListener("click", function () {
    griglia.classList.remove("grid", "grid_med", "grid_hard");
    griglia.classList.add("grid");
    griglia.innerHTML = " ";
    let arrayNumeriBoom = [];
    let i=0;

    // griglia.innerHTML("ciao"); non mi funziona
    for (i = 1; i < 101; i++) {
        let prova =0;
        let quadrato = creaQuadrato(i); //in questo caso quadrato non va in conflitto a causa dello scope
        griglia.append(quadrato);  //Serve ad aggiungere il quadrato creato, altrimenti viene creato e rimane in un altro mondo
        console.log(i);
        console.log (typeof quadrato)


        quadratoString=JSON.stringify(quadrato);
        arrayNumeriProva=JSON.stringify(arrayNumeri);
        console.log(quadratoString + "ciaoooooo")

        
        if (quadratoString == arrayNumeriProva){
            console.log("uguale")
        }
        else{
            console.log("non uguale")
        }
    }

});

//Al click abbiamo la versione medium
buttonMed.addEventListener("click", function () {
    griglia.classList.remove("grid", "grid_med", "grid_hard");
    griglia.classList.add("grid_med");
    griglia.innerHTML = " ";

    // griglia.innerHTML("ciao"); non mi funziona
    for (let i = 1; i < 82; i++) {
        let quadrato = creaQuadrato(i); //in questo caso quadrato non va in conflitto a causa dello scope
        griglia.append(quadrato);  //Serve ad aggiungere il quadrato creato, altrimenti viene creato e rimane in un altro mondo
    }
});

//Al click abbiamo la versione hard
buttonHard.addEventListener("click", function () {
    griglia.classList.remove("grid", "grid_med", "grid_hard");
    griglia.classList.add("grid_hard");
    griglia.innerHTML = " ";

    // griglia.innerHTML("ciao"); non mi funziona
    for (let i = 1; i < 50; i++) {
        let quadrato = creaQuadrato(i); //in questo caso quadrato non va in conflitto a causa dello scope
        griglia.append(quadrato);  //Serve ad aggiungere il quadrato creato, altrimenti viene creato e rimane in un altro mondo
    }
});






//Funzionamento con il select
let buttonSelect = document.getElementById("btn_select");
let select = document.getElementById("opzione").value;


let prova = document.getElementById('opzione').addEventListener('change', function () {
    console.log('You selected: ', this.value);
    buttonSelect.value = this.value;
});


buttonSelect.addEventListener("click", function () {
    console.log(buttonSelect.value)
    if (buttonSelect.value == "Facile") {
        griglia.classList.remove("grid", "grid_med", "grid_hard");
        griglia.classList.add("grid");
        griglia.innerHTML = " ";

        // griglia.innerHTML("ciao"); non mi funziona
        for (let i = 1; i < 101; i++) {
            let quadrato = creaQuadrato(i); //in questo caso quadrato non va in conflitto a causa dello scope
            griglia.append(quadrato);  //Serve ad aggiungere il quadrato creato, altrimenti viene creato e rimane in un altro mondo
        }
    }

    if (buttonSelect.value == "Medio") {
        griglia.classList.remove("grid", "grid_med", "grid_hard");
        griglia.classList.add("grid_med");
        griglia.innerHTML = " ";

        // griglia.innerHTML("ciao"); non mi funziona
        for (let i = 1; i < 82; i++) {
            let quadrato = creaQuadrato(i); //in questo caso quadrato non va in conflitto a causa dello scope
            griglia.append(quadrato);  //Serve ad aggiungere il quadrato creato, altrimenti viene creato e rimane in un altro mondo
        }
    }

    if (buttonSelect.value == "Difficile") {
        griglia.classList.remove("grid", "grid_med", "grid_hard");
        griglia.classList.add("grid_hard");
        griglia.innerHTML = " ";

        // griglia.innerHTML("ciao"); non mi funziona
        for (let i = 1; i < 50; i++) {
            let quadrato = creaQuadrato(i); //in questo caso quadrato non va in conflitto a causa dello scope
            griglia.append(quadrato);  //Serve ad aggiungere il quadrato creato, altrimenti viene creato e rimane in un altro mondo
        }
    }

});





//Funzioni questo prima era messo prima di ogni griglia.append(quadrato);
function creaQuadrato(i) {
    let quadrato = document.createElement("div");
    quadrato.classList.add("square");

    // Event-listener click
    quadrato.addEventListener("click", function () {
        console.log("cliccato", this); //this indica proprio questo elemento i+1 ovviamente indica il numero dopo sul log
        this.classList.toggle("clicked");
        if (quadrato.innerText == i) {
            quadrato.innerText = "";
        }
        else {
            quadrato.innerText = i;
        }
    });

    //return così viene conservato
    return quadrato;
}




function generaNumeriSenzaDuplicati() {
    let numeri = [];
    while (numeri.length < 16) {
        let nuovoNumero = Math.floor(Math.random() * 101); // Genera un numero casuale da 1 a 100
        if (numeri.indexOf(nuovoNumero) === -1) { // Verifica se il numero non è già presente nell'array
            numeri.push(nuovoNumero); // Aggiunge il numero all'array se non è duplicato
        }
    }
    return numeri;
}


/*
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    
}
*/



let punteggio=0;

while(nonbomba){
    punteggio++;
}
if(controllocella == bomba){
    alert("Sei finito")
}

if (punteggio == 30){
    alert("hai vinto")
}