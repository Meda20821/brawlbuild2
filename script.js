￼Inserisci qui il contenuto del file
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
    { nome: "Edgar", tipo: "Assassino", mid: false }
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
    "Edgar": "Bo"
};

const mappe = {
    "KO": ["Mappa KO 1", "Mappa KO 2"],
    "Rapina": ["Mappa Rapina 1", "Mappa Rapina 2"],
    "Arraffagemme": ["Mappa Arraffagemme 1", "Mappa Arraffagemme 2"],
    "Footbrawl": ["Mappa Footbrawl 1", "Mappa Footbrawl 2"],
    "Hockeybrawl": ["Mappa Hockeybrawl 1", "Mappa Hockeybrawl 2"]
};

function caricaMappe() {
    const modalita = document.getElementById("modalita").value;
    const selectMappa = document.getElementById("mappa");
    selectMappa.innerHTML = ""; // Pulisce la lista delle mappe precedenti
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
