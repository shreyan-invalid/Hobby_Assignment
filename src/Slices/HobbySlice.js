import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  hobbies: []
};


if(localStorage.getItem('hobbies')){
    
    const currHobbies= JSON.parse(localStorage.getItem('hobbies'))
    initialState.hobbies= currHobbies;
    
}

export const hobbySlice = createSlice({
  name: 'hobby',
  initialState,

  reducers: {
    addHobby: (state, action) => {
      state.hobbies= [...state.hobbies, action.payload.hobby]
      console.log(state.hobbies);
      const updatedHobbies= JSON.stringify(state.hobbies);
      localStorage.setItem('hobbies', updatedHobbies);
    },
   deleteHobby: (state, action) => {
       state.hobbies= state.hobbies.filter(currHobby => currHobby.id!== action.payload.id);
       const updatedHobbies= JSON.stringify(state.hobbies);
       localStorage.setItem('hobbies', updatedHobbies);
   },
   editHobby: (state, action) => {
       state.hobbies= state.hobbies.filter(currHobby => currHobby.id!== action.payload.hobby.id);
       state.hobbies= [...state.hobbies, action.payload.hobby];
       const updatedHobbies= JSON.stringify(state.hobbies);
       localStorage.setItem('hobbies', updatedHobbies);
   }
  },
  
});

export const { addHobby, deleteHobby, editHobby } = hobbySlice.actions;


export const selectHobbies = (state) => state.hobby.hobbies;




export default hobbySlice.reducer;