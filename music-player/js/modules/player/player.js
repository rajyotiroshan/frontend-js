import {
  getNextSongID,
  getPrevSongID,
  updateCurrSong,
} from "../state/state.js";

function updatePlayerUI(currSong) {
  console.log(currSong);

  let { name, artist, img, source, id: songID } = currSong;
  const mainSecPlayerEl = document.getElementById("main-sec-player");
  mainSecPlayerEl.innerHTML = "";
  const playerContainerEl = document.createElement("div");
  playerContainerEl.classList.add(["player-contaier"]);
  const playerHTML = `  <div id="music-card">
                        <img
                            src="../${img}"
                            id="music-img"
                            alt="song image"
                        />
                        <h3>${name}</h3>
                        <p>${artist}</p>
                    </div>

                    <div class="music-player">
                        <audio controls id="mp3" autoplay="false">
                            <source src="../${source}" type="audio/mpeg" />
                            <p>mp3 not supported by your browser</p>
                        </audio>
                    </div>

                    <div id="controls">
                        <button id="prev-btn">prev</button>
                        <button id="next-btn">next</button>
                    </div>

                    <button id="addtoplaylist">Add To Playlist</button>`;
  playerContainerEl.innerHTML = playerHTML;
  mainSecPlayerEl.appendChild(playerContainerEl);

  //add click listener tp pre,next, addtoplaylist butto
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  const addTopPLBtn = document.getElementById("addtoplaylist");
  prevBtn.addEventListener("click", (evt) => {
    evt.stopPropagation();
    evt.preventDefault();
    prevBtnClickListener(songID);
  });
  nextBtn.addEventListener("click", (evt) => {
    evt.stopPropagation();
    evt.preventDefault();
    nextBtnClickListener(songID);
  });
  addTopPLBtn.addEventListener("click", (evt) => {
    evt.stopPropagation();
    evt.preventDefault();
    addToPLBtnClickListener(songID);
  });
}

function prevBtnClickListener(songID) {
  let prevSongID = getPrevSongID(songID);
  updateCurrSong(prevSongID);
}

function nextBtnClickListener(songID) {
  let nextSongID = getNextSongID(songID);
  updateCurrSong(nextSongID);
}

function addToPLBtnClickListener(songID) {}

export { updatePlayerUI };
