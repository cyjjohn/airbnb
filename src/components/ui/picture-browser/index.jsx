import React, { memo, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import {SwitchTransition,CSSTransition} from 'react-transition-group'
import CaretDownOutlined from '@/assets/svg/CaretDownOutlined';
import CaretUpOutlined from '@/assets/svg/CaretUpOutlined';
import IconArrowLeft from '@/assets/svg/IconArrowLeft';
import IconArrowRight from '@/assets/svg/IconArrowRight';
import IconClose from '@/assets/svg/IconClose';
import Indicator from '../indicator';
import { BrowserWrapper } from './style'
import classNames from 'classnames';

const PictureBrowser = memo((props) => {
  const {pictureUrls,closeFn} = props;
  const [currentIndex,setCurrentIndex] = useState(0)
  const [isRight,setIsRight] = useState(true)
  const [isExpand,setIsExpand] = useState(true)

  //当图片浏览器渲染时，滚动功能应该失效
  useEffect(()=>{
    document.body.style.overflow="hidden"
    return ()=>{
      document.body.style.overflow="auto"
    }
  },[])

  const closeClick = () => {
    if(closeFn) closeFn()
  }

  const arrowClick = (isRight=true) => {
    let newIndex = isRight ? currentIndex + 1 : currentIndex - 1
    //最小最大值处理
    if(newIndex<0) newIndex=pictureUrls.length-1;
    if(newIndex>pictureUrls.length-1) newIndex=0
    setCurrentIndex(newIndex)
    setIsRight(isRight)
  }

  const indicatorItemClick = (index) => {
    if(index<currentIndex) setIsRight(false)
    else setIsRight(true)
    setCurrentIndex(index)
  }

  return (
    <BrowserWrapper isRight={isRight} isExpand={isExpand}>
      <div className="top">
        <div className="close-btn" onClick={closeClick}>
          <IconClose />
        </div>
      </div>
      <div className="content">
        <div className="btn left" onClick={e=>arrowClick(false)}>
          <IconArrowLeft />
        </div>
        <div className="picture">
          <SwitchTransition mode="out-in">
            <CSSTransition
              key={pictureUrls[currentIndex]}
              classNames="fade"
              timeout={150}
            >
              <img src={pictureUrls[currentIndex]} alt="" />
            </CSSTransition>
          </SwitchTransition>
        </div>
        <div className="btn right" onClick={e=>arrowClick(true)}>
          <IconArrowRight />
        </div>
      </div>
      <div className={classNames("indicator")}>
        <div className="info">
          <div className="desc">{`${currentIndex+1}/${pictureUrls.length} 图片${currentIndex+1}`}</div>
          <div className="control" onClick={e=>setIsExpand(!isExpand)}>
            {isExpand?"隐藏":"展开"}照片列表
            {isExpand?<CaretDownOutlined />:<CaretUpOutlined />}
            </div>
        </div>
        <div className={classNames("list",{"hide":!isExpand})}>
          <Indicator currentIndex={currentIndex}>
            {
              pictureUrls?.map((item,index) => (
                <div key={item} className={classNames('item',{'active':index===currentIndex})} onClick={e=>indicatorItemClick(index)}>
                  <img src={item} alt="" />
                  <div className="cover"></div>
                </div>
              ))
            }
          </Indicator>
        </div>
      </div>
    </BrowserWrapper>
  )
})

PictureBrowser.propTypes = {
  pictureUrls:PropTypes.array.isRequired,
  closeFn:PropTypes.function,
}

export default PictureBrowser