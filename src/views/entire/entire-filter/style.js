import styled from 'styled-components';

export const EntireFilterUlWrapper = styled.ul`
  display:flex;
  position:fixed;
  top:80px;
  left:0;
  right:0;
  background-color:#fff;
  margin: 0 12px;
  padding: 12px;
  z-index:99;
  li.item{
    margin:0 6px;
    padding:8px 12px;
    border:1px solid rgba(0,0,0,.2);
    border-radius:3px;
    white-space:nowrap;
    cursor: pointer;
    ${props=>props.theme.mixin.boxShadow}
  }
  .active{
      background: #008489;
      border:1px solid #008489;
      color:#fff;
    }
`;