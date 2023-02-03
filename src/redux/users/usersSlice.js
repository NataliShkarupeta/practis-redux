import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
  },
  reducers: {
    addUsers: (state, { payload }) => {
      state.users.push(payload);
    },
    deleteUsers: (state, { payload }) => {
      state.users = state.users.filter(user => user.id !== payload);
    },
    toggleStatusUser: (state, { payload }) =>{
      (state.users = state.users.map(user => {
        const status = user.status === 'online' ? 'offline' : 'online';
        return user.id === payload ? { ...user, status } : user;
      }))}
  },
});

export const { addUsers, deleteUsers, toggleStatusUser } = usersSlice.actions;
export default usersSlice.reducer;
