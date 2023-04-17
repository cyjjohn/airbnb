import { memo, useState,useRef } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import Center from './Center'
import Left from './Left'
import Right from './Right'
import useScrollPosition from '@/hooks/useScrollPosition'
import { HeaderWrapper } from './style'
import { ThemeProvider } from 'styled-components'

const Header = memo(() => {
  const {isFixed,topAlpha} =useSelector(state=>({
    isFixed:state.main.headerConfig.isFixed,
    topAlpha:state.main.headerConfig.topAlpha,
  }),shallowEqual)

  /* 定义组件内部状态 */
  const [isSearch, setSearch] = useState(false)

  /* 设置isSearch状态 */
  const centerClick = (isSearch) => {
    setSearch(isSearch)
  }
  const coverHide = ()=>{
    setSearch(false)
  }
  /* 监听滚动 */
  const {scrollY}=useScrollPosition()
  const prevY = useRef(0)
  if(!isSearch) prevY.current=scrollY
  if(isSearch && Math.abs(scrollY-prevY.current)>20){
    setSearch(false)
  }

  /* 当处于顶部时Header半透明 */
  const isAlpha = topAlpha && scrollY===0

  return (
    /* 往ThemeProvider传入想要全局使用的值 */
    <ThemeProvider theme={{isAlpha}}>
      <HeaderWrapper isFixed={isFixed}>
        <div className="content">
          <div className="top">
            <Left />
            <Center isSearch={isAlpha||isSearch} centerClick={centerClick} />
            <Right />
          </div>
        </div>
        {isSearch && <div className="cover" onClick={coverHide}></div>}
      </HeaderWrapper>
    </ThemeProvider>
  )
})

export default Header