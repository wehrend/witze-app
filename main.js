import { fetchJoke } from "./fetching";

console.log(await fetchJoke());

const currentJokeEl = document.querySelector(".current-joke__text");
const loadNewJokeButton = document.querySelector(".current-joke__loadNewJoke");

async function loadNewJoke() {
  const joke = await fetchJoke();

  currentJokeEl.innerText = joke;
}

loadNewJokeButton.addEventListener("click", loadNewJoke);
