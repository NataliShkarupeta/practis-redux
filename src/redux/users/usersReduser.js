import { USER_ADD, USER_DELETE } from './usersTypes';



export const userReduser =(state=[],{type,payload})=>{
    switch (type) {
      case USER_ADD:
        return [...state, payload];
      case USER_DELETE:
        return state.filter(user => user.id !== payload)
      default:
        return state;
    }
  
}