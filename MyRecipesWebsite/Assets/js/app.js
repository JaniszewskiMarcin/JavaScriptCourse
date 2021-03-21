const addButton = document.querySelector("#add-button");
const backdrop = document.querySelector("#backdrop");
const modalModal = document.querySelector("#add_modal");
const cancelRecipeButton = document.querySelector("body button");
const addRecipeButton = cancelRecipeButton.nextElementSibling;
let inputs = document.querySelectorAll("input");

const recipes = [];

const showBackground = () => {
  backdrop.classList.add("visible");
};

const closeBackground = () => {
  backdrop.classList.remove("visible");
};

const closeBackgroundHandler = () => {
  modalModal.classList.remove("visible");
  closeBackground();
  clearUI();
};

const addRecipeHandler = () => {
  modalModal.classList.add("visible");
  showBackground();
};

const clearUI = () => {
  for (let el of inputs) {
    el.value = "";
  }
};

const confirmRecipeButtonHandler = () => {
  const titleValue = inputs[0].value;
  const ingredientsValue = inputs[1].value;
  const directionsValue = inputs[2].value;
  const imageUrlValue = inputs[3].value;

  if (
    titleValue.trim() === "" ||
    ingredientsValue.trim() === "" ||
    directionsValue.trim() === "" ||
    imageUrlValue.trim() === ""
  ) {
    alert("Please enter all values!");
    return;
  }

  const newRecipe = {
    title: titleValue,
    ingredients: ingredientsValue,
    directions: directionsValue,
    imageUrl: imageUrlValue,
  };

  recipes.push(newRecipe);

  renderNewElement(
    newRecipe.title,
    newRecipe.ingredients,
    newRecipe.directions,
    newRecipe.imageURL
  );

  closeBackgroundHandler();
  clearUI();
};

const renderNewElement = (title, ingredients, directions, imageURL) => {
  const newElement = document.createElement("li");
  newElement.className = "recipes_element";
  newElement.innerHTML = `<div class="recipes_image">
  <img src="${imageURL}"/>
</div>
<div style="display: flex; flex-direction: column;">
  <div class="recipes_title">
    <p>${title}</p>
  </div>
  <div class="recipes_ingredients">
    <p>Ingredients: ${ingredients}</p>
  </div>
</div>
<div class="recipes_directions">
  <p>${directions}</p>
</div>`;

  const listRoot = document.querySelector("#recipes_list");
  listRoot.append(newElement);
};

addButton.addEventListener("click", addRecipeHandler);
backdrop.addEventListener("click", closeBackgroundHandler);
cancelRecipeButton.addEventListener("click", closeBackgroundHandler);
addRecipeButton.addEventListener("click", confirmRecipeButtonHandler);
