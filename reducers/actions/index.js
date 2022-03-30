export const rankSong = (name, artist, rank, year) => {
  return {
    type: "RANK_SONG_CLICKED",
    payload: {
      "name": name,
      "artist": artist,
      "rank": rank,
      "year": year
    }
  };
};

export const addCount = () => {
  return {
    type: "USER_CLICKED",
  };
};

export const moveUp = (name, artist, rank, year) => {
  return {
    type: "MOVE_SONG_UP",
    payload: {
      "name": name,
      "artist": artist,
      "rank": rank,
      "year": year
    }
  };
};

export const moveDown = (name, artist, rank, year) => {
  return {
    type: "MOVE_SONG_DOWN",
    payload: {
      "name": name,
      "artist": artist,
      "rank": rank,
      "year": year
    }
  };
};

export const changeRank = (name, artist, rank, newRank) => {
  return {
    type: "CHANGE_RANK",
    payload: {
      "name": name,
      "artist": artist,
      "oldRank": rank,
      "newRank": newRank
    }
  };
};

export const importStore = (newState) => {

  return {
    type: "IMPORT_STORE",
    payload: {
      "newState": newState
    }
  }
}