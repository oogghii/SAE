connectContainer = document.getElementById('connect-container');
accountContainer = document.getElementById('account-container');
enqueteContainer = document.getElementById('enquete-container');
analyseContainer = document.getElementById('analyse-container');

document.addEventListener('DOMContentLoaded', () => {
    const connexionStatus = localStorage.getItem('connexionStatus');

    connectButton(connexionStatus);
    analyseButton(connexionStatus);
});

function connectButton(connexionStatus){
    if (connexionStatus === null) {
        connectContainer.classList.remove('hidden');
        accountContainer.classList.add('hidden');
    }
    else {
        connectContainer.classList.add('hidden');
        accountContainer.classList.remove('hidden');
    }
}

function analyseButton(connexionStatus){
    if (connexionStatus === 'admin') {
        enqueteContainer.classList.add('hidden');
        analyseContainer.classList.remove('hidden');
    }
    else {
        enqueteContainer.classList.remove('hidden');
        analyseContainer.classList.add('hidden');
    }
}