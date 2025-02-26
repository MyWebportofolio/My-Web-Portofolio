$("#trivia-form").on("submit",function (event) {
    event.preventDefault()
    var $answer = $("#trivia-answer");
    var answer = $answer.val();
    if (answer ==="resig"){
        $("#result").text("You did it!") 
    } else{ 
$("#result").text("Try again!")
}
})
