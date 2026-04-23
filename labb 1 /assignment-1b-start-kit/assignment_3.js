/*
    `toggleNextElement` har som uppgift att visa eller dölja ett elements
    kommande syskon. I vårt fall när vi klickar på en rubrik (h2) ska det
    nästkommande syskonet (section) visas eller döljas.
*/

function toggleNextElement(e) {
    // 1. Leta upp det nästkommande element-syskonet
    const nästaElement = e.target.nextElementSibling;
    // 2. Kontrollera om element visas eller döljs
    if (nästaElement.style.display==="block")
        nästaElement.style.display = "none"
    else
        nästaElement.style.display = "block"

    // 3.a. Om elementet är dolt - visa det
    
    // 3.b. Om elemenetet visas - dölj det
}

/*
    `start` har som uppgift att dölja allt innehåll för våra artiklar och
    ser till att funktionen `toggleNextElement` körs när en användare
    klickar på rubrikerna (h2)
*/
function start() {
    // 1. Hämta alla rubriker (h2) och spara dom i en variabel
    const allaH2 = document.querySelectorAll("h2")
    // 2. Loopa igenom alla dessa rubriker och:
    for( let h2 of allaH2){
        h2.nextElementSibling.style.display="none"
    // 2.a. Dölj allt innehåll (section) som ligger som det nästkommande
    //     syskonet till rubriken
    
    // 2.b. Lägg till en event-lyssnar för att ange att funktionen
    //     `toggleNextElement` ska köras när en användare klickar
    //     på en rubrik.
        h2.addEventListener("click",toggleNextElement)
    }
}

// Kör våran `start` funktion
start();