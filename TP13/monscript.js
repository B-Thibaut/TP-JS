
/* Toutes les variables */

let dateJour = new Date(Date.now());
let dateJourFr = dateJour.toLocaleDateString('fr-FR')
let text = document.querySelector("#myInput");
let btn = document.querySelector(".btn");
let liste = document.querySelector("ul");
let li = document.querySelector("#listeCourses li");

li.addEventListener('click', ()=>{
    li.classList.toggle("itemCheck");
})



/*TP15*/
document.querySelector("header h2").innerHTML = document.querySelector("header h2").innerHTML+": "+dateJourFr;


/* Tous les évènements */


btn.addEventListener('click', ()=>{
    addProduct()
})

/* Les fonctions */
// A voir plus tard


function addProduct(){
    let contenu = myInput.value;
    if (contenu == ""){
        alert('vide mon gars')
    }
    else{
        let container = document.querySelector("#listeCourses");
        let article = document.createElement("li");
        article.textContent = contenu;
        container.appendChild(article);

        /*li = document.querySelectorAll("#listeCourses li");*/
        article.addEventListener('click', ()=>{
            article.classList.toggle("itemCheck");
        })
        text.value="";
    }
    
}

