<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Brawl Stars Team Builder</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Brawl Stars Team Builder</h1>
    
    <label for="modalita">Seleziona la modalità:</label>
    <select id="modalita" onchange="caricaMappe()">
        <option value="">-- Seleziona una modalità --</option>
        <option value="KO">KO</option>
        <option value="Rapina">Rapina</option>
        <option value="Arraffagemme">Arraffagemme</option>
        <option value="Footbrawl">Footbrawl</option>
        <option value="Hockeybrawl">Hockeybrawl</option>
    </select>

    <label for="mappa">Seleziona la mappa:</label>
    <select id="mappa">
        <option value="">-- Seleziona una mappa --</option>
    </select>

    <h2>Squadra 1</h2>
    <label for="brawler1">Brawler 1:</label>
    <select id="brawler1" class="brawler-select" onchange="suggerisciCounter(0)"></select>
    <label for="brawler2">Brawler 2:</label>
    <select id="brawler2" class="brawler-select" onchange="suggerisciCounter(1)"></select>
    <label for="brawler3">Brawler 3:</label>
    <select id="brawler3" class="brawler-select" onchange="suggerisciCounter(2)"></select>

    <h2>Squadra 2 (Counter suggeriti)</h2>
    <label for="counter1">Counter 1:</label>
    <select id="counter1" class="counter-select"></select>
    <label for="counter2">Counter 2:</label>
    <select id="counter2" class="counter-select"></select>
    <label for="counter3">Counter 3:</label>
    <select id="counter3" class="counter-select"></select>

    <script>
        const brawlers = [
            "8-Bit", "Amber", "Angelo", "Ash", "Barley", "Bea", "Belle", "Berry", "Bibi", "Bo", "Bonnie", "Brock", "Bull", "Buster", "Buzz", "Buzz Lightyear", "Byron", "Carl", "Charlie", "Chester", "Chuck", "Clancy", "Colette", "Colt", "Cordelius", "Crow", "Darryl", "Doug", "Draco", "Dynamike", "Edgar", "El Primo", "Emz", "Eve", "Fang", "Finx", "Frank", "Gale", "Gene", "Gray", "Griff", "Grom", "Gus", "Hank", "Jacky", "Janet", "Jessie", "Juju", "Kenji", "Kit", "Larry & Lawrie", "Leon", "Lily", "Lola", "Lou", "Lumi", "Maisie", "Mandy", "Max", "Meeple", "Meg", "Melodie", "Mico", "Moe", "Mortis", "Mr. P", "Nani", "Nita", "Ollie", "Otis", "Pam", "Pearl", "Penny", "Piper", "Poco", "R-T", "Rico", "Rosa", "Ruffs", "Sam", "Sandy", "Shade", "Shelly", "Spike", "Sprout", "Squeak", "Stu", "Surge", "Tara", "Tick", "Willow"
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

        function popolaSelect(className) {
            let selectElements = document.querySelectorAll("." + className);
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

        function suggerisciCounter(index) {
            let squadra1 = document.querySelectorAll(".brawler-select");
            let counterSelect = document.querySelectorAll(".counter-select")[index];
            let brawlerSelezionato = squadra1[index].value;
            let counter = brawlers.filter(b => b !== brawlerSelezionato);
            counterSelect.innerHTML = "<option value=''>-- Seleziona un Counter --</option>";
            counter.forEach(brawler => {
                let option = document.createElement("option");
                option.value = brawler;
                option.textContent = brawler;
                counterSelect.appendChild(option);
            });
        }

        document.addEventListener("DOMContentLoaded", () => {
            popolaSelect("brawler-select");
            popolaSelect("counter-select");
            caricaMappe();
        });
    </script>
</body>
</html>
