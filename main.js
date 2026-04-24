import { fetchJoke } from "./fetching";
import { getStoredJokes, storeJoke } from "./storing";

console.log(await fetchJoke());

const currentJokeEl = document.querySelector(".current-joke__text");
const loadNewJokeButton = document.querySelector(".current-joke__loadNewJoke");
const storeJokeButton = document.querySelector(".current-joke__storeJoke");
const storedJokeListEl = document.querySelector(".joke-list__list");

let currentJoke = "";

async function loadNewJoke() {
  const joke = await fetchJoke();
  if (!currentJoke) {
    storeJokeButton.classList.remove("current-joke__storeJoke--disabled");
  }
  currentJoke = joke;
  currentJokeEl.innerText = joke;
}

function storeCurrentJoke() {
  if (currentJoke) {
    storeJoke(currentJoke);
    renderStoredJokes();
  }
}

function renderStoredJokes() {
  const storedJokes = getStoredJokes();

  // Logic check: ensure storedJokes is actually an array
  const jokesToRender = Array.isArray(storedJokes) ? storedJokes : [];

  let html = "";
  jokesToRender.forEach((joke) => {
    html += `
      <div class="joke-list__joke">
        <div class="joke-list__text">${joke}</div>
        <button class="joke-list__remove">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="joke-list__icon">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
          </svg>
        </button>
      </div>`;
  }); // Corrected syntax here

  if (!html) html = "<em>Noch keine Witze gespeichert!</em>";
  storedJokeListEl.innerHTML = html;
}

loadNewJokeButton.addEventListener("click", loadNewJoke);
storeJokeButton.addEventListener("click", storeCurrentJoke);

renderStoredJokes();
