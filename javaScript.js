let count = 0;
const value = document.querySelector(".counter");
const btn = document.querySelectorAll(".btn");

btn.forEach(function(btn) {
    btn.addEventListener("click", function(object) {
        const currentBtn = object.currentTarget.classList;
        if (currentBtn.contains("decrease")) {
            count--;
        }
        else if (currentBtn.contains("reset")) {
            count = 0;
        }
        else if (currentBtn.contains("increase")) {
            count++;
        }
        value.textContent = count;
    })
});