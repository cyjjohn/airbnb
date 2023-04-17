import { getFilterItem } from '@/services/modules/entire'

//可以单独放在一个常量管理的文件中
export const FETCH_FILTER_LIST = 'FETCH_FILTER_LIST'
export const CHANGE_CURRENT_PAGE = 'change_current_page'
export const CHANGE_ROOM_List = 'change_room_list'
export const CHANGE_TOTAL_COUNT = 'change_total_count'
export const CHANGE_IS_LOADING = 'change_is_loading'

//actions
/* 原始写法
export const fetchFilterListAction = (offset,size) => {
  return (dispatch,getState) => {
    getFilterItem(offset,size).then(res => {
      //...
    })
  }
} 
*/
export const fetchFilterListAction = (offset=0, size=20) => async (dispatch, getState) => {
  dispatch(changeIsLoading(true))
  //先修改currentPage
  dispatch(changeCurrentPage(offset))
  //获取列表和总数
  const { list, totalCount } = await getFilterItem(offset, size)
  dispatch(changeRoomList(list))
  dispatch(changeTotalCount(totalCount))
  dispatch(changeIsLoading(false))
}
export const changeCurrentPage = (currentPage) => ({
  type: CHANGE_CURRENT_PAGE,
  currentPage
})
export const changeRoomList = (payload) => ({
  type: CHANGE_ROOM_List,
  payload
})
export const changeTotalCount = (totalCount) => ({
  type: CHANGE_TOTAL_COUNT,
  totalCount
})
export const changeIsLoading = (isLoading) => ({
  type: CHANGE_IS_LOADING,
  isLoading
})
