const quizForm = document.getElementById("quizForm");
    const categorySelect = document.getElementById("option");
    quizForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const selectedCategory = categorySelect.value;
        if (selectedCategory === "Computer_Science") {
            window.location.href ="computer_sciene.html";
        } else if (selectedCategory === "geology") {
            window.location.href = "geology.html";
        } else {
            alert("Please select a valid category.");
        }
    });