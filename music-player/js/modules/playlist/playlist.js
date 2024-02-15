import { allPlaylist } from "../state/state.js";

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

export { renderAllPlaylist };
