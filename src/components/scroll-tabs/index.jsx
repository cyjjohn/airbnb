import classNames from 'classnames';
import { memo, useState } from 'react';
import { TabsWrapper, TabWrapper } from './style';

const ScrollTabs = memo((props) => {
  const {
    list,
    tabClick
  } = props;

  const [value, setValue] = useState(0)
  const handleChange = (e, index) => {
    setValue(index)
    tabClick(list[index])
  }

  return (
    <TabsWrapper
      value={value}
      onChange={handleChange}
      variant="scrollable"
      scrollButtons="auto"
    >
      {
        list?.map((item, index) => (
          <TabWrapper
            key={item}
            label={item}
            className={classNames({ "active": index === value })}
          />
        ))
      }
    </TabsWrapper>
  )
})

export default ScrollTabs