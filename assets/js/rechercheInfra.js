const searchInput      = document.getElementById("search-input");
const searchResults    = document.getElementById("search-results");
const searchContainer  = document.getElementById("search-container");

function showResults() {
    searchResults.classList.remove("opacity-0", "scale-95", "translate-y-1", "pointer-events-none");
}

function hideResults() {
    searchResults.classList.add("opacity-0", "scale-95", "translate-y-1", "pointer-events-none");
}

searchInput.addEventListener("input", () => {
    if (searchInput.value.trim() === "") {
        hideResults();
    } else {
        showResults();
    }
});

document.addEventListener("click", (e) => {
    if (!searchContainer.contains(e.target)) hideResults();
});

searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Escape") hideResults();
});