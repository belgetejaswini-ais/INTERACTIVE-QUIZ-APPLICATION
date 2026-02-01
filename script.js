// option selection
document.querySelectorAll(".option").forEach(option => {
    option.addEventListener("click", function () {

        const options = this.parentElement.querySelectorAll(".option");
        options.forEach(btn => btn.classList.remove("selected"));

        this.classList.add("selected");
    });
});

// submit & score
document.getElementById("submitBtn").addEventListener("click", function () {

    let score = 0;
    const questions = document.querySelectorAll(".quiz-box");

    questions.forEach(question => {
        const correctIndex = question.getAttribute("data-answer");
        const options = question.querySelectorAll(".option");

        options.forEach((opt, index) => {
            if (opt.classList.contains("selected") && index == correctIndex) {
                score++;
            }
        });
    });

    document.getElementById("result").innerText =
        `Your Score: ${score} / ${questions.length}`;
});
