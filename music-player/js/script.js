import { songs } from "./songsData.js";
import {
  createSongsListUI,
  createGenreSelectUI,
} from "./modules/allsongs/allsongs.js";

import { updateCurrSong } from "./modules/state/state.js";

//Onload
createGenreSelectUI(songs);
createSongsListUI(songs);
updateCurrSong(songs[0].id);
