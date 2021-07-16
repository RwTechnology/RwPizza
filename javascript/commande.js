const formulaireOne = document.querySelector('#formulaireOne');
const radioCategorie = document.querySelectorAll('.choixCategorie input');
const selects = document.querySelectorAll('select');
const image = document.querySelector('.pizzaSelect img')
const p = document.querySelector('.pizzaSelect p')
const nomPizza = document.querySelector('.nomPizza')
const PrixPizza = document.querySelector('.PrixPizza')
const saisie = document.querySelectorAll('#saisie');
const erreur = document.querySelectorAll('.erreur');
const somme = document.querySelector('#somme');
const formulaireTwo = document.querySelector('#formulaireTwo');
const livraison = document.querySelectorAll('#livraison');

let categorie = "";
let montantCommandeTotal = 0.0;
let retrait = "";
let vretrait = "";
let liv = "";
let vliv = "";
let moncash = "";
let vmoncash = "";
let carteCredit = "";
let vcarteCredit = "";

const radioLivraisonRetrait = document.querySelectorAll('.LivraisonRetrait input');
const infoSup = document.querySelectorAll('#infoSup');

// choix de categorie
radioCategorie.forEach(elem => {

    elem.addEventListener('change', () => {

        initialiserChoixCategorie();

        desactiverErreur();

        if (elem.value == 'VIP') {
            categorie = "VIP";
            selects.forEach(element => {
                element.style.display = "none";
            });
            selects[0].style.display = "block";
            selects[0].addEventListener('change', () => {

                desactiverErreur();

                if (selects[0].value == "La Margherita") {
                    p.style.display = "block";
                    image.src = "image/banner/pizza-1.png";
                    nomPizza.textContent = "La Margherita :";
                    PrixPizza.textContent = "25.5";

                }
                else if (selects[0].value == "La Quatre fromages") {
                    p.style.display = "block";
                    image.src = "image/banner/pizza-5.png";
                    nomPizza.textContent = "La Quatre fromages :";
                    PrixPizza.textContent = "20.5";
                }
                else if (selects[0].value == "L'Hawaienne") {
                    p.style.display = "block";
                    image.src = "image/banner/pizza-10.png";
                    nomPizza.textContent = "L'Hawaienne :";
                    PrixPizza.textContent = "19.5";
                }
            });
        }
        else
            if (elem.value == 'MOYEN') {
                categorie = "MOYEN";
                selects.forEach(element => {
                    element.style.display = "none";
                });
                selects[1].style.display = "block";
                selects[1].addEventListener('change', () => {
                    if (selects[1].value == "La Capricciosa") {
                        p.style.display = "block";
                        image.src = "image/banner/pizza-9.png";
                        nomPizza.textContent = "La Capricciosa :";
                        PrixPizza.textContent = "16.5";

                    }
                    else if (selects[1].value == "La Diavola") {
                        p.style.display = "block";
                        image.src = "image/banner/pizza-2.png";
                        nomPizza.textContent = "La Diavola :";
                        PrixPizza.textContent = "15.5";
                    }
                    else if (selects[1].value == "La Romaine") {
                        p.style.display = "block";
                        image.src = "image/banner/pizza-10.png";
                        nomPizza.textContent = "La Romaine :";
                        PrixPizza.textContent = "14.5";
                    }
                });
            }
            else {
                categorie = "NORMAL";
                selects.forEach(element => {
                    element.style.display = "none";
                });
                selects[2].style.display = "block";
                selects[2].addEventListener('change', () => {
                    if (selects[2].value == "La deep dish pizza") {
                        p.style.display = "block";
                        image.src = "image/banner/pizza-5.png";
                        nomPizza.textContent = "La deep dish pizza :";
                        PrixPizza.textContent = "10.5";

                    }
                    else if (selects[2].value == "La pizza au saumon fumé") {
                        p.style.display = "block";
                        image.src = "image/banner/pizza-9.png";
                        nomPizza.textContent = "La pizza au saumon fumé :";
                        PrixPizza.textContent = "10.5";
                    }
                    else if (selects[2].value == "La chevre miel") {
                        p.style.display = "block";
                        image.src = "image/banner/pizza-1.png";
                        nomPizza.textContent = "La chevre miel :";
                        PrixPizza.textContent = "7.5";
                    }
                });
            }
    })
});

//choix dans les information suplementaire du commande

