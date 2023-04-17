import RoomItem from '@/components/room-item';
import { changeDetailInfoAction } from '@/store/modules/detail';
import { Skeleton } from '@mui/material';
import PropTypes from 'prop-types'
import React, { memo,useCallback } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { EntireRoomsWrapper,SkeletonWrapper } from './style'

const EntireRooms = memo((props) => {
  const { roomList, totalCount, isLoading } = props;

  const navigate = useNavigate()
  const dispatch =useDispatch()
  const roomItemClick = useCallback((data) => {
    dispatch(changeDetailInfoAction(data))
    navigate("/detail")
  }, []
  )


  return (
    <EntireRoomsWrapper>
      <h2 className='title'>{totalCount}多处住所</h2>
      {/* 发送网络请求时展示骨架屏 */
        isLoading ? (
          <SkeletonWrapper>
            {
              Array.from(Array(20)).map((item, index) => (
                <div key={index} className='list'>
                  <Skeleton variant="rectangular" height={(window.innerWidth - 120) * 2 / 3 / 5} />
                  <Skeleton />
                  <Skeleton />
                  <Skeleton width="60%" />
                </div>
              ))
            }
          </SkeletonWrapper>
        ) : (
          <ul className="list">
            {
              roomList?.map(item => (
                <RoomItem key={item._id} data={item} itemWidth={'20%'} itemClick={e=>roomItemClick(item)} />
              ))
            }
          </ul>
        )
      }

    </EntireRoomsWrapper>
  )
})

EntireRooms.propTypes = {}

export default EntireRooms