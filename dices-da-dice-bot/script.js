document.getElementById("roll-button").addEventListener("click", function() {
    const diceCount = parseInt(document.getElementById("dice-count").value);
    const resultsContainer = document.getElementById("dice-results");
    resultsContainer.innerHTML = "";  // Clear previous results
    
    let results = [];
    for (let i = 0; i < diceCount; i++) {
        const roll = Math.floor(Math.random() * 6) + 1;
        results.push(roll);
    }

    resultsContainer.innerText = `You rolled: ${results.join(", ")}`;
});
