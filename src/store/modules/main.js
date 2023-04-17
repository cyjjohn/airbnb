import { createSlice } from '@reduxjs/toolkit'

const slice=createSlice({
  name:'main',
  initialState:{
    headerConfig:{
      isFixed:true,
      topAlpha:false,
    }
  },
  reducers:{
    changeHeaderConfigAction(state,{payload}){
      state.headerConfig={...payload}
    }
  }
})

export const {changeHeaderConfigAction} = slice.actions

export default slice.reducer