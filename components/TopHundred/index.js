import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Dropdown, DropdownButton } from 'react-bootstrap';

import { moveUp, moveDown, changeRank } from '../../reducers/actions';

const index = (props) => {

  return (
    <div>
       <Table hover className="text-center">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Artist</th>
            <th>Year</th>
            <th colSpan={2}>Move it</th>
          </tr>
        </thead>
        <tbody>
        {props.selectedSongs.map((song, index) => {
          return (
            <tr key={index + 'row'}>
              <td className={'col-1 align-middle'} key={index + 'pos'}>{index + 1}</td>
              <td className={'col-2 align-middle'} key={index + 'name'}>{song.name}</td>
              <td className={'col-2 align-middle'} key={index + 'artist'}>{song.artist}</td>
              <td className={'col-1 align-middle'} key={index + 'year'}>{song.year}</td>

              <td className={'col-1'} key={index + 'rank'}>
                <DropdownButton id="dropdown-basic-button" title={song.rank} variant='outline-dark'>
                  <Dropdown.Item
                    onClick={() => {props.changeRank(
                      song.name,
                      song.artist,
                      song.rank,
                      "S+"
                    )}}>
                    S+
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {props.changeRank(
                      song.name,
                      song.artist,
                      song.rank,
                      "S"
                    )}}>
                    S
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {props.changeRank(
                      song.name,
                      song.artist,
                      song.rank,
                      "A"
                    )}}>
                    A
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {props.changeRank(
                      song.name,
                      song.artist,
                      song.rank,
                      "B"
                    )}}>
                    B
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {props.changeRank(
                      song.name,
                      song.artist,
                      song.rank,
                      "C"
                    )}}>
                    C
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {props.changeRank(
                      song.name,
                      song.artist,
                      song.rank,
                      "D"
                    )}}>
                    D
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {props.changeRank(
                      song.name,
                      song.artist,
                      song.rank,
                      "F"
                    )}}>
                    F
                  </Dropdown.Item>
                </DropdownButton>
              </td>

              <td className={'col-1'}>

                <Button variant='outline-dark'
                  key={index + 'UpButton'}
                  onClick={() => {props.moveUp(
                    song.name,
                    song.artist,
                    song.rank
                  )}}
                >
                  +
                </Button>{' '}

                <Button variant='outline-dark'
                  key={index + 'DownButton'}
                  onClick={() => {props.moveDown(
                    song.name,
                    song.artist,
                    song.rank,
                    song.year
                  )}}
                >
                  -
                </Button>{' '}
              </td>
            </tr>
            )
          })}
        </tbody>
       </Table>
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
    moveUp : moveUp,
    moveDown: moveDown,
    changeRank: changeRank
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchtoProps)(index)