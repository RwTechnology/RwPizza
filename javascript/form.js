// validation formulaire
const formulaire = document.querySelector('form');
const nomComplet = document.querySelector('#nom');
const email = document.querySelector("#email");
const motif = document.querySelector('#motif');
const message = document.querySelector('#message');

const nomCompletP = document.querySelector('.nomCompletP');
const emailP = document.querySelector(".emailP");
const motifP = document.querySelector('.motifP');
const messageP = document.querySelector('.messageP');

formulaire.addEventListener('submit', (e) => {
    e.preventDefault();

    if (nomComplet.value == "" && email.value == "" && motif.value == "" && message.value == "") {
        nomCompletP.textContent = "veillez remplir tous les champs";
        emailP.textContent = "veillez remplir tous les champs";
        motifP.textContent = "veillez remplir tous les champs";
        messageP.textContent = "veillez remplir tous les champs";
    }
    else if (nomComplet.value == "") {
        nomCompletP.textContent = "veillez remplir tous les champs";
    }
    else if (email.value == "") {
        emailP.textContent = "veillez remplir tous les champs";
    }
    else if (motif.value == "") {
        motifP.textContent = "veillez remplir tous les champs";
    }
    else if (message.value == "") {
        messageP.textContent = "veillez remplir tous les champs";
    }
    else {
              alert("message envoyé")
    }

}
);
