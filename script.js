const brawlers = [
    "8-Bit", "Amber", "Angelo", "Ash", "Barley", "Bea", "Belle", "Berry", "Bibi", "Bo", "Bonnie", "Brock", "Bull", "Buster", 
    "Buzz", "Buzz Lightyear", "Byron", "Carl", "Charlie", "Chester", "Chuck", "Clancy", "Colette", "Colt", "Cordelius", 
    "Crow", "Darryl", "Doug", "Draco", "Dynamike", "Edgar", "El Primo", "Emz", "Eve", "Fang", "Finx", "Frank", "Gale", "Gene", 
    "Gray", "Griff", "Grom", "Gus", "Hank", "Jacky", "Janet", "Jessie", "Juju", "Kenji", "Kit", "Larry & Lawrie", "Leon", "Lily", 
    "Lola", "Lou", "Lumi", "Maisie", "Mandy", "Max", "Meeple", "Meg", "Melodie", "Mico", "Moe", "Mortis", "Mr. P", "Nani", "Nita", 
    "Ollie", "Otis", "Pam", "Pearl", "Penny", "Piper", "Poco", "R-T", "Rico", "Rosa", "Ruffs", "Sam", "Sandy", "Shade", "Shelly", 
    "Spike", "Sprout", "Squeak", "Stu", "Surge", "Tara", "Tick", "Willow"
];

const mappePerModalita = {
    "KO": ["Zona Pericolosa", "Ultima Chance"],
    "Rapina": ["Banca Blindata", "Canyon Pericoloso"],
    "Arraffagemme": ["Caverna di Cristallo", "Mina Rocciosa"],
    "Footbrawl": ["Stadio Stella", "Calcio Infuocato"],
    "Hockeybrawl": ["Pista Ghiacciata", "Ghiaccio Bollente"]
};

function caricaMappe() {
    let modalita = document.getElementById("modalita").value;
    let mappaSelect = document.getElementById("mappa");
    mappaSelect.innerHTML = "<option value=''>-- Seleziona una mappa --</option>";
    if (mappePerModalita[modalita]) {
        mappePerModalita[modalita].forEach(mappa => {
            let option = document.createElement("option");
            option.value = mappa;
            option.textContent = mappa;
            mappaSelect.appendChild(option);
        });
    }
}

function popolaSelect() {
    let selectElements = document.querySelectorAll(".brawler-select");
    selectElements.forEach(select => {
        select.innerHTML = "<option value=''>-- Seleziona un Brawler --</option>";
        brawlers.forEach(brawler => {
            let option = document.createElement("option");
            option.value = brawler;
            option.textContent = brawler;
            select.appendChild(option);
        });
    });
}

function aggiornaCounter() {
    let squadra1 = [
        document.getElementById("brawler1").value,
        document.getElementById("brawler2").value,
        document.getElementById("brawler3").value
    ];

    let counter1 = document.getElementById("counter1");
    let counter2 = document.getElementById("counter2");
    let counter3 = document.getElementById("counter3");

    counter1.textContent = squadra1[0] ? suggerisciCounter(squadra1[0]) : "";
    counter2.textContent = squadra1[1] ? suggerisciCounter(squadra1[1]) : "";
    counter3.textContent = squadra1[2] ? suggerisciCounter(squadra1[2]) : "";
}

function suggerisciCounter(brawler) {
    let possibiliCounter = brawlers.filter(b => b !== brawler);
    return possibiliCounter[Math.floor(Math.random() * possibiliCounter.length)];
}

document.addEventListener("DOMContentLoaded", () => {
    popolaSelect();
    caricaMappe();
});
