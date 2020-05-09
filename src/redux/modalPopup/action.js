import { PUSH_EVENT_POPUP, DELETE_EVENT_POPUP } from "./types";

export const initErrorEvent = (message) => ({
  type: PUSH_EVENT_POPUP,
  payload: {
    type: "error",
    message,
  },
});

export const initWarningEvent = (message) => ({
  type: PUSH_EVENT_POPUP,
  payload: {
    type: "warn",
    message,
  },
});

export const initSuccessEvent = (message) => ({
  type: PUSH_EVENT_POPUP,
  payload: {
    type: "success",
    message,
  },
});

export const deleteEvenet = (id) => ({
  type: DELETE_EVENT_POPUP,
  payload: id,
});
