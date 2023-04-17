import styled from 'styled-components';

export const BrowserWrapper = styled.div`
  position:fixed;
  background-color:#222;
  top:0;
  bottom:0;
  left:0;
  right:0;
  z-index:99;
  display:flex;
  flex-direction:column;
  justify-content: space-between;
  align-items:center;
  .top{
    width: 100%;
    height:50px;
    flex:0;
    svg{
      color:#fff;
      float:right;
      margin-top:6px;
      margin-right: 10px;
      transition:transform 150ms linear;
      cursor: pointer;
    }
    svg:hover{
      transform:rotate(90deg)
    }
  }
  .content{
    flex-grow:1;
    /* display:flex; */
    .picture{
      flex:1;
      img{
        width:100%;
        margin:0 auto;
        user-select:none;
        max-width:105vh;
        max-height:100vh;
        transform:${props=>props.isExpand?'scale(1)':'scale(1.2)'};
        transform-origin:top center;
        transition: transform 150ms linear;
      }
      /* transition-group动画 */
      .fade-enter{
        transform:translateX(${props=>props.isRight?"100%":"-100%"});
        opacity: 0;
      }
      .fade-exit{
        transform:translateX(0);
        opacity: 1;
      }
      .fade-enter-active{
        transform:translateX(0);
        opacity: 1;
      }
      .fade-exit-active{
        transform:translateX(${props=>props.isRight?"-100%":"100%"});
        opacity: 0;
      }
      .fade-enter-active,
      .fade-exit-active{
        transition: all 150ms ease;
      }
    }
    .btn{
      color:#fff;
      font-size:50px;
      width: 50px;
      height: 50px;
      position:absolute;
      top:50%;
      margin-top:-25px;
      cursor:pointer;
    }
    .btn.left{
      left:20px;
    }
    .btn.right{
      right:20px;
    }
  }
  .indicator{
    position:relative;
    width:100%;
    flex-shrink: 0;
    display:flex;
    flex-direction:column;
    transition:transform 200ms;
    .info,.list{
      transition:all 200ms ease;
    }
    .info{
      width:60%;
      margin:0 auto;
      color:#fff;
      display:flex;
      justify-content:space-between;
      .desc{
        width: 40%;
      }
      .control{
        cursor: pointer;
        svg{
          width: 1rem;
        }
      }
    }
    .list{
      width: 60%;
      height:90px;
      margin:0 auto;
      overflow:hidden;
      .item{
        position: relative;
        cursor:pointer;
        img{
          height: 82.5px;
          margin:2px;
        }
        .cover{
          position:absolute;
          top:0;
          bottom:0;
          left:0;
          right:0;
          background-color:rgba(0,0,0,.5);
          &:hover{
            opacity: 0;
          }
        }
        &.active{
          .cover{
            opacity:0;
          }
        }
      }
      transition:height 200ms;
      &.hide{
        height:0;
      }
    }
  }
`;