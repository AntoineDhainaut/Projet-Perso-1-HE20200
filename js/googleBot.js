"use strict"
// RECUPERER ENTRER FORM //
let phraseEcriteForm;

function recupEntrerForm(form) {
    phraseEcriteForm = form.phraseValeur.value;
    if (phraseEcriteForm = conditionBlague) {
        selectionBlague()
    }
    return false
}
// TRAITEMENT CONDITION //
let conditionBlague = "Fait moi une blague"
let chiffreChoisi;


// ALL VARIABLES DES PHRASES
let blague = ["Qu’est-ce qu’un nem avec des écouteurs ? Un NemP3…",
    "Quelle différence y a-t-il entre Windows et un clou ? Aucune : tous deux sont destinés à se planter.",
    "Un geek ne crie pas. Il URL.",
    "Un aveugle rentre dans un bar, puis dans une chaise, une table, puis dans une table ...",
    "Quel est le point commun entre un community manager et une araignée ? Ils passent du temps sur la toile.",];
let reponseQuestionDuJour = new Date()

// TRAITEMENT ENTRER FORM //
//if (phraseEcriteForm = conditionBlague) {
  //  selectionBlague()
//}


// FAIT UNE BLAGUE //

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