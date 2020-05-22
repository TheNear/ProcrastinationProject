import { PUSH_EVENT_POPUP, DELETE_EVENT_POPUP } from "./types";
import CONST from "../../assets/js/constants";

export const initPopupEvent = ({ message, type, duration }) => ({
  type: PUSH_EVENT_POPUP,
  payload: {
    type,
    message,
    duration: duration || CONST.BASE_SHOW_MODAL_TIME,
    id: `${Date.now()}id`,
  },
});

export const deleteEvent = (id) => ({
  type: DELETE_EVENT_POPUP,
  payload: id,
});
