
// jQuery hover event for #game element
$("#game").hover(
    function() { $("#img").show(1000); },
    function() { $("#img").hide(1000); }
);

// Separate mouseover and mouseout functions for #game and #method
document.getElementById("game").addEventListener("mouseover", function() {
    this.style.color = "green";
});
document.getElementById("game").addEventListener("mouseout", function() {
    this.style.color="blue";
});

document.getElementById("method").addEventListener("mouseover", function() {
    this.style.color="green"
});
document.getElementById("method").addEventListener("mouseout", function() {
    this.style.color = "aliceblue";
});

// Function to display selected scrambled word
function displaySelectedWord(selectId, displayId) {
    let selectedValue = document.getElementById(selectId).value;
    document.getElementById(displayId).innerHTML = "You selected: " + selectedValue;
}

// Function to check the answer
function checkAnswer(inputId, selectId, resultId) {
    const answer = document.getElementById(inputId).value.toLowerCase();
    const selectedOption = document.getElementById(selectId).selectedOptions[0];
    const correctWord = selectedOption.getAttribute("data-correct");
    document.getElementById(resultId).innerText = answer === correctWord ? "You got it!" : "Try again!";
}
