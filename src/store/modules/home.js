import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { 
  getHomeGoodPriceInfo,
  getHighScoreInfo,
  getDiscount,
  getLongfor, 
} from "@/services";

const slice = createSlice({
  name:'home',
  initialState:{
    goodPriceInfo:{},
    highScoreInfo:{},
    discount:{},
    longfor:{},
  },
  //普通reducer
  reducers:{
    
  },
  //处理异步请求返回内容
  extraReducers:(builder)=>{
    builder
    .addCase(fetchGoodPriceInfoAction.fulfilled,(state,{payload})=>{
      state.goodPriceInfo = payload
    })
    .addCase(fetchHighScoreInfoAction.fulfilled,(state,{payload})=>{
      state.highScoreInfo = payload
    })
    .addCase(fetchDiscountAction.fulfilled,(state,{payload})=>{
      state.discount = payload
    })
    .addCase(fetchLongforAction.fulfilled,(state,{payload})=>{
      state.longfor = payload
    })
  }
})

//导出后端请求方法
export const fetchGoodPriceInfoAction = createAsyncThunk('fetchGoodPriceInfo',async ()=>{
  const res = await getHomeGoodPriceInfo()
  return res;
})
export const fetchHighScoreInfoAction = createAsyncThunk('fetchHighScoreInfo',async ()=>{
  const res = await getHighScoreInfo()
  return res;
})
export const fetchDiscountAction = createAsyncThunk('fetchDiscount',async ()=>{
  const res = await getDiscount()
  return res;
})
export const fetchLongforAction = createAsyncThunk('fetchLongfor',async ()=>{
  const res = await getLongfor()
  return res;
})
//导出方法
export const {} = slice.actions;
//导出reducer
export default slice.reducer;