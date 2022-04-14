import React, {useState} from 'react';
import {connect} from 'react-redux';

import Button from 'react-bootstrap/Button';
import { bindActionCreators } from 'redux';
import { importStore } from '../../reducers/actions';

const Import = (props) => {

  const currentState = props.selectedSongs;

  const [importTextArea, setImportTextArea] = useState(" ");

  return (
    <div className='row'>
      <div className='col-6'>
        <div>
          <h2>Import</h2>
        </div>
        <div>
          <span>(it works the page just isnt refreshing for some reason)</span>
        </div>
        <br></br>

        <textarea 
          className='container form-control' 
          rows="7"
          value={importTextArea}
          onChange={e => setImportTextArea(e.target.value)}>
        </textarea>

        <br></br>
        <Button
          onClick={()=>{
            props.importStore(importTextArea)
          }}
        >
          Submit
        </Button>
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

function matchDispatchtoProps(dispatch){
  return bindActionCreators({
    "importStore": importStore
  }, dispatch)
}

export default connect(mapStateToProps,matchDispatchtoProps)(Import)