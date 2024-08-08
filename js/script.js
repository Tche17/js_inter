const btn = document.querySelector('button')

//1ere méthode

// btn.onclick = function(){
//     alert('Clique sur le bouton')
// }

//2eme méthode

// btn.addEventListener('click', function(){
//     alert('Clique sur le bouton "OK" ')
// }) 

//3eme méthode
// btn.addEventListener('click',foo)

// function foo(){
//     console.log("Hello Wooorlllddd")
//     alert("hello el mundo")
//     btn.removeEventListener('click',foo) // Annuler la commande du Boutton 
// }

//4eme méthode
// btn.addEventListener('click', function(e){
//     e.stopPropagation(); //permet de stopper une propagation
//     alert("Even Button")
//     console.log("Even Button")
// } )

// document.body.addEventListener('click', function(e){
//     alert("Even Body")
//     console.log("Event Body")
// })

//5eme methode
const from = document.querySelector('form')
const input = document.querySelector('#input')
const display = document.querySelector('#display')
from.addEventListener('submit', function(e){
    e.preventDefault();
    display.textContent = input.value
})

