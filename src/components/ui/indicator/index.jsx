import PropTypes from 'prop-types';
import { memo, useEffect, useRef } from 'react';
import { IndicatorWrapper } from './style';

const Indicator = memo((props) => {
  const {
    currentIndex,
  } = props;
  const contentRef = useRef()

  useEffect(() => {
    const content = contentRef.current
    const child = content.children[currentIndex]
    //计算移动距离
    let distance = child.offsetLeft + child.clientWidth*0.5 - content.clientWidth*0.5
    //左右特殊情况
    if(distance<0) distance=0;
    const maxDistance = content.scrollWidth-content.clientWidth
    if(distance>maxDistance) distance=maxDistance;
    //整体左移
    content.style.transform = `translateX(${-distance}px)`
  }, [currentIndex])

  return (
    <IndicatorWrapper ref={contentRef}>
      {props.children}
    </IndicatorWrapper>
  )
})

Indicator.propTypes = {
  currentIndex:PropTypes.number.isRequired
}

export default Indicator