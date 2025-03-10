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
        <option value="KO">KO</option>
        <option value="Rapina">Rapina</option>
        <option value="Arraffagemme">Arraffagemme</option>
        <option value="Footbrawl">Footbrawl</option>
        <option value="Hockeybrawl">Hockeybrawl</option>
    </select>

    <label for="mappa">Seleziona la mappa:</label>
    <select id="mappa"></select>

    <h2>Squadra 1</h2>
    <select class="brawler-select" onchange="suggerisciCounter(0)"></select>
    <select class="brawler-select" onchange="suggerisciCounter(1)"></select>
    <select class="brawler-select" onchange="suggerisciCounter(2)"></select>

    <h2>Squadra 2 (Counter suggeriti)</h2>
    <select class="counter-select"></select>
    <select class="counter-select"></select>
    <select class="counter-select"></select>

    <script>
        const brawlers = [
            "8-Bit", "Amber", "Angelo", "Ash", "Barley", "Bea", "Belle", "Berry", "Bibi", "Bo", "Bonnie", "Brock", "Bull", "Buster", "Buzz", "Buzz Lightyear", "Byron", "Carl", "Charlie", "Chester", "Chuck", "Clancy", "Colette", "Colt", "Cordelius", "Crow", "Darryl", "Doug", "Draco", "Dynamike", "Edgar", "El Primo", "Emz", "Eve", "Fang", "Finx", "Frank", "Gale", "Gene", "Gray", "Griff", "Grom", "Gus", "Hank", "Jacky", "Janet", "Jessie", "Juju", "Kenji", "Kit", "Larry & Lawrie", "Leon", "Lily", "Lola", "Lou", "Lumi", "Maisie", "Mandy", "Max", "Meeple", "Meg", "Melodie", "Mico", "Moe", "Mortis", "Mr. P", "Nani", "Nita", "Ollie", "Otis", "Pam", "Pearl", "Penny", "Piper", "Poco", "R-T", "Rico", "Rosa", "Ruffs", "Sam", "Sandy", "Shade", "Shelly", "Spike", "Sprout", "Squeak", "Stu", "Surge", "Tara", "Tick", "Willow"
        ];

        const mappePerModalita = {
            "KO": ["Mappa 1", "Mappa 2"],
            "Rapina": ["Mappa 3", "Mappa 4"],
            "Arraffagemme": ["Mappa 5", "Mappa 6"],
            "Footbrawl": ["Mappa 7", "Mappa 8"],
            "Hockeybrawl": ["Mappa 9", "Mappa 10"]
        };

        function caricaMappe() {
            let modalita = document.getElementById("modalita").value;
            let mappaSelect = document.getElementById("mappa");
            mappaSelect.innerHTML = "";
            mappePerModalita[modalita].forEach(mappa => {
                let option = document.createElement("option");
                option.value = mappa;
                option.textContent = mappa;
                mappaSelect.appendChild(option);
            });
        }

        function popolaSelect(className) {
            let selectElements = document.querySelectorAll("." + className);
            selectElements.forEach(select => {
                select.innerHTML = "";
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
            counterSelect.innerHTML = "";
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
