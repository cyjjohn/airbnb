import styled from 'styled-components';

export const ItemWrapper = styled.li`
  display:inline-block;
  flex-shrink:0;
  width:20%;
  .inner{
    position: relative;
    padding:8px;
    box-sizing: border-box;
  }
  img{
    width:100%;
  }
  .bg-cover {
    position: absolute;
    left: 8px;
    right: 8px;
    bottom: 0;
    height: 60%;
    background-image: linear-gradient(-180deg, rgba(0, 0, 0, 0) 3%, rgb(0, 0, 0) 100%)
  }
  .info{
    position:absolute;
    bottom:10px;
    left:50%;
    transform:translateX(-50%);
    color:#fff;
    text-align:center;
    white-space:nowrap;

    .city{
      font-size: 18px;
      font-weight: 600;
    }
    .price{
      font-size: 14px;
      margin-top:5px;
    }
  }
`;