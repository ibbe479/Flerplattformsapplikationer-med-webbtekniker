const items = document.getElementById("items");
const addNew = document.getElementById("add-item");

function läggTillNytt() {
    const svar = window.prompt("Vad vill du lägga till?");
    
    const newLi = document.createElement("li");
    const deleteBtn = document.createElement("span");
    
    deleteBtn.textContent = " Delete";
    newLi.textContent= svar;

    newLi.appendChild(deleteBtn);        
    deleteBtn.onclick = function() {
        newLi.remove(); 
    };
    items.appendChild(newLi);
    
}

addNew.onclick = läggTillNytt;