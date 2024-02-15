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
function getNextSongID(currSongID) {
  let currSongIndex = songs.findIndex(({ id }) => id === currSongID);
  let nextSongIndex = currSongIndex + 1;
  if (nextSongIndex >= songs.length) {
    return songs[0].id;
  }
  return songs[nextSongIndex].id;
}
export { currSong, updateCurrSong,getNextSongID };
