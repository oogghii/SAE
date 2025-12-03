connectButton = document.getElementById('connecting-button');
informationButton = document.getElementById('information-button');
manageButton = document.getElementById('manage-button');
enqueteButton = document.getElementById('enquete-button');

document.addEventListener('DOMContentLoaded', () => {
    const connexionStatus = localStorage.getItem('connexionStatus');

    console.log(connexionStatus);
    indexButton(connexionStatus);
});

function indexButton(connexionStatus){
    
    if (connexionStatus === null) {
        connectButton.classList.remove('hidden');
        informationButton.classList.add('hidden');
        manageButton.classList.add('hidden');
        enqueteButton.classList.add('hidden');
    }
    else if(connexionStatus === 'administre'){
        connectButton.classList.add('hidden');
        informationButton.classList.remove('hidden');
        manageButton.classList.add('hidden');
        enqueteButton.classList.remove('hidden');
    }
    else if(connexionStatus === 'elu') {
        connectButton.classList.add('hidden');
        informationButton.classList.add('hidden');
        manageButton.classList.add('hidden');
        enqueteButton.classList.remove('hidden');
    }
    else if(connexionStatus === 'administrateur') {
        connectButton.classList.add('hidden');
        informationButton.classList.remove('hidden');
        manageButton.classList.remove('hidden');
        enqueteButton.classList.add('hidden');
    }
}