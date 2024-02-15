import { songs } from "../../songsData.js";
import { updatePlayerUI } from "../player/player.js";
let currSong = songs[0];
let allPlaylist = { jogging: [2, 1, 3], reading: [5, 2, 7] }; //{name: [songid1, songid2,..., songid3]}
let currPlaylist = ""; //"<name of playlist>"
/**
 *
 * @param {songID} songID
 * @returns "updae currSong with passed songID->song"
 */
function updateCurrSong(songID) {
  let songToPlay = songs.find(({ id }) => id === songID);
  if (!currSong) {
    //undefined
    return window.prompt("Song does not exist.");
  }
  currSong = songToPlay;
  updatePlayerUI(currSong);
}

/**
 *
 * @param {currSongID} currently playing song's id
 * @returns "get next song id from songs list"
 */
function getNextSongID(currSongID) {
  let currSongIndex = songs.findIndex(({ id }) => id === currSongID);
  let nextSongIndex = currSongIndex + 1;
  if (nextSongIndex >= songs.length) {
    return songs[0].id;
  }
  return songs[nextSongIndex].id;
}

/**
 *
 * @param {currSongID} currently playing song's id
 * @returns "get prev song id from songs list"
 */
function getPrevSongID(currSongID) {
  let currSongIndex = songs.findIndex(({ id }) => id === currSongID);
  let prevSongIndex = currSongIndex - 1;
  if (prevSongIndex < 0) {
    return songs[songs.length - 1].id;
  }
  return songs[prevSongIndex].id;
}

function createNewPlaylist(playlistName) {
  if (!allPlaylist.hasOwnProperty(playlistName)) {
    allPlaylist[playlistName] = [];
    return;
  }
  window.prompt(`Playlist with name "${playlistName}" already exist.`);
}
export {
  currSong,
  updateCurrSong,
  getNextSongID,
  getPrevSongID,
  allPlaylist,
  currPlaylist,
};
