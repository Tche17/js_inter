
// Fonction qui prend une fonction de rappel en paramètre
function saluer(callback) {

    console.log("Bonjour !");

    tempsReponse ( function () {

        console.log("Bonjour, désolé je dois y aller")

        // Appeler la fonction de rappel
        callback();

    }, 10000 )

}

// Fonction de rappel
function direAuRevoir() {
    console.log("Au revoir !");
}

// Appel de la fonction avec la fonction de rappel
saluer(direAuRevoir);
