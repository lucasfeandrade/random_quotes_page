function changeColors() {
    let red = Math.round(Math.random()*255);
    let blue = Math.round(Math.random()*255);
    let green = Math.round(Math.random()*255);

    $('body').animate({
        backgroundColor: `rgb(${red},${green},${blue})`
    },600);
    $('i').animate({
        color: `rgb(${red},${green},${blue})`
    },600);
}


function updateQuote() {
    $('#change_quote').on('click', function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "https://andruxnet-random-famous-quotes.p.mashape.com/",
            data: { "cat": "movies"},
            dataType: 'json',
            success: function(data){
                let author = data.author;
                let quote = data.quote;
                console.log(author);
                $('#quote-author').text("- " + author);
                $('#quote-content').text(quote);
                $('#tweet-quote').attr("href", 'https://twitter.com/intent/tweet?text='+quote+' -'+author);
                changeColors();
            },
            beforeSend: function(xhr) {
                xhr.setRequestHeader("X-Mashape-Authorization", "FFvHWpFk7emshbyd7Wmx9uP6wB92p1Zsadejsnpg6SacZSTUU6");
                xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                xhr.setRequestHeader("Accept", "application/json");
            }
        });
    })
}


$(document).ready(function() {
    updateQuote();
});