iframeMairie = document.getElementById('mairie');
iframeAdministre = document.getElementById('administre');

document.addEventListener('DOMContentLoaded', () => {
    const connexionStatus = localStorage.getItem('connexionStatus');

    console.log(connexionStatus);
    formulaire(connexionStatus);
});

function formulaire(connexionStatus){
    if(connexionStatus === 'administre'){
        iframeMairie.classList.add('hidden');
        iframeAdministre.classList.remove('hidden');
    }
    else if(connexionStatus === 'elu'){
        iframeMairie.classList.remove('hidden');
        iframeAdministre.classList.add('hidden');
    }
}