import { createSlice } from '@reduxjs/toolkit';

export const catSlice=createSlice({
  name:'cats',
  initialState:{
    cats:[],
    isLoading:false,
    number:10,
  },
  reducers:{
    getCatsFetch:(state)=>{
      state.isLoading=true
    },
    getCatsSuccess:(state,action)=>{
      state.cats=action.payload.slice(0,state.number)
      state.isLoading=false;
    },
    getCatsFailure:(state)=>{
      state.isLoading=false;
    },
    getCatsNumber: (state)=>{
      state.number=state.number+10
    }

  }
})

export const {getCatsFetch,getCatsSuccess,getCatsFailure,getCatsNumber} = catSlice.actions;

export default catSlice.reducer;
