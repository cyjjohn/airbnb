import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { TabsWrapper } from './style';
import classNames from 'classnames';

const SearchTabs = memo((props) => {
  const {titles,tabClick} = props;
  const [currentIndex, setCurrentIndex] = useState(0)

  function handleClick(index){
    setCurrentIndex(index)
    if(tabClick) tabClick(index)
  }

  return (
    <TabsWrapper>
      {
        titles?.map((item,index)=>(
          <div
            key={item}
            className={classNames("tab",{"active":index===currentIndex})}
            onClick={e => handleClick(index)}
          >
            <span className='text'>{item}</span>
          </div>
        ))
      }
    </TabsWrapper>
  )
})

SearchTabs.propTypes = {}

export default SearchTabs