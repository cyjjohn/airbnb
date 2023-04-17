import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SectionWrapper } from './style'

const SearchSection = memo((props) => {
  const { infos } = props;

  return (
    <SectionWrapper>
      <div className="items">
        {
          infos?.map((item, index) => (
            <div key={item.title} className="info">
              <div className="title">{item.title}</div>
              <div className="desc">{item.desc}</div>
              {index !== infos.length - 1 && <div className="divider"></div>}
            </div>
          ))
        }
      </div>
    </SectionWrapper>
  )
})

SearchSection.propTypes = {}

export default SearchSection