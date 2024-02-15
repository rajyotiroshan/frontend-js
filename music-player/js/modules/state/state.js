import { songs } from "../../songsData.js";
import { updatePlayer } from "../player/player.js";
let currSong = {};
function updateCurrSong(songID) {
  let songToPlay = songs.find(({ id }) => id === songID);
  if (!currSong) {
    //undefined
    return window.prompt("Song does not exist.");
  }
  currSong = songToPlay;
  updatePlayer(currSong);
}

export { currSong, updateCurrSong };
