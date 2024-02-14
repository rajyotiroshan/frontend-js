import { songs } from "./modules/songsData.js";
import {
  createSongsListUI,
  createGenreSelectUI,
} from "./modules/allsongs/allsongs.js";

createGenreSelectUI(songs);
createSongsListUI(songs);
