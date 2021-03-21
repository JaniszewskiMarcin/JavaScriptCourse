const addMovieModal = document.querySelector("#add-modal");
const backdrop = document.querySelector("#backdrop");
const startAddMovieButton = document.querySelector("header button");
const cancelMovieModal = document.querySelector("body button");
const confirmMovieModal = cancelMovieModal.nextElementSibling;
const inputs = addMovieModal.querySelectorAll("input");
const entryTextSection = document.querySelector("#entry-text");
const deleteMovieModal = document.getElementById("delete-modal");

const movies = [];

const updateUI = () => {
  if (movies.length === 0) {
    entryTextSection.style.display = "block";
  } else {
    entryTextSection.style.display = "none";
  }
};

const closeMovieDeletionModal = () => {
  toggleBackdrop();
  deleteMovieModal.classList.remove("visible");
};

const deleteMovieHandler = (movieId) => {
  let movieIndex = 0;
  for (const movie of movies) {
    if (movie.id === movieId) {
      break;
    }
    movieIndex++;
  }
  movies.splice(movieIndex, 1);
  const listRoot = document.getElementById("movie-list");
  listRoot.children[movieIndex].remove();
  closeMovieDeletionModal();
  updateUI();
};

const startDeleteMovieHandler = (movieId) => {
  deleteMovieModal.classList.add("visible");
  toggleBackdrop();
  const cancelDeletionButton = deleteMovieModal.querySelector(".btn--passive");
  let confirmDeletionButton = deleteMovieModal.querySelector(".btn--danger");

  confirmDeletionButton.replaceWith(confirmDeletionButton.cloneNode(true));

  confirmDeletionButton = deleteMovieModal.querySelector(".btn--danger");

  cancelDeletionButton.removeEventListener("click", closeMovieDeletionModal);

  cancelDeletionButton.addEventListener("click", closeMovieDeletionModal);
  confirmDeletionButton.addEventListener(
    "click",
    deleteMovieHandler.bind(null, movieId)
  );
};

const renderNewMovieElement = (id, title, image, rating) => {
  const newMovieElement = document.createElement("li");
  newMovieElement.className = "movie-element";
  newMovieElement.innerHTML = `
  <div class="movie-element__image">
    <img src="${image}" alt="${title}">
  </div>
  <div class="movie-element__info">
    <h2>${title}</h2>
    <p>${rating}/5 stars</p>
  </div>
  `;

  newMovieElement.addEventListener(
    "click",
    startDeleteMovieHandler.bind(null, id)
  );
  const listRoot = document.getElementById("movie-list");
  listRoot.append(newMovieElement);
};

const showMovieModal = () => {
  addMovieModal.classList.add("visible");
  toggleBackdrop();
};

const closeMovieModal = () => {
  addMovieModal.classList.remove("visible");
};

const toggleBackdrop = () => {
  backdrop.classList.toggle("visible");
};

const backgroundClickHandler = () => {
  closeMovieModal();
  closeMovieDeletionModal();
  clearMovieInput();
};

const clearMovieInput = () => {
  for (const usrInputs of inputs) {
    usrInputs.value = "";
  }
};

const cancelButtonClickHandler = () => {
  closeMovieModal();
  clearMovieInput();
  toggleBackdrop();
};

const confirmButtonClickHandler = () => {
  const titleValue = inputs[0].value;
  const imageURL = inputs[1].value;
  const ratingValue = inputs[2].value;

  if (
    titleValue.trim() === "" ||
    imageURL.trim === "" ||
    ratingValue === "" ||
    +ratingValue < 1
  ) {
    alert("Please enter vaild value (rating between 1 and 5).");
    return;
  }

  const newMovie = {
    id: Math.random().toString(),
    title: titleValue,
    image: imageURL,
    rating: ratingValue,
  };

  movies.push(newMovie);
  console.log(newMovie);

  closeMovieModal();
  toggleBackdrop();
  clearMovieInput();
  renderNewMovieElement(
    newMovie.id,
    newMovie.title,
    newMovie.image,
    newMovie.rating
  );
  updateUI();
};

startAddMovieButton.addEventListener("click", showMovieModal);
backdrop.addEventListener("click", backgroundClickHandler);
cancelMovieModal.addEventListener("click", cancelButtonClickHandler);
confirmMovieModal.addEventListener("click", confirmButtonClickHandler);
