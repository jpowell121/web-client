import {
  ADD_USER,
  REMOVE_USER,
} from "../actions/users";
import { RECEIVE_DATA } from "../actions/shared";

export default function users(state = [], action) {
  switch (action.type) {
    case ADD_USER:
      return state.concat([action.user]);
    case REMOVE_USER:
      return state.filter((user) => user.id_users !== action.id_users);
    case RECEIVE_DATA:
      return action.users;
    default:
      return state;
  }
}