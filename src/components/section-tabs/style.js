import styled from 'styled-components';

export const TabsWrapper = styled.ul`
  /* white-space:nowrap; */
  /* overflow:hidden; */
  display:flex;
  /* width: 100%; */

  .item{
    flex-basis:100px;
    flex-shrink:0;
    box-sizing:border-box;
    text-align:center;
    padding:14px 16px;
    margin-right: 16px;
    border:1px solid rgba(0,0,0,.2);
    border-radius:3px;
    cursor:pointer;
    ${props=>props.theme.mixin.boxShadow}
  }
  
  .active{
    color: #fff;
    background-color: var(--secondary-color);
  }
`;