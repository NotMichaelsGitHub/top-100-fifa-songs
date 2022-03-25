import React from 'react';
import {connect} from 'react-redux';

import Button from 'react-bootstrap/Button';

const Import = (props) => {

  const currentState = props.selectedSongs;

  return (
    <div className='row'>
      <div className='col-6'>
        <div>
          <h2>Import</h2>
        </div>
        <div>
          <span>(doesnt work yet)</span>
        </div>
        <br></br>

        <textarea 
          className='container form-control' 
          rows="7" >
        </textarea>

        <br></br>
        <Button>Submit</Button>
      </div>
      <div className='col-6'>
        <div>
          <h2>Export</h2>
        </div>
        <div>
          <span>Copy this block of code for later so you can save your progress</span>
        </div>
        <br></br>

        <textarea 
          className='container form-control' 
          rows="7" 
          defaultValue={JSON.stringify(currentState)}>
        </textarea>

      </div>
    </div>
  )
}

function mapStateToProps(state){
  return{
    selectedSongs: state.selectedSongs
  }
}

export default connect(mapStateToProps)(Import)