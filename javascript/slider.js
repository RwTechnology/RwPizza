// slider for banner (manual);

const slide = document.querySelector('#slide').children;
let longueur = slide.length;
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
let i=0;


next.addEventListener('click', () => {
    nextContenuSlide();
});

prev.addEventListener('click', () => {
    prevContenuSlide();
});


   const nextContenuSlide=()=>
   {
       if(i == longueur - 1)
       {
           i=0;
       }
       else{
           i++
       }
       changeContenuSlide();
   }

   const prevContenuSlide=()=>
   {
    if (i == 0) {
        i = longueur - 1;
    }
    else
    {
       i--; 
    }   

       changeContenuSlide();
   }
   
   const changeContenuSlide=()=>
   {
    for (let cpt = 0; cpt < longueur; cpt++) {
        slide[cpt].style.display = "none";
    }
    slide[i].style.display = "flex";
   }



// slider for banner (auto);

   const sliderAuto=()=>
   {
    nextContenuSlide();
   } 

  const timer=setInterval(sliderAuto,4000);

