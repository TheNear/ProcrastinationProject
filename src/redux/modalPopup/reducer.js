import { PUSH_EVENT_POPUP, DELETE_EVENT_POPUP } from './types';

const initialState = []

export const modalPopupReducer = (state = initialState, action) => {
  switch (action.type) {
    case PUSH_EVENT_POPUP:
      return state.concat(action.payload)
    case DELETE_EVENT_POPUP:
      return [...state].filter(item => item.id !== action.payload);
    default:
      return state;
  }
}
