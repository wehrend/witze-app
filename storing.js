const localStorageKey = "jokes";

export function getStoredJokes() {
  return JSON.parse(localStorage.getItem(localStorageKey)) || [];
}

export function storeJoke(joke) {
  const storedJokes = getStoredJokes();

  if (storedJokes.find((storedJoke) => storedJoke === joke)) {
    alert("witz wurde bereits gespeichert!");
    return;
  }
  const newStoredJokes = [joke, ...storedJokes];
  localStorage.setItem(localStorageKey, JSON.stringify(newStoredJokes));
}
