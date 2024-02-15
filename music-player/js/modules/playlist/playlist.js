import { allPlaylist, createNewPlaylist } from "../state/state.js";

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
export { renderAllPlaylist };
