# INTERACTIVE-QUIZ-APPLICATION
*COMPANY* : CODTECH IT SOLUTIONS
*NAME*: BELGE TEJASWINI ASHOK
*INTERN ID*:CTIS2651
*DOMAIN*:FRONTEND DEVELOPMENT
*DURATION*:4 WEEKS
*MENTOR*:NEELA SANTOSH
<img width="534" height="911" alt="Image" src="https://github.com/user-attachments/assets/512c222c-c017-43f9-b5f6-dd3bbc76439e" />

## 🔹 1️⃣ HTML Code Description

The **HTML code** is used to create the **structure of the Interactive Quiz Application**.

* `<!DOCTYPE html>` defines the document as an HTML5 document.
* The `<head>` section contains:

  * `meta charset="UTF-8"` to support all characters.
  * `<title>` to set the browser tab name.
  * A link to `style.css` for styling.
* The `<body>` section includes:

  * A `.container` div that holds the entire quiz.
  * A `.header` section that displays the title **CODTECH**, internship task, and subtitle.
  * Multiple `.quiz-box` sections, each representing one question.

    * `data-answer` attribute stores the index of the correct answer.
    * Buttons with class `.option` are used for multiple-choice answers.
  * A **Submit Quiz** button to submit the quiz.
  * A result paragraph to display the score.
* The `script.js` file is linked at the end to add functionality.

👉 **Purpose of HTML:**
To define the **content and structure** of the quiz application.

---

## 🔹 2️⃣ CSS Code Description

The **CSS code** is used to style the quiz application and improve its appearance.

* The universal selector `*` resets margin, padding, and sets a common font.
* The `body` is styled using flexbox to center the quiz on the page.
* `.container` creates a card-like layout with padding, rounded corners, and shadow.
* `.header` aligns text in the center and highlights the main title.
* `.quiz-box` adds spacing between questions.
* `.options` arranges the answer buttons vertically.
* `.option` styles the answer buttons.
* `.option.selected` highlights the selected option with a different color.
* `#submitBtn` styles the submit button.
* `.certificate` displays a small informational message at the bottom.

👉 **Purpose of CSS:**
To make the quiz **attractive, readable, and user-friendly**.

---

## 🔹 3️⃣ JavaScript Code Description

The **JavaScript code** adds interactivity and logic to the quiz.

### ✔ Option Selection

* When a user clicks on an option:

  * Previously selected options are removed.
  * Only the clicked option is marked as selected.

### ✔ Score Calculation

* When the **Submit Quiz** button is clicked:

  * Each question is checked.
  * The selected option is compared with the correct answer stored in `data-answer`.
  * The score is increased for each correct answer.
* The final score is displayed as:
  **Your Score: X / Total Questions**

👉 **Purpose of JavaScript:**
To handle **user interaction**, **validate answers**, and **calculate the final score**.

