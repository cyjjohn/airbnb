import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import filterData from '@/assets/data/filter_data.json'
import { EntireFilterUlWrapper } from './style'
import classNames from 'classnames'

const EntireFilter = memo((props) => {
  const [selectItems, setSelectItems] = useState([])

  function itemClick(item) {
    const newItems = [...selectItems]
    if (newItems.includes(item)) {
      const index = newItems.indexOf(item)
      newItems.splice(index,1)
    } else {
      newItems.push(item)
    }
    setSelectItems(newItems)
  }

  return (
    <EntireFilterUlWrapper>
      {
        filterData?.map((item) => (
          <li
            key={item}
            className={classNames("item", { "active": selectItems.includes(item) })}
            onClick={e => itemClick(item)}
          >
            {item}
          </li>
        ))
      }
    </EntireFilterUlWrapper>
  )
})

EntireFilter.propTypes = {}

export default EntireFilter