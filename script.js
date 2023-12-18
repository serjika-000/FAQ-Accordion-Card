"use strict";

const questionsFAQ = document.querySelectorAll(".question-flex");

questionsFAQ.forEach((question) =>
    question.addEventListener("click", () => {
        if (question.parentNode.classList.contains("active")) {
            question.parentNode.classList.toggle("active");
        } else {
            questionsFAQ.forEach((question) =>
                question.parentNode.classList.remove("active")
            );
            question.parentNode.classList.add("active");
        }
    })
);