//access songs list and populat genre.
import { songs } from "../../songsData.js";
import { updateCurrSong } from "../state/state.js";
function createSongsListUI(songs) {
  const songsListUL = document.getElementById("songs-list");
  if (songsListUL !== null) songsListUL.remove();

  const songsContainer = document.getElementById("songs-container");
  const songsList = document.createElement("ul");
  songsList.setAttribute("id", "songs-list");
  songsList.innerHTML = "";
  songs.forEach(({ id, name, artist }) => {
    const liEl = document.createElement("li");
    liEl.setAttribute("data-songid", id);
    liEl.classList.add("song");
    liEl.textContent = `${name} - ${artist}`;

    //click evt to play current song
    liEl.addEventListener("click", (evt) => {
      evt.stopPropagation();
      evt.preventDefault();

      songClickListener(id);
    });
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

function getSongsOfGenre(songs, forGenre) {
  if (forGenre.toLowerCase().trim() === "all") return songs;
  let filteredSong = songs.filter(({ genre }) => genre === forGenre);

  return filteredSong;
}

function genreChangeListener(evt) {
  evt.stopPropagation();
  evt.preventDefault();
  let selectedGenre = evt.target.value;
  //console.log(selectedOption.value);

  const songsListforGenre = getSongsOfGenre(songs, selectedGenre);
  //update songs list UI
  //console.log(songsListforGenre);
  createSongsListUI(songsListforGenre);
}
function songClickListener(id) {
  //console.log(id, "::", typeof id);
  updateCurrSong(id);
}
export { createGenreSelectUI, createSongsListUI };
