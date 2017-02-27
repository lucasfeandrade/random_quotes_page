function getRandomNum(max) {
    return Math.round(Math.random()*max);
}

function getRandomColor() {
    const maxNum = 255;
    return `rgb(${getRandomNum(maxNum)},${getRandomNum(maxNum)},${getRandomNum(maxNum)})`;
}

function changeColors(animateTime) {
    $('body').animate({
        backgroundColor: getRandomColor()
    }, animateTime);
    $('i').animate({
        color: getRandomColor()
    }, animateTime);
}

function showQuote(author, quote) {
    $('#quote-author').text("- " + author);
    $('#quote-content').text(quote);
    $('#tweet-quote').attr("href", 'https://twitter.com/intent/tweet?text=' + quote + ' -' + author);
}

function updateQuote() {
    $.ajax({
        type: "POST",
        url: "https://andruxnet-random-famous-quotes.p.mashape.com/",
        data: { "cat": "movies"},
        dataType: 'json',
        success: function(data){
            showQuote(data.author, data.quote);
            changeColors(600);
        },
        beforeSend: function(xhr) {
            xhr.setRequestHeader("X-Mashape-Authorization", "FFvHWpFk7emshbyd7Wmx9uP6wB92p1Zsadejsnpg6SacZSTUU6");
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhr.setRequestHeader("Accept", "application/json");
        }
    });
}

$(document).ready(function() {
    updateQuote();
    $('#change_quote').on('click', function(e) {
        e.preventDefault();
        updateQuote();
    });
});
