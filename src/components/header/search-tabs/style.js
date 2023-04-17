import styled from 'styled-components';

export const TabsWrapper = styled.div`
  display:flex;
  justify-content:center;

  .tab{
    margin:10px 12px;
    cursor:pointer;
    font-weight:600;
    position:relative;
    &:hover{
      opacity: 0.65;
    }
    &.active .text::after{
      content:'';
      position:absolute;
      left:0;
      right:0;
      bottom:-10px;
      border-bottom:2px solid currentcolor;
    }
    &::after {
      content:'';
      position:absolute;
      bottom:-10px;
      border-bottom:2px solid currentcolor;
      background-color: currentcolor;
      inset-inline: 0;
      transform: scaleX(0);
      transition: transform 0.2s ease;
    }
    &:hover:after {
      transform: scaleX(1);
    }
  }
`;