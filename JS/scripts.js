console.log("Cześć!")


let button = document.querySelector(".js-button");
let photo = document.querySelector(".photo__photo");

button.addEventListener("click", () => {
    if (photo.classList.contains("hide")) {
        photo.classList.remove("hide");
        button.innerText = "Ukryj zdjęcie!";
    } else {
        photo.classList.add("hide");
        button.innerText = "Pokaż zdjęcie!";
    }
});