import React, { useState }  from 'react';
import {bindActionCreators} from 'redux';
import Link from 'next/link';
import {connect} from 'react-redux';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { rankSong } from '../../reducers/actions/index'
import { addCount } from '../../reducers/actions/index';

import { BsSpotify } from 'react-icons/bs';

import styles from './YearCard.module.css';

import TierPickerButton from './TierPickerButton';

const YearCard = (props) => {

  const [count, setCount] = useState(0);

  let dynamicLabel = (songName) => {
    const index = props.selectedSongs.findIndex(e => {
      if (e.name === songName) {
        return true;
      }
    });

    if(index > -1){
      return props.selectedSongs[index].rank
    } else{
      return '?'
    }
  }

  const rowStyle = (dl) => {
    if(dl != '?'){
      return('bg-light')
    }
    else{
      return('text-dark')
    }
  }

  return(
    <div>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <div>
              <span>{props.game}</span> 
              <span className={styles.yearCardSpotifyLink}>
                <Link href={props.spotify}>
                  <a target="_blank" rel="noopener noreferrer">
                    <BsSpotify></BsSpotify>
                  </a>
                </Link>
              </span>
              <span className={'text-secondary ' + styles.yearCardDescription}> {count} / {props.year.length} </span> 
            </div>
          </Accordion.Header>
          <Accordion.Body>
            <div>
                <button onClick={() => setCount(count + 1)}>
                    Click me
                </button>

              {props.year.map((song, index) => (
                <div className={'row text-center align-items-center mt-2 ' + rowStyle(dynamicLabel(song.name))} key={props.game + 'SongNum' + index}>
                  <div className={'col-1'}>
                    <label key={index + 'name'}> {index+1} </label>
                  </div>
                  <div className={'col-3'}>
                    <label key={index + 'name'}> {song.name} </label>
                  </div>
                  <div className={'col-4'}>
                    <label key={index + 'artist'}> {song.artist} </label>
                  </div>
                  <div className={'col-4'}>
                    <ButtonGroup>
                      <TierPickerButton
                        keyName={index + 'SPlusRanking'}
                        rank={'S+'}
                        name={song.name}
                        artist={song.artist}
                        game={props.game}
                        dynamic={dynamicLabel(song.name)}
                      />
                      <TierPickerButton
                        keyName={index + 'SRanking'}
                        rank={'S'}
                        name={song.name}
                        artist={song.artist}
                        game={props.game}
                        dynamic={dynamicLabel(song.name)}
                        onClick={() => setCount(count + 1)}
                      />
                      <TierPickerButton
                        keyName={index + 'ARanking'}
                        rank={'A'}
                        name={song.name}
                        artist={song.artist}
                        game={props.game}
                        dynamic={dynamicLabel(song.name)}
                        onClick={() => setCount(count + 1)}
                      />
                      <TierPickerButton
                        keyName={index + 'BRanking'}
                        rank={'B'}
                        name={song.name}
                        artist={song.artist}
                        game={props.game}
                        dynamic={dynamicLabel(song.name)}
                        onClick={() => setCount(count + 1)}
                      />
                      <TierPickerButton
                        keyName={index + 'CRanking'}
                        rank={'C'}
                        name={song.name}
                        artist={song.artist}
                        game={props.game}
                        dynamic={dynamicLabel(song.name)}
                        onClick={() => setCount(count + 1)}
                      />
                      <TierPickerButton
                        keyName={index + 'DRanking'}
                        rank={'D'}
                        name={song.name}
                        artist={song.artist}
                        game={props.game}
                        dynamic={dynamicLabel(song.name)}
                        onClick={() => setCount(count + 1)}
                      />
                      <TierPickerButton
                        keyName={index + 'FRanking'}
                        rank={'F'}
                        name={song.name}
                        artist={song.artist}
                        game={props.game}
                        dynamic={dynamicLabel(song.name)}
                        onClick={() => setCount(count + 1)}
                      />
                    </ButtonGroup>
                  </div>
                </div>
              ))}
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
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
    rankSong : rankSong,
    addCount : addCount
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchtoProps)(YearCard)