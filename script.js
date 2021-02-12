const pswForm = document.querySelector(".password-form");
//const input=document.querySelector("input")
const ourError = document.createElement("div");
const btn=document.querySelector("button");
pswForm.addEventListener("click", (event) => {
    event.preventDefault();
    let input = document.querySelectorAll("input");
    if (input[0].value && input[1].value) {
        if (input[0].value === input[1].value) {
            ourError.remove();
            alert("You are welcome");
        } else {
            const ourError = document.createElement("div");
            ourError.innerHTML ="write the same value";
            ourError.classList.add("ourError")
            btn.before(ourError)
        }
    }
});

let icons = document.querySelectorAll(".icon-password");
icons.forEach((items)=> {
    items.addEventListener("click", (e) => {
        let input = e.target.parentNode.querySelector("input");
        if (input.getAttribute("type") == "password") {
            input.setAttribute("type", "text");
            e.target.classList.remove("fa-eye");
            e.target.classList.add("fa-eye-slash");
        } else {
            input.setAttribute("type", "password");
            e.target.classList.remove("fa-eye-slash");
            e.target.classList.add("fa-eye");
        }
    });
});


