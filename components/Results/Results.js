import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Button from 'react-bootstrap/Button';

import TierTable from './TierTable';

const Results = (props) => {

  let dividedSongs = {
    'SPlus': [],
    'S': [],
    'A': [],
    'B': [],
    'C': [],
    'D': [],
    'F': []
  };

  props.selectedSongs.map((song, index) => {
    if(song.rank === 'S+'){
      dividedSongs.SPlus.push({
        ...song,
        position: index + 1
      });
    }
    else if(song.rank === 'S'){
      dividedSongs.S.push({
        ...song,
        position: index + 1
      });
    }
    else if(song.rank === 'A'){
      dividedSongs.A.push({
        ...song,
        position: index + 1
      });
    }
    else if(song.rank === 'B'){
      dividedSongs.B.push({
        ...song,
        position: index + 1
      });
    }
    else if(song.rank === 'C'){
      dividedSongs.C.push({
        ...song,
        position: index + 1
      });
    }
    else if(song.rank === 'D'){
      dividedSongs.D.push({
        ...song,
        position: index
      });
    }
    else if(song.rank === 'F'){
      dividedSongs.F.push({
        ...song,
        position: index + 1
      });
    }
  })

  console.log(dividedSongs);

  return (
    <div>
      <TierTable group={'S+'} songs={dividedSongs.SPlus} />
      <TierTable group={'S'} songs={dividedSongs.S} />
      <TierTable group={'A'} songs={dividedSongs.A} />
      <TierTable group={'B'} songs={dividedSongs.B} />
      <TierTable group={'C'} songs={dividedSongs.C} />
      <TierTable group={'D'} songs={dividedSongs.D} />
      <TierTable group={'F'} songs={dividedSongs.F} />
    </div>
  )
}

function mapStateToProps(state){
  return{
    selectedSongs: state.selectedSongs,
    top100: state.top100
  }
}


export default connect(mapStateToProps)(Results)