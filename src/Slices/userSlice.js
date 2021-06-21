import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  user: null
};


if(localStorage.getItem('user')){
    const currUser= JSON.parse(localStorage.getItem('user'));

    initialState.user= currUser;
}


export const userSlice = createSlice({
  name: 'user',
  initialState,

  reducers: {
    setUser: (state, action) => {
      state.user= action.payload.user
      localStorage.setItem('user', JSON.stringify(state.user));
    },
   removeUser: (state) => {
       state.user= null;
       localStorage.removeItem('user');
   },
   
  },
  
});

export const { setUser, removeUser } = userSlice.actions;


export const selectUser = (state) => state.user.user;




export default userSlice.reducer;