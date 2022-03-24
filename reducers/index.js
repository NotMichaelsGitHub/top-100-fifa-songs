import { combineReducers } from 'redux';
import SelectedSongs from './selectedSongs';
import Top100 from './top100';

const allReducers = combineReducers({
  selectedSongs: SelectedSongs,
  top100: Top100
})

export default allReducers