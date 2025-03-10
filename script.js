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
    { nome: "Poco", tipo: "Supporto", mid: true },
    { nome: "Frank", tipo: "Tank", mid: false },
    { nome: "Carl", tipo: "Tiratore", mid: true },
    { nome: "Rico", tipo: "Tiratore", mid: true },
    { nome: "Penny", tipo: "Supporto", mid: true },
    { nome: "Tara", tipo: "Controllo", mid: true },
    { nome: "Gene", tipo: "Supporto", mid: true },
    { nome: "Max", tipo: "Supporto", mid: true },
    { nome: "Leon", tipo: "Assassino", mid: false },
    { nome: "Spike", tipo: "Tiratore", mid: true },
    { nome: "Crow", tipo: "Assassino", mid: false },
    { nome: "Ricochet", tipo: "Tiratore", mid: true },
    { nome: "Bibi", tipo: "Tank", mid: false },
    { nome: "Surge", tipo: "Assassino", mid: true },
    { nome: "Amber", tipo: "Tiratore", mid: true },
    { nome: "Lou", tipo: "Supporto", mid: true },
    { nome: "El Primo", tipo: "Tank", mid: false },
    { nome: "Barley", tipo: "Lanciatore", mid: true },
    { nome: "Piper", tipo: "Tiratore", mid: true },
    { nome: "Pam", tipo: "Supporto", mid: true },
    { nome: "Frank", tipo: "Tank", mid: false },
    { nome: "Mortis", tipo: "Assassino", mid: false },
    { nome: "Tara", tipo: "Controllo", mid: true },
    { nome: "Gene", tipo: "Supporto", mid: true },
    { nome: "Max", tipo: "Supporto", mid: true },
    { nome: "Leon", tipo: "Assassino", mid: false },
    { nome: "Spike", tipo: "Tiratore", mid: true },
    { nome: "Crow", tipo: "Assassino", mid: false },
    { nome: "Ricochet", tipo: "Tiratore", mid: true },
    { nome: "Bibi", tipo: "Tank", mid: false },
    { nome: "Surge", tipo: "Assassino", mid: true },
    { nome: "Amber", tipo: "Tiratore", mid: true },
    { nome: "Lou", tipo: "Supporto", mid: true },
    { nome: "El Primo", tipo: "Tank", mid: false },
    { nome: "Barley", tipo: "Lanciatore", mid: true },
    { nome: "Piper", tipo: "Tiratore", mid: true },
    { nome: "Pam", tipo: "Supporto", mid: true },
    { nome: "Frank", tipo: "Tank", mid: false },
    { nome: "Mortis", tipo: "Assassino", mid: false },
    { nome: "Tara", tipo: "Controllo", mid: true },
    { nome: "Gene", tipo: "Supporto", mid: true },
    { nome: "Max", tipo: "Supporto", mid: true },
    { nome: "Leon", tipo: "Assassino", mid: false },
    { nome: "Spike", tipo: "Tiratore", mid: true },
    { nome: "Crow", tipo: "Assassino", mid: false }
];

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

function suggerisciCounter(index) {
    const brawlerSelezionato = document.querySelectorAll(".brawler-select")[index].value;
    const counterSelezionato = counter[brawlerSelezionato] || "Nessun dato";
    document.querySelectorAll(".counter-select")[index].innerHTML = `<option>${counterSelezionato}</option>`;
}

window.onload = function() {
    popolaBrawler();
    caricaMappe();
};
