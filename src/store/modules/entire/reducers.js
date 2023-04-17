import { combineReducers } from "redux";
import * as actionType from "./actions";

const initState={
  currentPage:0, //当前页码
  roomList:[], //后台过滤过的房间列表
  totalCount:0, //查询到的总数
}
//分开写函数方式
function changeRoomList(state,{payload}){
  return {...state,roomList:payload}
}
const entireReducer = ((state=initState,action)=>{
  switch(action.type){
    case actionType.CHANGE_CURRENT_PAGE:
      return {...state,currentPage:action.currentPage}
    case actionType.CHANGE_ROOM_List:
      return changeRoomList(state,action);
    case actionType.CHANGE_TOTAL_COUNT:
      return {...state,totalCount:action.totalCount}
    case actionType.CHANGE_IS_LOADING:
      return {...state,isLoading:action.isLoading}
    default:
      return state
  }
})

//可以分开单独写一个汇总reducers用的index.js,rtk工具自动combine了不需要自己调用
const rootReducer = combineReducers({
  entireReducer,
})

export default entireReducer;