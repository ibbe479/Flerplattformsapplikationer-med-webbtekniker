// När formuläret skickas (dvs. när användaren klickar på submit-knappen).
$("#newsletter-form").on("submit", function(e) {
    // Hindra formuläret från att skicka iväg användaren.
    e.preventDefault();

    // Här placerar ni er validerings kod.

    // Om allting var korrekt - skicka vidare användaren.
    $("#newsletter-form")[0].submit();
});