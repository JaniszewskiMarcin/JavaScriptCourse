const h1 = document.querySelector("h1");

h1.style.backgroundColor = "black";
h1.style.color = "white";
h1.textContent = "Some new text!";

const lisOfElements = document.querySelectorAll("li");

for (const element of lisOfElements) {
  console.log("ENDE!");
}

const section = document.querySelector("section");
const button = document.querySelector("button");

section.className = "red-bg";

button.addEventListener("click", () => {
/*   if (section.className === "red-bg visible") {
    section.className = "red-bg invisible";
  } else {
    section.className = "red-bg visible";
  } */

  section.classList.toggle("invisible")
});
