import { SET_ALERT, REMOVE_ALERT } from "./types";
import uuid from "uuid";

export const setAlert = (valid, alertType, timeout = 1500) => dispatch => {
  const id = uuid.v4();
  dispatch({
    type: SET_ALERT,
    payload: { valid, alertType, id }
  });
  setTimeout(() => {
    dispatch({
      type: REMOVE_ALERT,
      payload: id
    });
  }, timeout);
};
