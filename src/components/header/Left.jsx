import React, { memo,useCallback } from 'react'
import { LeftWrapper } from "./left-style";
import Logo from '@/assets/svg/Logo';
import { useNavigate } from 'react-router-dom';

const Left = memo(() => {
  const navigate = useNavigate()
  const logoClick = useCallback(
    () => {
      navigate("/")
    },
    [],
  )
  
  return (
    <LeftWrapper>
      <div className="logo" onClick={logoClick}>
        <Logo/>
      </div>
      <div className='text'>
        <img src="/text.jpg" alt="都在爱彼迎" />
      </div>
    </LeftWrapper>
  )
})

export default Left