import { Pagination } from '@mui/material'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { EntirePaginationWrapper } from './style'

const EntirePagination = memo((props) => {
  const {totalCount=0,currentPage,pageSize,pageChange} = props

  const totalPage=Math.ceil(totalCount/pageSize)

  const handleChange = (event,value)=>{
    //索引从0开始 page值要减1
    pageChange(value-1)
  }

  return (
    <EntirePaginationWrapper>
      <Pagination count={15} onChange={handleChange} />
      <span className='info'>{`第 ${pageSize*currentPage+1} ~ ${pageSize*(currentPage+1)} 个房源，共超过 ${totalCount} 个`}</span>
    </EntirePaginationWrapper>
  )
})

EntirePagination.propTypes = {}

export default EntirePagination