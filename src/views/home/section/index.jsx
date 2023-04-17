import SectionFooter from '@/components/section-footer';
import SectionHeader from '@/components/section-header';
import SectionRooms from '@/components/section-rooms';
import SectionTabs from '@/components/section-tabs';
import PropTypes from 'prop-types';
import { memo, useCallback, useState } from 'react';
import { SectionWrapper } from './style';

const HomeSection = memo((props) => {
  const {
    data,
    itemWidth,
  } = props;

  const initialName = data.dest_list && Object.keys(data.dest_list)[0]
  const [name, setName] = useState(initialName)

  //数据格式化
  const tabList = data?.dest_address?.map(item => (item.name))

  //切换Tab
  const handleTabClick = useCallback((value) => {
    setName(value)
  }, [])

  return (
    <SectionWrapper>
      <SectionHeader title={data.title} subTitle={data.subtitle} />
      {/* {tabList && <ScrollTabs list={tabList} tabClick={handleTabClick} />} */}
      {tabList && <SectionTabs list={tabList} tabClick={handleTabClick} />}
      <SectionRooms roomList={data?.dest_list?.[name] || data.list} itemWidth={itemWidth} />
      <SectionFooter name={name} />
    </SectionWrapper>
  )
})

HomeSection.propTypes = {
  data: PropTypes.object.isRequired,
  list: PropTypes.array,
  itemWidth: PropTypes.string,
}

export default HomeSection