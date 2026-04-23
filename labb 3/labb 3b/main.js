$("#search-field").on("input", function() {
    const sök = $("#search-field").val()
    $.ajax({
            url: "http://www.omdbapi.com/?apikey=5b45a2a2&s=" + sök
        }).done(function(data) {
            const ul = $("#movie-list")
            ul.empty();            
            const strängLängd = $("#search-field").val().length
            if (strängLängd >=3){
                if (data.Response === "True"){
                    for (let search of data.Search ){
                        
                        const newLi = $(`
                            <li> 
                            <img src='${search.Poster}' style.max-widh=20%>  <p>${search.Title}</p>  <span>${search.Year}</span>
                            </li>`)
                        ul.append(newLi)
                        
                    }
                    
                }
            }       
        }).fail(function(data) {
                console.log(data);
        });
});

$("search-field").on("click", function(){
    $("search-field").style.border= "blue solid 2px";
})
