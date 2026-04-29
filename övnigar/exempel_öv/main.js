/*const dc = document.getElementById("favorite")
//dc.textContent = "the flash"

//dc.innerHTML = "<strong> The flash </strong>"

//dc.innerHTML = "<em> the flash</em>",dc.style.color="red"
//dc.className = "ny"

const superhero = document.getElementById("super-heroes") 
const nrAvHero = superhero.children.length//hur många det finns 
const förstaHero = superhero.children[0].textContent//den första i listan
const sistaHero = superhero.children[8].textContent//ett sätt att hämta den sista i listan 
const sistaHero2 = superhero.children[nrAvHero-1].textContent//andra sättet 


const nummberOfHero = dc.parentElement.children.length
//detta är ett sätt att #favorite sen gå upp till parent och sen kolla ner på alla barn för att räkna de 

const heroBefore  = dc.previousElementSibling.textContent//detta hämtar elemntet innan det som finns i #favorite
const heroAfter = dc.nextElementSibling.textContent// detta hämtar det som finns efter #favorite, textcontent finns med för att hämta endast det som finns innut i och inte hela stycket
*/

//lägga till element 
/*
const nyHjälte = document.getElementById("super-heroes")
const nyHjälteLi = document.createElement("li")
const heroNaem = document.createTextNode("Ant-man")
nyHjälteLi.appendChild(heroNaem)
nyHjälte.setAttribute("class","marvel")
nyHjälte.appendChild(nyHjälteLi)
*/

//ta bort ett element 
/*
const fav = document.getElementById("favorite")
fav.remove()
*/

//inline i html 
/*
function sayhello(){
    alert("hello world!")
}*/

//eventhandler i js genom en definerad funktion  
/*
function sayhello(){
    alert("hello world!")
}
const hellobtn = document.getElementById("hello-btn")
hellobtn.onclick=sayhello
*/

//eventhandler i js genom en anonym funktion
/*
const helo= document.getElementById("hello-btn")
helo.onclick = function(){
    alert("hello world 2 ")
}
*/

//eventlistener med en definerad funktion
/* 
const btn = document.getElementById("hello-btn")

function btnhello(){
    alert("hej")
}
btn.addEventListener("click",btnhello,false)
*/

// eventlistener med en anonym funktion 
/*
const btn = document.getElementById("hello-btn")
btn.addEventListener("click",function(){alert("hello world")},false)
*/