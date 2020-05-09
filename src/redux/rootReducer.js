import { combineReducers } from 'redux';
import { taskList } from './taskList/reducer';
import { modalPopupReducer } from './modalPopup/reducer';

export default combineReducers({
  taskList,
  modalPopupReducer,
})