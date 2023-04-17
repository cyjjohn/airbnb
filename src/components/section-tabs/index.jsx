import classNames from 'classnames';
import PropTypes from 'prop-types'
import React, { memo,useState,useCallback } from 'react'
import Scroll from '../ui/scroll';
import {TabsWrapper} from './style'

const SectionTabs = memo((props) => {
  const {
    list=[],
    tabClick
  } = props;

  const [value, setValue] = useState(0)
  const handleClick = (index) => {
    setValue(index)
    tabClick(list[index])
  }

  return (
    <Scroll>
      <TabsWrapper>
        {
          list.map((item, index) => (
            <li
              key={item}
              className={classNames('item', { "active": index === value })}
              onClick={e => handleClick(index)}
            >
              {item}
            </li>
          ))
        }
      </TabsWrapper>
    </Scroll>
  )
})

SectionTabs.propTypes = {

}

export default SectionTabs