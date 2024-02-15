import { songs } from "../../songsData.js";
import { updatePlayerUI } from "../player/player.js";
import { renderAllPlaylist, renderCurrPlaylist } from "../playlist/playlist.js";
let currSong = songs[0];
let allPlaylist = {}; //{name: [songid1, songid2,..., songid3]}
let currPlaylistName = ""; //"<name of playlist>"
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
    renderAllPlaylist();
    return;
  }
  window.alert(`Playlist with name "${playlistName}" already exist.`);
}

function updateCurrPlayListName(playListName) {
  currPlaylistName = playListName;
  renderCurrPlaylist();
}

function addCurrSongToCurrPL() {
  if (Object.getOwnPropertyNames(allPlaylist).length <= 0) {
    return window.alert("Please create a playlist");
  }
  if (!currPlaylistName) {
    return window.alert("click on a available playlist");
  }
  if (!currSong) {
    return window.alert("play a song to add to playlist");
  }
  //
  if (allPlaylist[currPlaylistName].includes(currSong.id)) {
    return window.alert(
      `Song Already included in the playlist:: ${currPlaylistName}`
    );
  }
  allPlaylist[currPlaylistName].push(currSong.id);
  renderCurrPlaylist();
}
export {
  currSong,
  updateCurrSong,
  getNextSongID,
  getPrevSongID,
  allPlaylist,
  currPlaylistName,
  createNewPlaylist,
  updateCurrPlayListName,
  addCurrSongToCurrPL,
};
