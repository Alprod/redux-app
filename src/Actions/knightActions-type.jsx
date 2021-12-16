import {
    ADD_KNIGHT,
    DELETE_KNIGHT,
    REVERT_KNIGHT,
    SET_KNIGHT} from "../Constants/constants";

export const set_knight = (payload) => {
  return {
      type: SET_KNIGHT,
      payload
  }
}

export const add_knight = () => {
  return {
      type: ADD_KNIGHT,
  }
}

export const delete_knight = (payload) => {
  return {
      type: DELETE_KNIGHT,
      payload
  }
}

export const revert_knight = (payload) => {
  return {
      type: REVERT_KNIGHT,
      payload
  }
}