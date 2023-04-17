import styled from "styled-components";

export const RightWrapper = styled.div`
  flex:1;
  display:flex;
  justify-content: flex-end;
  color:${props=>props.theme.text.primaryColor};

  .btns{
    display:flex;
    align-items:center;
    margin-right:8px;
    
    .btn{
      font-weight:bold;
      padding:12px;
      height:14px;
      line-height:14px;
      border-radius:22px;
      cursor: pointer;
      
      &:hover{
        background-color: #f5f5f5;
      }
    }
  }

  .profile{
    display:flex;
    justify-content:space-evenly;
    align-items: center;
    position:relative;
    cursor: pointer;
    width: 77px;
    height: 42px;
    border:1px solid #ccc;
    border-radius:25px;
    color:${props=>props.theme.text.primaryColor};

    ${props => props.theme.mixin.boxShadow};

    .panel{
      position:absolute;
      top: 54px;
      right: 0;
      width: 240px;
      background-color:#fff;
      border-radius:10px;
      box-shadow:0 0 12px rgba(0,0,0,.1);
      
      .item:hover{
        background-color: #f5f5f5;
      }

      .top{
        border-bottom:1px solid #ccc;
      }

      .top,.bottom{
        padding: 10px 0;
        .item{
          padding:8px 16px;
        }
        .register{
          font-weight:bold;
        }
      }
    }
  }

  .shadow{
    box-shadow: 0 2px 4px rgba(0,0,0,.18);
  }

`