import styled from 'styled-components';

export const ScrollWrapper = styled.div`
  position:relative;
  padding: 8px 0;

  .content{
    overflow:hidden;
    .scroll{
      display:flex;
      white-space:nowrap;
      transition: transform 250ms ease-in-out;
    }
  }

  .left,.right{
    padding:7px;
    background-color:#fff;
    border:0.5px solid rgb(0 0 0/0.3);
    border-radius: 50px;
    z-index:1;
    position:absolute;
    top:50%;
    cursor: pointer;
    ${props=>props.theme.mixin.boxshadow}
  }

  .left{
    left:0;
    transform:translate(-50%,-50%);
  }

  .right{
    right:0;
    transform:translate(50%,-50%);
  }

`;