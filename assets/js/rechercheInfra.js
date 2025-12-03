const searchInput = document.getElementById("search-input");
const searchResults    = document.getElementById("search-results");
const searchContainer  = document.getElementById("search-container");

const data = [
    "Auquainville",
    "Belle-Vie-en-Auge",
    "Bellou",
    "Beuvillers",
    "Biéville-Quétiéville",
    "Bissières",
    "Boissey",
    "Bretteville sur Dives",
    "Cambremer",
    "Castillon-en-Auge",
    "Cerqueux",
    "Cernay",
    "Cheffreville-Tonnencourt",
    "Coquainvilliers",
    "Cordebugle",
    "Coupesarte",
    "Courtonne-la-Meurdrac",
    "Courtonne-les-Deux-Églises",
    "Crévecoeur-en-Auge",
    "Croissanville",
    "Familly",
    "Fauguernon",
    "Fervaques",
    "Firfol",
    "Fumichon",
    "Glos",
    "Grandchamp-le-Château",
    "Hermival-les-Vaux",
    "Heurtevent",
    "Hiéville",
    "L’Hôtellerie",
    "L’Oudon",
    "La Boissière",
    "La Brévière",
    "La Chapelle-Haute-Grue",
    "La Chapelle-Yvon",
    "La Croupte",
    "La Folletière-Abenon",
    "La Houblonnière",
    "La Vespière-Friardel",
    "Le Mesnil-Bacley",
    "Le Mesnil-Durand",
    "Le Mesnil-Eudes",
    "Le Mesnil-Germain",
    "Le Mesnil-Guillaume",
    "Le Mesnil-Mauger",
    "Le Mesnil-Simon",
    "Le Pin",
    "Le Pré-d’Auge",
    "Lécaude",
    "Les Autels-Saint-Bazile",
    "Les Authieux-Papion",
    "Les Monceaux",
    "Les Moutiers-Hubert",
    "Lessard-et-le-Chêne",
    "Lisieux",
    "Lisores",
    "Livarot",
    "Livarot-Pays d’Auge",
    "Magny-la-Campagne",
    "Magny-le-Freule",
    "Marolles",
    "Méry-Bissières-en-Auge",
    "Méry-Corbon",
    "Mézidon Vallée d’Auge",
    "Mézidon-Canon",
    "Meulles",
    "Mittois",
    "Monteille",
    "Montreuil-en-Auge",
    "Montviette",
    "Moyaux",
    "Notre-Dame-d’Estrées-Corbon",
    "Notre-Dame-de-Courson",
    "Notre-Dame-de-Livaye",
    "Orbec",
    "Ouilly-du-Houley",
    "Ouilly-le-Vicomte",
    "Ouville-la-Bien-Tournée",
    "Percy-en-Auge",
    "Préaux-Saint-Sébastien",
    "Prêtreville",
    "Rocques",
    "Saint-Cyr-du-Ronceray",
    "Saint-Denis-de-Mailloc",
    "Saint-Désir",
    "Saint-Georges-en-Auge",
    "Saint-Germain-de-Livet",
    "Saint-Germain-de-Montgommery",
    "Saint-Jean-de-Livet",
    "Saint-Julien-de-Mailloc",
    "Saint-Julien-le-Faucon",
    "Saint-Loup-de-Fribois",
    "Saint-Martin-de-Bienfaite-la-Cressonnière",
    "Saint-Martin-de-la-Lieue",
    "Saint-Martin-de-Mailloc",
    "Saint-Martin-du-Mesnil-Oury",
    "Saint-Michel-de-Livet",
    "Saint-Ouen-le-Houx",
    "Saint-Ouen-le-Pin",
    "Saint-Pierre-de-Mailloc",
    "Saint-Pierre-des-Ifs",
    "Saint-Pierre-en-Auge",
    "Saint-Pierre-sur-Dives",
    "Sainte-Foy-de-Montgommery",
    "Sainte-Marguerite-de-Viette",
    "Sainte-Marguerite-des-Loges",
    "Thiéville",
    "Tordouet",
    "Tortisambert",
    "Val-de-Vie",
    "Valorbiquet",
    "Vaudeloges",
    "Vieux-Fumé",
    "Vieux-Pont-en-Auge"
]

function showResults() {
    searchResults.classList.remove("opacity-0", "scale-95", "translate-y-1", "pointer-events-none");
}

function hideResults() {
    searchResults.classList.add("opacity-0", "scale-95", "translate-y-1", "pointer-events-none");
}

searchInput.addEventListener("input", (e) => {

    const value = e.target.value.toLowerCase().trim();

    searchResults.innerHTML = "";

    if (value === "") {
        hideResults();
        return;
    }

    const filteredData = data.filter(item => 
        item.toLowerCase().includes(value)
    );

    if (filteredData.length > 0) {
        filteredData.forEach(item => {
            const div = document.createElement("div");
            div.className = "p-2 cursor-pointer hover:bg-gray-100 transition-colors";
            div.textContent = item;
            
            div.addEventListener("click", () => {
                searchInput.value = item;
                hideResults();
            });

            searchResults.appendChild(div);
        });
        showResults();
    } else {
        const noResult = document.createElement("div");
        noResult.className = "p-2 text-gray-500 text-sm";
        noResult.textContent = "Aucun résultat trouvé.";
        searchResults.appendChild(noResult);
        showResults();
    }
});

document.addEventListener("click", (e) => {
    if (!searchContainer.contains(e.target)) hideResults();
});

searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Escape") hideResults();
});