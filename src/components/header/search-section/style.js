import styled from 'styled-components';

export const SectionWrapper = styled.div`
  .items{
    display:flex;
    justify-content:center;
    width:80%;
    margin:0 auto;
    border:1px solid #ebebeb;
    border-radius:36px;
    background-color: #fff;
  }
  .info{
    height: 66px;
    padding:0 20px;
    border-radius:36px;
    flex:1;
    display:flex;
    flex-direction:column;
    justify-content:center;
    position:relative;
    cursor:pointer;
    &:hover{
      background-color:#ebebeb;
    }
    &.active{
      font-weight:900;
    }
  }
  .title{
    margin-bottom:2px;
    font-weight:600;
  }
  .divider{
    position:absolute;
    right:0;
    background-color:#ebebeb;
    width:1px;
    height:36px;
  }
`;