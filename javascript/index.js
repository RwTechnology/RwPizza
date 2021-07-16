// -------------------------------------------- 
if(localStorage.getItem('montant total')!=null)
{
  const montantIndex=document.querySelector('#montantIndex');
montantIndex.textContent=localStorage.getItem('montant total');  
}

//--------------------------------------------------------------

//menuSpecial evenement des boutons categories
const menuSpecial= document.querySelectorAll('.galleryCategies .categories ul li button');
const gallery=document.querySelectorAll('#gallery');
const list=document.querySelectorAll('.galleryCategies .categories ul li');

menuSpecial.forEach(elem=>{
    elem.addEventListener('click', () => {
     
        if(elem.id=='VIPBtn')
        {
            list.forEach(element => {
                element.style.background='none'; 
             });
             list[0].style.background='#fde284';


            gallery.forEach(element => {
               element.style.display='none'; 
            });
            gallery[0].style.display='block'; 

        }
        else if(elem.id=='MOYENBtn')
        { 
            list.forEach(element => {
                element.style.background='none'; 
             });
             list[1].style.background='#fde284';

             gallery.forEach(element => {
                element.style.display='none'; 
             });
             gallery[1].style.display='block'; 
        }
        else if(elem.id=='NORMALBtn')
        {
            list.forEach(element => {
                element.style.background='none'; 
             });
             list[2].style.background='#fde284';

             gallery.forEach(element => {
                element.style.display='none'; 
             });
             gallery[2].style.display='block'; 
 
        }

    });
    }
    );


// valider le formulaire abonne 

const form=document.querySelector('.abonne form');
const mailAbonne=document.querySelector('.abonne form #mailAbonne');
const abonne=document.querySelector('#abonne');


form.addEventListener('submit',(e)=>
{
    e.preventDefault();

    if (mailAbonne.value == "") {
        abonne.style.display="block"
    }
    else
    {
        alert("vous êtes abonné");
    }

})



