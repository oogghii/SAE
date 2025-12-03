<!-- Chart.js via CDN -->

    // ======== Données communes =========
    const labels = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi"];
    const dataValues = [12, 19, 3, 5, 8];

    // Palette de couleurs
    const colors = [
    "rgba(59, 130, 246, 0.7)",
    "rgba(16, 185, 129, 0.7)",
    "rgba(245, 158, 11, 0.7)",
    "rgba(239, 68, 68, 0.7)",
    "rgba(139, 92, 246, 0.7)"
    ];

    // ======== 1. Bar chart (Histogramme) =========
    const ctx1 = document.getElementById("chart1");

    new Chart(ctx1, {
    type: "bar",
    data: {
    labels: labels,
    datasets: [{
    label: "Ventes",
    data: dataValues,
    backgroundColor: colors,
    borderWidth: 1
}]
},
    options: {
    responsive: true,
    plugins: {
    title: {
    display: true,
    text: "Histogramme"
}
},
    scales: {
    y: {
    beginAtZero: true
}
}
}
});

    // ======== 2. Line chart (Courbe) =========
    const ctx2 = document.getElementById("chart2");

    new Chart(ctx2, {
    type: "line",
    data: {
    labels: labels,
    datasets: [{
    label: "Température",
    data: [5, 9, 7, 11, 6],
    borderColor: "rgba(59, 130, 246, 1)",
    backgroundColor: "rgba(59, 130, 246, 0.2)",
    tension: 0.3,
    fill: true,
    pointRadius: 4
}]
},
    options: {
    responsive: true,
    plugins: {
    title: {
    display: true,
    text: "Courbe"
}
},
    scales: {
    y: {
    beginAtZero: true
}
}
}
});

    // ======== 3. Pie chart (Camembert) =========
    const ctx3 = document.getElementById("chart3");

    new Chart(ctx3, {
    type: "pie",
    data: {
    labels: ["Chrome", "Firefox", "Edge", "Safari", "Autres"],
    datasets: [{
    label: "Navigateurs",
    data: [55, 20, 10, 8, 7],
    backgroundColor: colors,
    hoverOffset: 8
}]
},
    options: {
    responsive: true,
    plugins: {
    title: {
    display: true,
    text: "Camembert"
}
}
}
});

    // ======== 4. Radar chart =========
    const ctx4 = document.getElementById("chart4");

    new Chart(ctx4, {
    type: "radar",
    data: {
    labels: ["Force", "Vitesse", "Endurance", "Magie", "Chance"],
    datasets: [{
    label: "Héros A",
    data: [8, 6, 7, 4, 9],
    backgroundColor: "rgba(16, 185, 129, 0.3)",
    borderColor: "rgba(16, 185, 129, 1)",
    pointBackgroundColor: "rgba(16, 185, 129, 1)"
}]
},
    options: {
    responsive: true,
    plugins: {
    title: {
    display: true,
    text: "Radar"
}
},
    scales: {
    r: {
    beginAtZero: true
}
}
}
});

