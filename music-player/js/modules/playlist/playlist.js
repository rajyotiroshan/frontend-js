import { songs } from "../../songsData.js";
import {
  allPlaylist,
  createNewPlaylist,
  currPlaylistName,
  updateCurrPlayListName,
} from "../state/state.js";
function getSongsNameForPlaylist(playlistName) {
  let songsIDArr = allPlaylist[playlistName];
  let songsNameArr = songs
    .filter(({ id }) => songsIDArr.includes(id))
    .map(({ name }) => name);
  return songsNameArr;
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
  const songsNameArr = getSongsNameForPlaylist(currPlaylistName);
  for (let name of songsNameArr) {
    const liEl = document.createElement("li");
    liEl.classList.add(["pl-name"]);
    liEl.textContent = name;
    liEl.setAttribute("data-pl-song-name", name);
    currPlSongsUL.appendChild(liEl);
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
    return window.prompt("Enter a playlist name.");
  }
  createNewPlaylist(playListName);
}
export { renderAllPlaylist, renderCurrPlaylist };
