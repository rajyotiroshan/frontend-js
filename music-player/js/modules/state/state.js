import { songs } from "../../songsData.js";
import { updatePlayerUI } from "../player/player.js";
let currSong = songs[0];
function updateCurrSong(songID) {
  let songToPlay = songs.find(({ id }) => id === songID);
  if (!currSong) {
    //undefined
    return window.prompt("Song does not exist.");
  }
  currSong = songToPlay;
  updatePlayerUI(currSong);
}

export { currSong, updateCurrSong };
