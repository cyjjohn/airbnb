import IconMoreArrow from '@/assets/svg/IconMoreArrow'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { FooterWrapper } from './style'

const SectionFooter = memo((props) => {
  const {name} = props;

  let text = "显示全部"
  if(name){
    text = `查看更多${name}房源`
  }

  //固定跳转
  const navigate = useNavigate();
  const moreClick=()=>{
    navigate("/entire")
  }

  return (
    <FooterWrapper color={name?"#00848A":"#000"} target="_blank" onClick={moreClick}>
      <span className='text'>{text}</span>
      <IconMoreArrow />
    </FooterWrapper>
  )
})

SectionFooter.propTypes = {}

export default SectionFooter