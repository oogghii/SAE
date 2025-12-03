const disconnectButton = document.querySelector('disconnect-button');

function disconnect(){
    console.log(localStorage.getItem('connexionStatus'));
    localStorage.removeItem('connexionStatus');
    
    window.location.href = 'index.html';
}