function updatePlayer(currSong) {
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
                        <button>prev</button>
                        <button>next</button>
                    </div>

                    <button id="addtoplaylist">Add To Playlist</button>`;
  playerContainerEl.innerHTML = playerHTML;
  mainSecPlayerEl.appendChild(playerContainerEl);
}

export { updatePlayer };
