<!-- Chart.js via CDN -->

    // ======== Données communes =========
    const labels = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi"];


    const labelsHist = ["Etudiant / Elève", "Employé / Ouvrier", "Cadre", "Commerçant / Artisan", "Retraité", "Sans Activité"]
    const dataValuesHist = [12, 19, 3, 5, 8, 1];

    const labelsCurve = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi"];
    const dataValuesCurve = [12, 19, 3, 5, 8, 1];

const labelsPie = ["-12 ans", "12 – 17 ans", "18 – 24 ans", "25 – 34 ans", "35 – 49 ans", "50 – 64 ans", "65 – 74 ans", "+75 ans"];
const dataValuesPie = [12, 19, 24, 5, 9, 8, 14,5];

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
    labels: labelsHist,
    datasets: [{
    label: "Catégorie socio-professionnelle ",
    data: dataValuesHist,
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
    labels: labelsCurve,
    datasets: [{
    label: "Usager des transports en fonction des jours de la semaine",
    data: dataValuesCurve,
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
    labels: labelsPie,
    datasets: [{
    label: "Tranches Âge",
    data: dataValuesPie,
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
const mobilityData = {
    labels: [
        "Marche",
        "Vélo",
        "Transports en commun",
        "Covoiturage",
        "Voiture individuelle",
        "Télétravail / À domicile"
    ],
    datasets: [{
        label: "Profil moyen des déplacements",
        data: [60, 25, 30, 20, 80, 10], // à adapter avec tes vraies données
        backgroundColor: "rgba(59, 130, 246, 0.3)",   // bleu semi-transparent
        borderColor: "rgba(59, 130, 246, 1)",         // contour bleu
        pointBackgroundColor: "rgba(59, 130, 246, 1)",
        pointRadius: 4,
        borderWidth: 2
    }]
};

const ctx4 = document.getElementById("chart4");

new Chart(ctx4, {
    type: "radar",
    data: mobilityData,
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: "Répartition des modes de déplacement (%)"
            },
            legend: {
                display: true
            }
        },
        scales: {
            r: {
                beginAtZero: true,
                suggestedMax: 100,
                ticks: {
                    stepSize: 20,
                    callback: (value) => value + "%"
                },
                pointLabels: {
                    font: {
                        size: 12
                    }
                }
            }
        }
    }
});

