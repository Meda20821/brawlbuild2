const brawlers = [
    { nome: "Shelly", tipo: "Tank", mid: false },
    { nome: "Colt", tipo: "Tiratore", mid: true },
    { nome: "Bull", tipo: "Tank", mid: false },
    { nome: "Brock", tipo: "Tiratore", mid: true },
    { nome: "Dynamike", tipo: "Lanciatore", mid: false },
    { nome: "Bo", tipo: "Supporto", mid: true },
    { nome: "Emz", tipo: "Controllo", mid: true },
    { nome: "Rosa", tipo: "Tank", mid: false },
    { nome: "Bea", tipo: "Tiratore", mid: true },
    { nome: "Edgar", tipo: "Assassino", mid: false },
    { nome: "Nita", tipo: "Tank", mid: false },
    { nome: "Jessie", tipo: "Supporto", mid: true },
    { nome: "Penny", tipo: "Tiratore", mid: true },
    { nome: "Frank", tipo: "Tank", mid: false },
    { nome: "Gale", tipo: "Controllo", mid: true },
    { nome: "Spike", tipo: "Tiratore", mid: true },
    { nome: "Crow", tipo: "Assassino", mid: false },
    { nome: "Leon", tipo: "Assassino", mid: false },
    { nome: "Sandy", tipo: "Controllo", mid: true },
    { nome: "Max", tipo: "Supporto", mid: true },
    { nome: "Tara", tipo: "Controllo", mid: true },
    { nome: "Poco", tipo: "Supporto", mid: true },
    { nome: "Barley", tipo: "Lanciatore", mid: false },
    { nome: "Rico", tipo: "Tiratore", mid: true },
    { nome: "Mortis", tipo: "Assassino", mid: false },
    { nome: "Bibi", tipo: "Tank", mid: false },
    { nome: "El Primo", tipo: "Tank", mid: false },
    { nome: "Jacky", tipo: "Tank", mid: false },
    { nome: "Darryl", tipo: "Tank", mid: false },
    { nome: "Surge", tipo: "Tiratore", mid: true },
    { nome: "Amber", tipo: "Tiratore", mid: true },
    { nome: "Lou", tipo: "Controllo", mid: true },
    { nome: "Stu", tipo: "Assassino", mid: false },
    { nome: "Buzz", tipo: "Tank", mid: false },
    { nome: "Griff", tipo: "Tiratore", mid: true },
    { nome: "Colette", tipo: "Tiratore", mid: true },
    { nome: "Ash", tipo: "Tank", mid: false },
    { nome: "Grom", tipo: "Lanciatore", mid: false }
    // Aggiungi il resto dei brawler (inserisci tutti i 89 brawler)
];

const counter = {
    "Shelly": "Colt",
    "Colt": "Bull",
    "Bull": "Bea",
    "Brock": "Edgar",
    "Dynamike": "Shelly",
    "Bo": "Emz",
    "Emz": "Dynamike",
    "Rosa": "Brock",
    "Bea": "Bull",
    "Edgar": "Bo",
    "Nita": "Shelly",
    "Jessie": "Brock",
    "Penny": "Dynamike",
    "Frank": "Edgar",
    "Gale": "Leon",
    "Spike": "Poco",
    "Crow": "Bea",
    "Leon": "Shelly",
    "Sandy": "Mortis",
    "Max": "Edgar",
    "Tara": "Emz",
    "Poco": "Bea",
    "Barley": "Colt",
    "Rico": "Bea",
    "Mortis": "Bull",
    "Bibi": "Colt",
    "El Primo": "Brock",
    "Jacky": "Dynamike",
    "Darryl": "Shelly",
    "Surge": "Edgar",
    "Amber": "Penny",
    "Lou": "Tara",
    "Stu": "Dynamike",
    "Buzz": "Rosa",
    "Griff": "Edgar",
    "Colette": "Brock",
    "Ash": "Bull",
    "Grom": "Bo",
    // Aggiungi i counter per tutti i brawler rimanenti
};

const mappe = {
    "KO": [
        "Alla Luce del Sole",
        "Il Rifugio della Stella",
        "Sabbia e Polvere"
    ],
    "Rapina": [
        "Città dei Banditi",
        "Bancomat Assaltato",
        "Città di Minatori"
    ],
    "Arraffagemme": [
        "Sardine",
        "Caos Supremo",
        "Palude"
    ],
    "Footbrawl": [
        "Stadio",
        "Campo da Calcio",
        "Piazza Olimpica"
    ],
    "Hockeybrawl": [
        "Patinoire",
        "Arena di Ghiaccio",
        "Il Regno del Ghiaccio"
    ]
};

// Funzione per caricare le mappe in base alla modalità
function caricaMappe() {
    const modalita = document.getElementById("modalita").value;
    const selectMappa = document.getElementById("mappa");
    selectMappa.innerHTML = "";
    mappe[modalita].forEach(mappa => {
        let option = document.createElement("option");
        option.value = mappa;
        option.textContent = mappa;
        selectMappa.appendChild(option);
    });
}

// Funzione per popolare la lista dei brawler
function popolaBrawler() {
    const selects = document.querySelectorAll(".brawler-select");
    selects.forEach(select => {
        brawlers.forEach(brawler => {
            let option = document.createElement("option");
            option.value = brawler.nome;
            option.textContent = `${brawler.nome} (${brawler.tipo}) - ${brawler.mid ? "Mid" : "Lane"}`;
            select.appendChild(option);
        });
    });
}

// Funzione per suggerire il counter del brawler selezionato
function suggerisciCounter(index) {
    const brawlerSelezionato = document.querySelectorAll(".brawler-select")[index].value;
    const counterSelezionato = counter[brawlerSelezionato] || "Nessun dato"; // Se non c'è un counter, mostra "Nessun dato"
    
    const counterSelects = document.querySelectorAll(".counter-select");
    counterSelects[index].innerHTML = ""; // Rimuove le opzioni precedenti

    let option = document.createElement("option");
    option.value = counterSelezionato;
    option.textContent = counterSelezionato;
    counterSelects[index].appendChild(option); // Aggiunge il counter suggerito
}

// Inizializzazione della pagina
window.onload = function() {
    popolaBrawler(); // Popola i brawler nelle dropdown
    caricaMappe(); // Carica le mappe iniziali
};
