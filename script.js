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
    { nome: "Poco", tipo: "Supporto", mid: true },
    { nome: "Frank", tipo: "Tank", mid: false },
    { nome: "Pam", tipo: "Supporto", mid: true },
    { nome: "Carl", tipo: "Tiratore", mid: true },
    { nome: "Jacky", tipo: "Tank", mid: false },
    { nome: "Tick", tipo: "Lanciatore", mid: false },
    { nome: "Rico", tipo: "Tiratore", mid: true },
    { nome: "Penny", tipo: "Tiratore", mid: true },
    { nome: "Spike", tipo: "Lanciatore", mid: true },
    { nome: "Gene", tipo: "Supporto", mid: true },
    { nome: "Max", tipo: "Supporto", mid: true },
    { nome: "Mr. P", tipo: "Supporto", mid: true },
    { nome: "Stu", tipo: "Assassino", mid: true },
    { nome: "Sprout", tipo: "Controllo", mid: true },
    { nome: "Byron", tipo: "Supporto", mid: true },
    { nome: "Sandy", tipo: "Supporto", mid: true },
    { nome: "Colette", tipo: "Tiratore", mid: true },
    { nome: "Lou", tipo: "Supporto", mid: true },
    { nome: "Amber", tipo: "Tiratore", mid: true },
    { nome: "Gale", tipo: "Supporto", mid: true },
    { nome: "Belle", tipo: "Tiratore", mid: true },
    { nome: "Ash", tipo: "Tank", mid: false },
    { nome: "Chester", tipo: "Assassino", mid: true },
    { nome: "Grom", tipo: "Lanciatore", mid: true },
    { nome: "Buzz", tipo: "Tank", mid: false },
    { nome: "Eve", tipo: "Lanciatore", mid: true },
    { nome: "Gray", tipo: "Assassino", mid: true },
    { nome: "Fang", tipo: "Assassino", mid: true },
    { nome: "Otis", tipo: "Supporto", mid: true },
    { nome: "R-T", tipo: "Lanciatore", mid: true }
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
    "Nita": "Spike",
    "Poco": "Edgar",
    "Frank": "Max",
    "Pam": "Colette",
    "Carl": "Rico",
    "Jacky": "Edgar",
    "Tick": "Colt",
    "Rico": "Nita",
    "Penny": "Brock",
    "Spike": "Shelly",
    "Gene": "Max",
    "Max": "Pam",
    "Mr. P": "Bea",
    "Stu": "Frank",
    "Sprout": "Bo",
    "Byron": "Emz",
    "Sandy": "Tick",
    "Colette": "Bull",
    "Lou": "Brock",
    "Amber": "Edgar",
    "Gale": "Colt",
    "Belle": "Bea",
    "Ash": "Frank",
    "Chester": "Edgar",
    "Grom": "Dynamike",
    "Buzz": "Edgar",
    "Eve": "Gene",
    "Gray": "Bo",
    "Fang": "Brock",
    "Otis": "Shelly",
    "R-T": "Max"
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
    
    const counterSelects = document.querySelectorAll(".counter-select");
    counterSelects[index].innerHTML = ""; 

    let option = document.createElement("option");
    option.value = counterSelezionato;
    option.textContent = counterSelezionato;
    counterSelects[index].appendChild(option); 
}

window.onload = function() {
    popolaBrawler(); 
    caricaMappe(); 
};
