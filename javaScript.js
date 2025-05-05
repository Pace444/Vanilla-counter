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

        // change color
        if (count > 0) {
            value.style.color = "green";
        }
        else if (count < 0) {
            value.style.color = "red"
        }
        else {
            value.style.color = "black"
        }
        value.textContent = count;
    })
});