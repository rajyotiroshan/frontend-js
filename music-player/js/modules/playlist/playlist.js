import { songs } from "../../songsData.js";
import {
  addCurrSongToCurrPL,
  allPlaylist,
  createNewPlaylist,
  currPlaylistName,
  updateCurrPlayListName,
  updateCurrSong,
} from "../state/state.js";
function getSongsListForPlaylist(playlistName) {
  let songsIDArr = allPlaylist[playlistName];
  let songsArr = songs.filter(({ id }) => songsIDArr.includes(id));

  return songsArr;
}
function renderCurrPlaylist() {
  const currPlayListcontainer = document.getElementById(
    "curr-playlist-container"
  );
  currPlayListcontainer.innerHTML = "";
  const playlistHdr = document.createElement("h3");
  playlistHdr.innerText = currPlaylistName;
  playlistHdr.setAttribute("id", "pl-hdr-name");
  const currPlSongsUL = document.createElement("ul");
  currPlSongsUL.setAttribute("id", "curr-playlist");
  const songsArr = getSongsListForPlaylist(currPlaylistName);
  for (let { name, artist, id } of songsArr) {
    const liEl = document.createElement("li");
    liEl.classList.add(["pl-name"]);
    liEl.textContent = `${name} - ${artist}`;
    liEl.setAttribute("data-pl-song-name", name);
    currPlSongsUL.appendChild(liEl);

    //add listener tosong to play
    liEl.addEventListener("click", (evt) => {
      evt.preventDefault();
      evt.stopPropagation();
      updateCurrSong(id);
    });
  }
  currPlayListcontainer.appendChild(playlistHdr);
  currPlayListcontainer.appendChild(currPlSongsUL);
}

function renderAllPlaylist() {
  const allPlayListcontainer = document.getElementById(
    "all-playlist-container"
  );
  allPlayListcontainer.innerHTML = "";
  const allPlaylistUL = document.createElement("ul");
  allPlaylistUL.setAttribute("id", "all-playlist");
  const playlistNames = Object.getOwnPropertyNames(allPlaylist);
  for (let name of playlistNames) {
    const liEl = document.createElement("li");
    liEl.classList.add(["pl-name"]);
    liEl.textContent = name;
    liEl.setAttribute("data-plname", name);
    allPlaylistUL.appendChild(liEl);

    //click evt for playlist
    liEl.addEventListener("click", (evt) => {
      evt.preventDefault();
      evt.stopPropagation();
      updateCurrPlayListName(name);
    });
  }
  allPlayListcontainer.appendChild(allPlaylistUL);
}

const createPLBtn = document.getElementById("create-playlist-btn");
createPLBtn.addEventListener("click", createPLBtnListener);
function createPLBtnListener(evt) {
  evt.preventDefault();
  evt.stopPropagation();
  //access input value
  const crtPLInput = document.getElementById("crt-pl");
  const playListName = crtPLInput.value.trim();
  if (!playListName) {
    return window.alert("Enter a playlist name in the input field");
  }
  crtPLInput.value = "";
  createNewPlaylist(playListName);
}

export { renderAllPlaylist, renderCurrPlaylist };
