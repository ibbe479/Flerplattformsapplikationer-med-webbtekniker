function printMovies(movies) {
    /*
        Todo: Skriv ut alla filmer i arrayen "movies". Varje film ska ha följande format:
        
        <li data-grade="5" data-title="Star Wars">
            Star Wars
            <img src="star.png" alt="Star">
            <img src="star.png" alt="Star">
            <img src="star.png" alt="Star">
            <img src="star.png" alt="Star">
            <img src="star.png" alt="Star">
            <img src="delete.png" alt="Delete movie" class="delete-movie">
        </li>
    */
   const movieList = $("#movie-list")
    movieList.empty();
        for (const movie of movies) {
            const new_movie = 
                ` <li data-grade="${movie.grade}" data-title="${movie.title}">
                    ${movie.title}
                    ${getStars(movie.grade)}
                    <img src="images/delete.png" alt="Delete movie" class="delete-movie">
                </li> `;
            $("#movie-list").append(new_movie);
        }
}

function loadMovies() {
    /*
        Todo: Filmerna ska snart laddas in från localStorage, men till
        en början nöjer vi oss med en vanlig array med filmer
    */

    const jsonMovies = localStorage.getItem("movies");
    if (jsonMovies) {
        return JSON.parse(jsonMovies);
    } else {
        return []; 
    }
}

function getStars(rating) {
    /*
        Todo: Baserat på "rating" (en siffra) så returnerar denna
        funktion HTML-kod för antalet stjärnor (betyg) för en film.
    */
   let stars = "";
    for (let i = 0; i < rating; i++) {
        stars += '<img src="images/star.png" alt="Star">';
    }
    return stars;
}

function saveMovies(movies) {
    /*
        Todo: Sparar filmerna till localStorage (JSON-format)
    */

    const jsonMovies = JSON.stringify(movies);
    localStorage.setItem("movies", jsonMovies);
}

$("#new-movie-form").on("submit", function (e) {
    /*
        Todo: När man klickar på knappen "Spara film" så ska funktionen:
        1. Validera att man skrivit in en titel & valt ett betyg. Om inte
        så ska vi visa upp (i en popup-ruta) ett meddelande om att både
        titel & betyg måste fyllas i.
        2. Lägga till en film i vår lista av filmer i localStorage
        3. Visa den nya filmen i vår lista av filmer
        4. Återställa formuläret (ingen titel, eller betyg valt)
    */
   e.preventDefault(); // Hindra sidan från att laddas om

    const title = $("#title").val();
    const grade = $("#grade").val();

    // 1. Validering
    if (title === "" || grade === "") {
        alert("Du måste fylla i både titel och välja ett betyg!");
        return;
    }

    const newMovie = {
        title: title,
        grade: parseInt(grade)
    }

    const movies = loadMovies();
    movies.push(newMovie);
    saveMovies(movies);

    // 4. Uppdatera listan på skärmen och nollställ formuläret
    printMovies(movies);
    $("#new-movie-form")[0].reset()

});


$("#order-alphabetic").on("click", function () {
    /*
        Todo: Sortera filmlistan alfabetiskt stigande
    */
});

$("#order-grade").on("click", function () {
    /*
        Todo: Sortera filmlistan fallande efter betyg
    */
});

$("#movie-list").on("click", ".delete-movie", function () {
    /*
        Todo: Ska ta bort en film från:
        1. Filmlistan i localStorage
        2. Från filmlistan som visas på webbsidan
    */
   const li = $(this).closest("li");
    const titleToDelete = li.data("title");

    let movies = loadMovies();

    // Skapa en ny lista där den valda filmen är borttagen
    movies = movies.filter(movie => movie.title !== titleToDelete);

    // Spara den uppdaterade listan och rita ut igen
    saveMovies(movies);
    printMovies(movies);
});

// Skriver ut filmerna i vår lista när sidan laddats klart
$(document).ready(function () {
    const movies = loadMovies();
    printMovies(movies);
});