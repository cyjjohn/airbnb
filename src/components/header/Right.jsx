import {useEffect, useState} from 'react'
import classNames from 'classnames'; "classnames";
import IconGlobal from '@/assets/svg/IconGlobal';
import IconAvatar from '@/assets/svg/IconAvatar';
import React, { memo } from 'react'
import { RightWrapper } from "./right-style";
import IconMenu from '@/assets/svg/IconMenu';

const Right = memo(() => {
  const [showPanel, setShowPanel] = useState(false)

  useEffect(()=>{
    function handleClick(){
      setShowPanel(false)
    }
    window.addEventListener('click',handleClick,true)

    return ()=>{
      window.removeEventListener('click',handleClick)
    }
  },[])
  
  function profileClickHandle(){
    setShowPanel(true)
  }
  return (
    <RightWrapper>
      <div className='btns'>
        <div className='btn'>登录</div>
        <div className='btn'>注册</div>
        <div className="btn"><IconGlobal/></div>
      </div>

      <div className={classNames('profile',{'shadow':showPanel})} onClick={profileClickHandle}>
        <IconMenu/>
        <IconAvatar/>

        {showPanel && (
          <div className="panel">
            <div className="top">
              <div className='item register'>注册</div>
              <div className='item login'>登录</div>
            </div>
            <div className='bottom'>
              <div className='item'>来爱彼迎发布房源</div>
              <div className='item'>开展体验</div>
              <div className='item'>帮助</div>
            </div>
          </div>
        )}
      </div>
    </RightWrapper>
  )
})

export default Right