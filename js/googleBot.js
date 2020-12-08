"use strict"
// ALL VARIABLES DES PHRASES
let blague = ["Qu’est-ce qu’un nem avec des écouteurs ? Un NemP3…",
    "Quelle différence y a-t-il entre Windows et un clou ? Aucune : tous deux sont destinés à se planter.",
    "Un geek ne crie pas. Il URL.",
    "Un aveugle rentre dans un bar, puis dans une chaise, une table, puis dans une table ...",
    "Quel est le point commun entre un community manager et une araignée ? Ils passent du temps sur la toile.",];

let reponseQuestionDuJour = new Date()

let questionReponse = ["Un age infinement petit (Je suis pas si vieux hein ?!).",
    "Je pense que j'ai vu le jour suite à une soudaine inspiration durant une longue et féconde promenade.",
    "Aucun resultat trouver. Va voir ma bliblihotèque de phrase dans l'onglet plus haut"];

let historique = []




// RECUPERER ENTRER FORM //
let phraseEcriteForm;




// TRAITEMENT CONDITION //
let chiffreChoisi;




// RECUP ENTRER SORTIE ET REPONSES //
/**
 * Récuperer les entrer du formulaire
 *
 * @author HE202000
 * @this (recupEntrerForm)
 * @param (form)
 * @return false
 * */
function recupEntrerForm(form) {
    phraseEcriteForm = form.phraseValeur.value;
    historique.push(form.phraseValeur.value)
    if (phraseEcriteForm === "Fait moi une blague") {
        selectionBlague()
    }
    else if (phraseEcriteForm === "Quelque info sur aujourd'hui ?") {
        document.getElementById("affichageResultat").innerText = reponseQuestionDuJour
    }
    else if (phraseEcriteForm === "Quelle âge as-tu ?") {
        document.getElementById("affichageResultat").innerText = questionReponse[0];
    }
    else if (phraseEcriteForm === "D'où viens tu ?") {
        document.getElementById("affichageResultat").innerText = questionReponse[1];
    }
    else {
        document.getElementById("affichageResultat").innerText = questionReponse[2];
    }
    return false
}




// AFFICHER HISTORIQUE //
function afficherHisto(){
    let listeEmplacement = document.getElementById("histo");
    listeEmplacement.innerHTML = "";
    for(let i = 0; i < historique.length; i++){
        listeEmplacement.innerHTML += "<li>" + historique[i] + "</li>";
    }
}




// FAIT UNE BLAGUE //
/**
 * Récuperer les entrer du formulaire
 *
 * @author HE202000
 * @this (getRandomInt)
 * @param (max)
 * @return opération mathématique
 * */
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function selectionBlague() {
    const chiffreChoisi = getRandomInt(5);
    const affichageResultat = document.getElementById("affichageResultat");

    // on vérifie que affichageResultat a bien quelque chose et que chiffreChoisi ne dépassera pas le tableau //
    if (affichageResultat && chiffreChoisi < blague.length) {
        affichageResultat.innerHTML = blague[chiffreChoisi];
    }
    // VERIF DE L'ALEATOIRE //
    console.log(chiffreChoisi)
}