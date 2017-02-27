function changeColors() {

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
                var author = data.author;
                var quote = data.quote;
                console.log(author);
                $('#quote-author').text("- " + author);
                $('#quote-content').text(quote);
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