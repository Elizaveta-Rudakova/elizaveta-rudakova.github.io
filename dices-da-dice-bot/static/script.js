document.addEventListener("DOMContentLoaded", function () {
    // Smooth label animation for input fields
    const textInput = document.querySelector("#first_name");
    const labels = document.querySelectorAll("label");

    textInput.addEventListener("focus", () => {
        labels[0].classList.add("active");
    });

    textInput.addEventListener("blur", () => {
        if (textInput.value === "") {
            labels[0].classList.remove("active");
        }
    });

    // Button press animation
    const button = document.querySelector("button");
    button.addEventListener("mousedown", () => {
        button.classList.add("button-press");
    });
    button.addEventListener("mouseup", () => {
        button.classList.remove("button-press");
    });

    // Range slider tooltip
    const slider = document.querySelector("#level");
    const tooltip = document.createElement("span");
    tooltip.className = "tooltip";
    tooltip.innerText = slider.value;
    slider.parentNode.appendChild(tooltip);

    slider.addEventListener("input", () => {
        tooltip.innerText = slider.value;
        tooltip.style.left = `${slider.value}%`;
    });

    document.addEventListener("DOMContentLoaded", function () {
    // Get references to the form elements
    const textInput = document.querySelector("#first_name");
    const toggleInput = document.querySelector("#allow_direct_messages");
    const levelInput = document.querySelector("#level");
    const days = document.querySelectorAll(".days input[type='checkbox']");
    const nextButton = document.querySelector("#next-button");

    // Function to check if form is ready for submission
    function checkFormCompletion() {
        const isTextFilled = textInput.value.trim() !== "";
        const isToggleChecked = toggleInput.checked;
        const isLevelSelected = levelInput.value > 0;
        const isDaySelected = Array.from(days).some(day => day.checked);

        if (isTextFilled && isToggleChecked && isLevelSelected && isDaySelected) {
            nextButton.classList.add("active");
            nextButton.disabled = false;
        } else {
            nextButton.classList.remove("active");
            nextButton.disabled = true;
        }
    }

    // Add event listeners
    textInput.addEventListener("input", checkFormCompletion);
    toggleInput.addEventListener("change", checkFormCompletion);
    levelInput.addEventListener("input", checkFormCompletion);
    days.forEach(day => day.addEventListener("change", checkFormCompletion));
    });
});