import styled from "styled-components";

export const LeftWrapper = styled.div`
  flex:1;
  color: ${props=>props.theme.isAlpha?'black':'var(--primary-color)'};
  display:flex;
  height: 100%;
  align-items: center;

  .logo{
    cursor: pointer;
  }
  .text{
    display:inline-block;
    padding-left: 12px;
    width: 162px;
    height: 20px;
    
  }
  .text img{
    height:20px;
    width:162px;
  }
`