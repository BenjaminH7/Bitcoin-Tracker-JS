const url = "https://blockchain.info/ticker";


// créer une requête
let requete = new XMLHttpRequest(); // créer un objet


requete.open('GET', url); // premier paramètre GET / POST , deuxième param : url

requete.responseType = 'json'; // nous attendons du json


requete.send(); // nous envoyons notre requête


let requestPrice = () => {
    requete.onload = function () {
        if(requete.readyState === XMLHttpRequest.DONE){
            if(requete.status === 200){
                let response = requete.response; // on stock la réponse
    
                let priceInEur = response.CHF.last;
                document.querySelector('#price_label').textContent = priceInEur;
            }
            else{
                console.log("Un problème est survenu");
            }
        }
    }
    console.log("Prix actualisé")

}
requestPrice();
setInterval(requestPrice, 1000);