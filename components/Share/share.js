import React from 'react';
import {connect} from 'react-redux';


const Import = (props) => {
  return (
    <div>
      Share
    </div>
  )
}

function mapStateToProps(state){
  return{
    selectedSongs: state.selectedSongs
  }
}

export default connect(mapStateToProps)(Import)