radioLivraisonRetrait.forEach(elem => {
    elem.addEventListener('change', () => {
        if (elem.value == 'LIVRASON') {
            infoSup[0].style.display = "block";
            retrait = "";
            vretrait = "";
            liv = "LIVRASON";
            desactiverErreur();
        }
        else
            if (elem.value == 'Moncash') {
                infoSup[1].style.display = "block";
                infoSup[2].style.display = "none";
                moncash = "Moncash";
                carteCredit = "";
                desactiverErreur();
            }
            else
                if (elem.value == 'Carte credit') {
                    infoSup[1].style.display = "none";
                    infoSup[2].style.display = "block";
                    moncash = "";
                    carteCredit = "Carte credit";
                    desactiverErreur();
                }
                else {
                    infoSup[0].style.display = "none";
                    retrait = "RETRAIT";
                    liv = "";
                    vretrait = "valide";
                    desactiverErreur();
                }
    })
});


//quand on est entrain de saisit dans le champ text en question

saisie.forEach(element => {
    element.addEventListener('input', () => {
        desactiverErreur();
    })
});



//---------------------------------------------------------
formulaireOne.addEventListener('submit', (e) => {
    e.preventDefault();
    if (categorie == "") {
        erreur[0].textContent = "choisissez une categorie";
    }
    else
        if (saisie[0].value == "") {
            erreur[1].textContent = "saisissez une quantite";
        }
        else
            if (nomPizza.textContent == "" && PrixPizza.textContent == "") {
                erreur[0].textContent = "selectionnez un pizza";
            }
            else {
                montantCommandeTotal += montantCommande(
                    parseFloat(PrixPizza.textContent), parseFloat(saisie[0].value)

                );
                somme.textContent = montantCommandeTotal;
                desactiverErreur();
            }
})

const initialiserChoixCategorie = () => {
    p.style.display = "none";
    image.src = "";
    nomPizza.textContent = "";
    PrixPizza.textContent = "";
}

const desactiverErreur = () => {
    erreur.forEach(element => {
        element.textContent = ""
    });
}
// fonction faisant le calcul du montant commande
const montantCommande = (prix, qte) => prix * qte;

//-----------------------------------------------------------
formulaireTwo.addEventListener('submit', (e) => {
    e.preventDefault();

    if (somme.textContent == "00.00") {
        erreur[2].textContent = "Placez une commande SVP";
    }
    else 
        if (retrait == "" && liv == "") {
            erreur[12].textContent = "choisissez retrait ou livraison";
    }
    else if (vliv == "" && vretrait == "") {
        if (infoSup[0].style.display == "block") {
            if (saisie[1].value == "") {
                erreur[3].textContent = "Remplir ce champ SVP";
            }
            else if (saisie[2].value == "") {
                erreur[4].textContent = "Remplir ce champ SVP";
            }
            else if (saisie[3].value == "") {
                erreur[5].textContent = "Remplir ce champ SVP";
            }
            else {
                vliv = "valide";
            }
        }
    }
    else if (moncash == "" && carteCredit == "") {
        
            erreur[12].textContent = "choisissez un mode de paiement";
        }
    else if(vmoncash == "" && vcarteCredit == "")
    {
        
            if (infoSup[1].style.display == "block") {
                if (saisie[4].value == "") {
                    erreur[6].textContent = "Remplir ce champ SVP";
                }
                else if (saisie[5].value == "") {
                    erreur[7].textContent = "Remplir ce champ SVP";
                }
                else if (saisie[6].value == "") {
                    erreur[8].textContent = "Remplir ce champ SVP";
                }
                else {
                    vmoncash = "valide";
                }
            }
            else if (infoSup[2].style.display == "block") {

                saisie[4].value = "";
                saisie[5].value = "";
                saisie[6].value = "";

                if (saisie[7].value == "") {
                    erreur[9].textContent = "Remplir ce champ SVP";
                }
                else
                    if (saisie[8].value == "") {
                        erreur[10].textContent = "Remplir ce champ SVP";
                    }
                    else
                        if (saisie[9].value == "") {
                            erreur[11].textContent = "Remplir ce champ SVP";
                        }
                        else {
                            vcarteCredit = "valide";
                        }
            }
    }

    else {
        
        localStorage.setItem('montant total',montantCommandeTotal);
        location.href = "index.html";
    }


});
formulaireTwo.addEventListener('reset', () => {
    desactiverErreur();
     categorie = "";
 montantCommandeTotal = 0.0;
 retrait = "";
 vretrait = "";
 liv = "";
 vliv = "";
 moncash = "";
 vmoncash = "";
 carteCredit = "";
 vcarteCredit = "";
 somme.textContent ="00.00";

 saisie.forEach(element => {
    element.value="";
});

selects.forEach(element => {
    element.style.display = "none";
});

infoSup.forEach(element => {
    element.style.display = "none";
});

});


