import { combineReducers } from 'redux';
import SelectionReducer from './SelectionReducer';
import LibraryReducer from './LibraryReducer';

export default combineReducers({
  libraries: LibraryReducer,
  selectedLibraryId: SelectionReducer
});
