import React from 'react';
import allSongs from '../../reducers/all-songs.json';
import links from '../../reducers/links.json';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import YearCard from './YearCard';

const Tracker = () => {

  return (
    <div>
      <YearCard year={allSongs["fifa 13"]} game={'Fifa 13'} spotify={links["22"]}/>
      <YearCard year={allSongs["fifa 14"]} game={'Fifa 14'} spotify={links["14"]} />
      <YearCard year={allSongs["fifa 15"]} game={'Fifa 15'} spotify={links["15"]} />
      <YearCard year={allSongs["fifa 16"]} game={'Fifa 16'} spotify={links["16"]}/>
      <YearCard year={allSongs["fifa 17"]} game={'Fifa 17'} spotify={links["17"]}/>
      <YearCard year={allSongs["fifa 18"]} game={'Fifa 18'} spotify={links["18"]}/>
      <YearCard year={allSongs["fifa 19"]} game={'Fifa 19'} spotify={links["19"]}/>
      <YearCard year={allSongs["fifa 20"]} game={'Fifa 20'} spotify={links["20"]}/>
      <YearCard year={allSongs["fifa 21"]} game={'Fifa 21'} spotify={links["21"]}/>
      <YearCard year={allSongs["fifa 22"]} game={'Fifa 22'} spotify={links["22"]}/>
    </div>
  )
}

export default Tracker