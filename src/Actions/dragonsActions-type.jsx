import {
    SET_DRAGON,
    ADD_DRAGON,
    DELETE_DRAGON,
    REVERT_DRAGON_LIST,
    SET_LOG
} from "../Constants/constants";
import moment from "moment";

//payload nous permet de stoker les données
export const set_dragon = payload => {
  return {
      type: SET_DRAGON,
      payload
  }
}
export const add_dragon = () => {
  return {
      type: ADD_DRAGON
  }
}

export const delete_dragon = payload => {
  return {
      type: DELETE_DRAGON,
      payload
  }
}

export const revert_dragon = () => {
  return {
      type: REVERT_DRAGON_LIST,
  }
}

export const check_dragon_exists = (dragon, dragonList) => {
  if (dragonList.length === 0) return false;
  if (dragonList.find(d => d === dragon)) return true;
}

export const set_log = payload => {
  return {
      type: SET_LOG,
      payload
  }
}

export const dateTimeFormatter = () => {
    return moment().format('dd MMM, yyyy HH:mm')
}