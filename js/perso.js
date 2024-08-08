
let btn = document.querySelector('.btn')
let liste = document.querySelector('.liste')

btn.addEventListener('click', () => {

    fetch('https://jsonplaceholder.typicode.com/posts')

        .then(response => response.json())
        .then(data => {
            // console.log(data)
            
            data.forEach(element => {

                let newLi = document.createElement('li');
                let newCard = document.createElement('h2');
                let newBodyCard = document.createElement('p')

                newCard.innerText = element.title
                newBodyCard.innerText = element.body

                newLi.appendChild(newCard);
                newLi.appendChild(newBodyCard);
                liste.appendChild(newLi);

            });

        }) .catch (error =>(
            console.error("Erreur")
        ))

})




