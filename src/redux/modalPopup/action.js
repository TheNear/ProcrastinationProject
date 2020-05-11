import { PUSH_EVENT_POPUP, DELETE_EVENT_POPUP } from "./types";

export const initPopupEvent = (message, type) => ({
  type: PUSH_EVENT_POPUP,
  payload: {
    type,
    message,
    id: `${Date.now()}id`,
  },
});

export const deleteEvenet = (id) => ({
  type: DELETE_EVENT_POPUP,
  payload: id,
});
