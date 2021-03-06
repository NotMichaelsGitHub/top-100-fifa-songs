import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';

const TierTable = (props) => {

  const defaultOpen = () => {
    if(props.length > 0){
      return "0";
    }
    return null;
  }

  return (
    <div>
      <Accordion defaultActiveKey={defaultOpen} flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header> 
            {props.group}
          </Accordion.Header>
          <Accordion.Body>
            <Table hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Artist</th>
                    <th>Year</th>
                  </tr>
                </thead>
              <tbody>
              {props.songs.map((song, index) => {
                return (
                  <tr key={index + 'row'}>
                    <td key={index + 'position'} className={'col-1'}>{song.position}</td>
                    <td key={index + 'name'} className={'col-2'}>{song.name}</td>
                    <td key={index + 'artist'} className={'col-2'}>{song.artist}</td>
                    <td key={index + 'year'} className={'col-2'}>{song.year}</td>
                  </tr>
                )
              })}
              </tbody>
            </Table>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  )
}

export default (TierTable)