document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.form-connexion');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const radioCoche = document.querySelector('input[name="type_connexion"]:checked');

        if (radioCoche) {
            const valeurStatus = radioCoche.id;

            localStorage.setItem('connexionStatus', valeurStatus);

            console.log(valeurStatus);

            window.location.href = 'index.html'; 
        }
    });
});