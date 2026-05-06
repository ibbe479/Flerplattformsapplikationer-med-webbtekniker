function getCurrentPosition(){
    // Vi kommer fylla på denna i steg 2.
    let options = {};

    function success(position) {
        // Ta en titt i er webbkonsol och se vad den innehåller.
        console.log("This is our position: ", position);
        $("#longitude").text(position.coords.longitude);
        $("#latitude").text(position.coords.latitude);
        $("#accuracy").text(position.coords.accuracy);
        $("#altitude").text(position.coords.altitude);
        $("#accuracy-altitude").text(position.coords.altitudeAccuracy);
        $("#speed").text(position.coords.speed);
        console.log(position.coords.altitudeAccuracy)
    }

    function error(err) {
        console.warn("Something went wrong: ", err.message);
    }

    // Skicka med våra funktioner och inställningar,
    // dessa kommer sedan anropas när en position försöker fastställas.
    navigator.geolocation.getCurrentPosition(success, error, options);
}


function watchPosition(){

    let options = {
        // Försök tvinga enheten till en så precis position som möjligt
        enableHighAccuracy: true,
        // Maximal tid i millisekunder som enheten har på sig att ge oss en position
        timeout: 5000,
        // Hur länge vår position får tillfälligt lagras (millisekunder)
        maximumAge: 0
    };

    function success(position) {
        // Ta en titt i er webbkonsol och se vad den innehåller.
        console.log("This is our position: ", position);
        $("#longitude").text(position.coords.longitude);
        $("#latitude").text(position.coords.latitude);
        $("#accuracy").text(position.coords.accuracy);
        $("#altitude").text(position.coords.altitude);
        $("#accuracy-altitude").text(position.coords.altitudeAccuracy);
        $("#speed").text(position.coords.speed);
    }

    function error(err) {
        console.warn("Something went wrong: ", err.message);
    }

    // Skicka med våra funktioner och inställningar,
    // dessa kommer sedan anropas kontinuerligt medan vi rör på oss.
    let watchID = navigator.geolocation.watchPosition(success, error, options);

    // Skulle vi sedan vilja avbryta detta hade vi anropat `clearWatch`
    //navigator.geolocation.clearWatch(watchID);
}
watchPosition()