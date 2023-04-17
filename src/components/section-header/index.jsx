import React, { memo } from 'react'
import { Wrapper } from "./style";

const SectionHeader = memo((props) => {
  const {
    title,
    subTitle
  } = props;
  return (
    <Wrapper>
      <h2 className='title'>{title}</h2>
      {subTitle && <h3 className='subTitle'>{subTitle}</h3>}
    </Wrapper>
  )
})

export default SectionHeader