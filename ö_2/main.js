let form = document.getElementById("apply-for-pet");
let pets = document.getElementById("pets")

// Den funktion som ska köras när användaren skickar formuläret
function onSubmit(event) {
    // Denna metod gör att formuläret inte skickar användaren
    // vidare till en ny sida och vi kan därmed styra allt själva
    event.preventDefault();
    namn = this.elements.firstname.value
    efterNamn = this.elements.lastname.value
    ålder = this.elements.age.value
    email = this.elements.email.value
    console.log("namn: " + namn)
    console.log("efternamn: "+ efterNamn)
    console.log("age: " + ålder)
    console.log("email: " + email)

    valtDjur=this.elements.pet.value
    console.log(valtDjur)

    dagar = this.elements.day
    listaPåDagarna=[]
    for (dag of dagar)
        
        if (dag.checked){
            listaPåDagarna.push(dag.value)
        }
            console.log(listaPåDagarna)
    

    
    

    

    // Om vi manuellt sett vill skicka användaren vidare,
    // t.ex. efter vi kontrollerat att allt stämmer, 
    // så skriver vi följande
    // this.submit();
}

// Lägg till en event-lyssnar på "submit"
form.addEventListener("submit", onSubmit);