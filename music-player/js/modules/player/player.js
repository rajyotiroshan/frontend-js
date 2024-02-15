function updatePlayerUI(currSong) {
  console.log(currSong);
  let { name, artist, img, source } = currSong;
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
  prevBtn.addEventListener("click", prevBtnClickListener);
  nextBtn.addEventListener("click", nextBtnClickListener);
  addTopPLBtn.addEventListener("click", addToPLBtnClickListener);
}
function prevBtnClickListener(evt) {
  evt.stopPropagation();
  evt.preventDefault();
  //
  console.log("prev");
}

function nextBtnClickListener(evt) {
  evt.stopPropagation();
  evt.preventDefault();
  //
  console.log("next");
}

function addToPLBtnClickListener(evt) {
  evt.stopPropagation();
  evt.preventDefault();
  //
  console.log("addtopl");
}

export { updatePlayerUI };
