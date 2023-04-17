import PropTypes from 'prop-types'
import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import { searchListInDom } from '@/utils/common'
import { ScrollWrapper } from './style'
import IconArrowLeft from '@/assets/svg/IconArrowLeft'
import IconArrowRight from '@/assets/svg/IconArrowRight'

const Scroll = memo((props) => {
  const {
    step = 1,
  } = props;

  const [showLeft, setShowLeft] = useState(false)
  const [showRight, setShowRight] = useState(false)

  const indexRef=useRef(0)
  const scrollRef = useRef()
  const totalDistanceRef = useRef(0) //可移动总距离，与重渲染无关，利用ref存储

  //组件渲染完毕时判断是否要渲染右侧按钮
  useEffect(() => {
    const scrollWidth = scrollRef.current.scrollWidth;
    const clientWidth = scrollRef.current.clientWidth;
    const totalDistance = scrollWidth - clientWidth;
    totalDistanceRef.current = totalDistance
    setShowRight(totalDistance > 0)
  }, [props.children])

  const leftClick = () => {
    scrollPosition(indexRef.current - step)
  }
  const rightClick = () => {
    scrollPosition(indexRef.current + step)
  }
  const scrollPosition = useCallback(index => {
    const newIndex = index; //注意不要修改原始变量
    const { offsetLeft } = searchListInDom(scrollRef.current)[newIndex]; //计算出后一个元素离父容器左边缘的距离
    scrollRef.current.style.transform = `translate(-${offsetLeft}px)` //移动
    indexRef.current=newIndex; //记录新的index
    setShowRight(totalDistanceRef.current > offsetLeft) //超过可移动总距离时不在显示右侧按钮
    setShowLeft(offsetLeft > 0)
  }, [])

  return (
    <ScrollWrapper>
      {showLeft && <button className="left" onClick={leftClick}><IconArrowLeft /></button>}
      {showRight && <button className="right" onClick={rightClick}><IconArrowRight /></button>}

      <div className="content">
        <div className="scroll" ref={scrollRef}>
          {props.children}
        </div>
      </div>
    </ScrollWrapper>
  )
})

Scroll.propTypes = {}

export default Scroll