import { createStore } from 'redux';
import { userReduser } from './users/usersReduser';

export const store = createStore(userReduser);

