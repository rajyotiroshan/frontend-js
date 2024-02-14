//access songs list and populat genre.
function createSongsListUI(songs) {
  const songsContainer = document.getElementById("songs-container");
  const songsList = document.createElement("ul");
  songsList.setAttribute("id", "songs-list");

  songs.forEach(({ name, artist }) => {
    const liEl = document.createElement("li");
    liEl.classList.add("song");
    liEl.textContent = `${name} - ${artist}`;
    songsList.appendChild(liEl);
  });
  songsContainer.appendChild(songsList);
}
function getGenre(songs) {
  let genreSet = new Set();

  songs.forEach((songObj) => genreSet.add(songObj.genre));

  return genreSet;
}

function createGenreSelectUI(songs) {
  let genreSet = getGenre(songs);
  const filterSelectEl = document.getElementById("filter");
  filterSelectEl.innerHTML = "";
  const opt = document.createElement("option");
  opt.textContent = "ALL";
  opt.setAttribute("value", "all");
  opt.classList.add("genre");
  filterSelectEl.appendChild(opt);
  for (let genre of genreSet) {
    const optEl = document.createElement("option");
    optEl.textContent = genre;
    optEl.setAttribute("value", genre);
    optEl.classList.add("genre");
    filterSelectEl.appendChild(optEl);
  }
  //filterSelectEl.firstElementChild.setAttribute("selected");
  filterSelectEl.addEventListener("change", genreChangeListener);
}
function genreChangeListener(evt) {
  evt.stopPropagation();
  evt.preventDefault();
  let selectedOption = evt.target;
  console.log(selectedOption);
}
export { createGenreSelectUI, createSongsListUI };
