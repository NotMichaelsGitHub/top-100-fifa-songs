import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Button from 'react-bootstrap/Button';

import { rankSong } from '../../reducers/actions'

const TierPickerButton = (props)=> {

  const dynamicColor = (d) => {
    if( (d === 'S+') && d === props.rank){
      return 'info'
    }
    else if( (d === 'S' || d === 'A') && d === props.rank){
      return 'success'
    }
    else if( (d === 'B' || d === 'C') && d === props.rank){
      return 'warning'
    }
    else if( (d === 'D' || d === 'F') && d === props.rank){
      return 'danger'
    }
    else{
      return 'outline-dark'
    }
  }

  return(
    <Button
      variant={dynamicColor(props.dynamic)}
      key={props.keyName}
      onClick={() => {
        props.rankSong(
          props.name,
          props.artist,
          props.rank,
          props.game
        )}}
    >
      {props.rank}
    </Button>
  )
}

function mapStateToProps(state){
  return{
    selectedSongs: state.selectedSongs,
    top100: state.top100
  }
}

function matchDispatchtoProps(dispatch){
  return bindActionCreators({
    rankSong : rankSong
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchtoProps)(TierPickerButton)