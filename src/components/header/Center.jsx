import searchTitles from '@/assets/data/search_titles.json'
import IconSearch from '@/assets/svg/IconSearch'
import { memo, useEffect, useMemo, useState } from 'react'
import { CenterWrapper, SearchWrapper } from './center-style'
import SearchSection from './search-section'
import SearchTabs from './search-tabs'
import { CSSTransition } from 'react-transition-group'

const Center = memo((props) => {
  const { isSearch, centerClick } = props;
  const [currentIndex, setCurrentIndex] = useState(0)

  const titles = useMemo(() => (
    searchTitles.map(item => item.title)
  ), [searchTitles])

  const tabClick = (index) => {
    setCurrentIndex(index)
  }

  const barClick = () => {
    if((centerClick && !isSearch)){
      centerClick(true)
    }
  }

  return (
    <CenterWrapper>
      <CSSTransition
        in={!isSearch}
        classNames="bar"
        timeout={250}
        unmountOnExit={true}
      >
        <div className="search-bar" onClick={barClick}>
          <div className='left'>全球</div>
          <div className='center'><span className='text'>入住退房日期</span></div>
          <div className='right'>
            关键词
            <div className='icon'>
              <IconSearch />
            </div>
          </div>
        </div>
      </CSSTransition>
      <CSSTransition
        in={isSearch}
        classNames="detail"
        timeout={250}
        unmountOnExit={false}
      >
        <>
          <SearchTabs titles={titles} tabClick={tabClick} />
          <SearchWrapper isSearch={isSearch}>
            <div className="section-container">
              <SearchSection infos={searchTitles?.[currentIndex].searchInfos} />
            </div>
          </SearchWrapper>
        </>
      </CSSTransition>
    </CenterWrapper>
  )
})

export default Center