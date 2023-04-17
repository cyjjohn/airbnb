import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { ItemWrapper } from './style';

const LongforItem = memo((props) => {
  const {
    data,
    itemWidth
  } = props;

  //格式化
  const {
    city,
    price,
    picture_url: pictureUrl,
    image_url: imageUrl,
  } = data;

  return (
    <ItemWrapper itemWidth={itemWidth}>
      <div className="inner">
        <img src={pictureUrl} alt="" />
        <div className="bg-cover"></div>
        <div className='info'>
          <div className="city">{city}</div>
          <div className="price">均价:{price}</div>
        </div>
      </div>
    </ItemWrapper>
  )
})

LongforItem.propTypes = {}

export default LongforItem