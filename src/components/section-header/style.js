import styled from 'styled-components';

export const Wrapper = styled.div`
  position:relative;
  cursor: pointer;
  color:#222;
  .title{
    padding:20px 0;
  }
  .subTitle{
    padding:0 0 10px;
    font-weight:normal;
  }

  &:hover{
    ::before{
      content: "";
        width: 0px;
        height: 0px;
        border-top: 8px solid transparent;
        border-bottom: 8px solid transparent;
        border-right: 8px solid transparent;
        border-left: 8px solid #000;
        position: absolute;
        top: 25px;
        left: 182px;
    }
    ::after{
      content: "";
      width: 0px;
      height: 0px;
      border-top: 7px solid transparent;
      border-bottom: 7px solid transparent;
      border-right: 7px solid transparent;
      border-left: 7px solid #fff;
      position: absolute;
      top: 26px;
      left: 181px;
    }
  }
`;