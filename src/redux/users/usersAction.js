import { USER_ADD, USER_DELETE } from './usersTypes';

export const addAction = (user)=>{
    return {
      type: USER_ADD,
      payload: user,
    };
}
export const addDelete = (id)=>{
      return {
        type: USER_DELETE,
        payload: id,
      };
}