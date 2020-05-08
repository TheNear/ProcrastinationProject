import { combineReducers } from 'redux';
import { taskList } from './taskList/reducer';

export default combineReducers({
  taskList,
})