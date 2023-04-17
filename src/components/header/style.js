import styled from "styled-components";

export const HeaderWrapper = styled.div`
  border-bottom: 1px solid #eee;
  .top{
    display:flex;
    align-items:center;
    justify-content:space-between;
    height: 80px;
    padding:0 24px;
    z-index:999;
    background-color: ${props=>props.theme.isAlpha?'rgba(255,255,255,0.8)':'rgba(255,255,255,1)'};
    position:${props=>props.isFixed?'fixed':'static'};
    left:0;
    right:0;
    box-shadow: rgba(0,0,0,0.08) 0 1px 1px;
  }
  .cover{
    ${props=>props.theme.mixin.cover};
  }
`