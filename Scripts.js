document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been sent.`);
        document.getElementById("contactForm").reset();
    } else {
        alert("Please fill out all fields!");
    }
});


document.getElementById("suggestion-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let gameName = document.getElementById("game-name").value;
    let gameReason = document.getElementById("game-reason").value;

    if (gameName && gameReason) {
        let newSuggestion = document.createElement("div");
        newSuggestion.innerHTML = `<strong>${gameName}</strong>: ${gameReason}`;
        document.getElementById("suggestions-list").appendChild(newSuggestion);

        // Clear form after submission
        document.getElementById("game-name").value = "";
        document.getElementById("game-reason").value = "";
    }
});