import LongforItem from '@/components/longfor-item';
import SectionHeader from '@/components/section-header';
import SectionRooms from '@/components/section-rooms';
import Scroll from '@/components/ui/scroll';
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { Wrapper } from './style'

const HomeLongfor = memo((props) => {
  const {
    data
  }=props;

  return (
    <Wrapper>
      <SectionHeader title={data.title} subTitle={data.subtitle} />
      <ul>
        <Scroll>
          {
            data.list?.map(item => (
              <LongforItem key={item.city} data={item} />
            ))
          }
        </Scroll>
      </ul>
    </Wrapper>
  )
})

HomeLongfor.propTypes = {}

export default HomeLongfor