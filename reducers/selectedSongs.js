const selectedSongs = [];

const sortingKey = {
  'S+': 1,
  'S': 2,
  'A': 3,
  'B': 4,
  'C': 5,
  'D': 6,
  'F': 7
}

export default function SelectedSongs(state = selectedSongs, action){
  switch(action.type){
    case 'RANK_SONG_CLICKED':
      return add(state, action)

    case 'MOVE_SONG_UP':
      return moveUp(state, action)

    case 'MOVE_SONG_DOWN':
      return moveDown(state, action)

    case 'CHANGE_RANK':
      return changeRank(state, action)

    default:
      return state
  }
}

const add = (state, action) =>{
  const index = state.findIndex(element => {
    if ((element.name === action.payload.name) && (element.artist === action.payload.artist)) {
      return true;
    }
  });

  if(index > -1){
    state[index].rank = action.payload.rank
    return(
      sort(
        [
          ...state
        ]
      )
    )
  }

  if(index === -1){
    return(
      sort(
        [
          ...state,
          {
            "name": action.payload.name,
            "artist": action.payload.artist,
            "rank": action.payload.rank,
            "year": action.payload.year
          }
        ]
      )
    )
  }
}

const sort = (newState) => {
  newState.sort(compareNumbers)
  return(newState);
}

function compareNumbers(a, b) {
  return sortingKey[a.rank] - sortingKey[b.rank];
}

// const moveUp = (state, action) => {
//   const from = (state.findIndex(x => x.name === action.payload.name));
//   const to = from - 1;
//
//   if(to > -1){
//     return(
//       swap([ ...state ], from, to)
//     );
//   }
//
//   return(state);
// }
//
// const swap = (s, a, b) => {
//     const temp = s[a];
//     s[a] = s[b];
//     s[b] = temp;
//     return (s)
// }

const moveUp = (state, action) => {
  const from = (state.findIndex(x => x.name === action.payload.name));
  const to = from - 1;

  if(to > -1){
    let f = state.splice(from, 1)[0];
    f = checkRanking(f, state[to]);
    state.splice(from - 1, 0, f);
  }

  return([
    ...state
  ]);
}

const moveDown = (state, action) => {
  const from = (state.findIndex(x => x.name === action.payload.name));
  const to = from + 1;

  if(to <= state.length -1){
    let f = state.splice(from, 1)[0];
    f = checkRanking(f, state[from]);
    state.splice(from + 1, 0, f);
  }

  return([
    ...state
  ]);
}

const checkRanking = (a, b) => {
  if(sortingKey[a.rank] != sortingKey[b.rank]){
    a.rank = b.rank
  };

  return (a)
}

const changeRank = (state, action) => {
  const index = state.findIndex(element => {
    if ((element.name === action.payload.name) && (element.artist === action.payload.artist)) {
      return true;
    }
  });

  if(action.payload.oldRank != action.payload.newRank){
    state[index].rank = action.payload.newRank;

  return(
    sort(
      [
        ...state
      ]
    )
  )}

  return(state)
}