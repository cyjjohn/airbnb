import styled from "styled-components";

export const CenterWrapper = styled.div`
  display:flex;
  flex-wrap:nowrap;
  justify-content:center;
  align-items:center;
  white-space:nowrap;

  .search-bar{
    position:absolute;
    display:flex;
    justify-content:center;
    align-items:center;
    width: 300px;
    height:48px;
    border-radius:25px;
    border:1px solid #ccc;
    background-color:#fff;
    z-index:9;
    ${props=>props.theme.mixin.boxShadow}
    
    .left,.center,.right{
      padding:0 16px;
      cursor: pointer;
      height: 100%;
      display:flex;
      align-items:center;
    }
    .center,.right{
      color:#717171;
    }
    .left{
      margin-left:14px;
      font-weight:bold;
    }
    .center{
      box-sizing:border-box;
      .text{position:relative;}
      .text::after{
        content:'';
        position:absolute;
        top:-4px;
        bottom:-4px;
        left:-16px;
        right:-16px;
        border-left:1px solid #ccc;
        border-right:1px solid #ccc;
      }
    }
    .right{
      .icon{
        display:flex;
        justify-content:center;
        align-items:center;
        margin-left:16px;
        color:#fff;
        background-color:var(--primary-color);
        border-radius:50px;
        width: 32px;
        height: 32px;
      }
    }
  }
  .search-detail{
    transform-origin:50% 0;
    will-change: transform,opacity;
  }

  /* 切换动画 */
  .bar-enter{
    opacity:0;
    transform:scale(2.85,1.375) translateY(58px);
  }
  .bar-enter-active{
    opacity:1;
    transform:scale(1.0) translateY(0);
    transition:all 200ms ease;
  }
  .bar-exit{
    opacity:0;
    transition:all 200ms ease;
  }
  .detail-enter{
    opacity:0;
    transform:scale(0.35,0.72) translateY(-58px);
  }
  .detail-enter-active{
    opacity:1;
    transform:scale(1.0) translateY(0);
    transition:all 200ms ease;
  }
  .detail-exit{
    opacity:0.5;
    transform:scale(1.0) translateY(0)
  }
  .detail-exit-active{
    opacity:0;
    transform:scale(0.35,0.72) translateY(-58px);
    transition:all 200ms ease;
  }
  .detail-exit-done{
    display:none;
  }
`

export const SearchWrapper = styled.div`
  position:absolute;
  top: 80px;
  overflow:hidden;
  z-index:99;
  background-color:${props=>props.theme.isAlpha?'rgba(255,255,255,0.8)':'#fff'};
  width: 100%;
  .section-container{
    height: ${props=>props.isSearch?'80px':'0'};
    transform:scale(${props=>props.isSearch?'1':'0'});
    transform-origin:50% 0;
    opacity:${props=>props.isSearch?'1':'0'};
    transition:all 200ms ease-in-out;
  }
`;