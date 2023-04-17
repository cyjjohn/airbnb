import PropTypes from 'prop-types'
import React, { memo, useEffect, useCallback } from 'react'
import EntireFilter from './entire-filter'
import EntireRooms from './entire-rooms'
import EntirePagination from './entire-pagination'
import { EntireWrapper } from './style'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { changeCurrentPage, fetchFilterListAction } from '@/store/modules/entire/actions'
import { changeHeaderConfigAction } from '@/store/modules/main'

const Entire = memo((props) => {
  const {
    currentPage,
    roomList,
    totalCount,
    isLoading
  } = useSelector(state => ({
    currentPage: state.entire.currentPage,
    roomList: state.entire.roomList,
    totalCount: state.entire.totalCount,
    isLoading: state.entire.isLoading,
  }), shallowEqual)
  const dispatch = useDispatch();
  //初始化 第一次请求
  useEffect(() => {
    dispatch(fetchFilterListAction())
    dispatch(changeHeaderConfigAction({isFixed:true,topAlpha:false})) //修改HeaderConfig
  }, [dispatch])
  //分页切换发起请求
  const pageChange = useCallback(
    (page) => {
      dispatch(fetchFilterListAction(page, 20))
      window.scrollTo(0, 0)
    },
    [],
  )

  return (
    <EntireWrapper>
      <EntireFilter />
      <EntireRooms roomList={roomList} totalCount={totalCount} isLoading={isLoading} />
      <EntirePagination
        currentPage={currentPage}
        pageSize={20}
        totalCount={totalCount}
        pageChange={pageChange}
      />
    </EntireWrapper>
  )
})

Entire.propTypes = {}

export default Entire