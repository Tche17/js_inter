const liste = document.querySelector('.liste');
const btn = document.querySelector('.btn');

btn.addEventListener('click',() =>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then (response => response.json()) // convertir les données en Objet
    .then(dataJson => {

        dataJson.forEach(element => {
            let newLi = document.createElement('li')
            let NewTitreCarteH1 = document.createElement('h2')
            let newCorpsCarte = document.createElement('p')
            NewTitreCarteH1.innerText=element.title;
            newCorpsCarte.innerText= element.body;
            newLi.appendChild(NewTitreCarteH1);
            newLi.appendChild(newCorpsCarte);
            liste.appendChild(newLi);
        })

    }).catch(error =>{
        //Afficher message d'erreur dans la console
        console.error('Erreur:', error);
    })
} )