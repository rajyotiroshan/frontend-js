import { songs } from "./songsData.js";
import {
  createSongsListUI,
  createGenreSelectUI,
} from "./modules/allsongs/allsongs.js";

import { updateCurrSong } from "./modules/state/state.js";
import { renderAllPlaylist } from "./modules/playlist/playlist.js";

/**
 * Handle theme change
 */
const themeCB = document.getElementById("theme-toggle");
themeCB.addEventListener("change", handleThemeChange);

function handleThemeChange(evt) {
  evt.preventDefault();
  evt.stopPropagation();
  let checked = evt.target.checked;
  if (checked) {
    //dark theme
    document.querySelector("#theme-name").textContent = "Light";
    //make theme dark
    document.body.classList.add("dark-primary");
    document.querySelectorAll(".main-sec").forEach((el) => {
      el.classList.add("dark-secondary");
    });
    document.querySelectorAll("li").forEach((el) => {
      el.classList.add("dark-primary");
    });
    document.querySelector("#music-card").style.backgroundColor = "#565657";
  } else {
    //light theme
    document.querySelector("#theme-name").textContent = "Dark";
    document.body.classList.remove("dark-primary");
    document.querySelectorAll(".main-sec").forEach((el) => {
      el.classList.remove("dark-secondary");
    });
    document.querySelectorAll("li").forEach((el) => {
      el.classList.remove("dark-primary");
    });
    document.querySelector("#music-card").style.backgroundColor = "";
  }
}
//Onload
createGenreSelectUI(songs);
createSongsListUI(songs);
updateCurrSong(songs[0].id);
renderAllPlaylist();
