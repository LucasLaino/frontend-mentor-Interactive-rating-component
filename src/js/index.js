const submitBtn = document.getElementById("submit-btn");
const ratingComponent = document.getElementById("rating-component");
const thankYouComponent = document.getElementById("thankyou-component");
const ratingBtns = document.querySelectorAll(".rating-btn");

let ratingScore = document.querySelector("#feedback-rating");
let defaultScore = 0;

submitBtn.addEventListener("click", submitScore);

ratingBtns.forEach((btn) => {
    btn.addEventListener("click", ratingBtnClicked);
})

function submitScore() {
    ratingComponent.classList.add("hidden-component");
    thankYouComponent.classList.add("show-component");

    ratingScore.textContent = defaultScore;
}

function ratingBtnClicked(e) {
    if (e.target.classList.contains("rating-btn")) {
        e.target.classList.toggle("active");
    }

    defaultScore = e.target.textContent;
}