import styled from 'styled-components';

export const Wrapper = styled.li`
  display:inline-block;
  padding:8px;
  box-sizing:border-box;

  @media (width<550px) {
    width: ${props => props.itemWidth || '100%'};
  }

  @media (550px<width<950px) {
    width: ${props => props.itemWidth || '50%'};
  }

  @media (950px<width<1128px) {
    width: ${props => props.itemWidth || '33.33%'};
  }

  @media (width>1128px) {
    width: ${props => props.itemWidth || '25%'};
  }

  .inner{
    width:100%;
  }
  
  .indicator{
    position:absolute;
    top:80%;
    left:50%;
    width: 45%;
    transform:translateX(-50%);
    overflow:hidden;
    .dots{
      margin:0 4px;
      border-radius: 50%;
      background-color:rgba(0,0,0,.3);
      width: 4px;
      height: 4px;
      &.active{
        background-color:#fff;
        width: 8px;
        height: 8px;
      }
      &.sub-active{
        width: 6px;
        height: 6px;
      }
    }
  }

  .ant-carousel{
    position:absolute;
    left: 0;
    top: 0;
    width: 100%;
    height:100%;
    border-radius:4px;
    .slick-slider.slick-initialized{
      position:absolute;
      left:0;
      top:0;
      width: 100%;
      height:100%;
    }
    .slick-list{
      width: 100%;
      height:100%;
    }
    .slick-track{
      width: 100%;
      height:100%;
      .carousel-img{
        width: 100%;
        height:100%;
        border-radius:4px;
        object-fit:cover;
      }
    }
  }
  .ant-carousel .slick-prev,
  .ant-carousel .slick-next,
  .ant-carousel .slick-prev:hover,
  .ant-carousel .slick-next:hover {
    font-size: inherit;
    color: currentColor;
  }
  .ant-carousel .slick-prev,
  .ant-carousel .slick-prev:hover {
    left: 10px;
    z-index: 2;
    color: white;
  }
  .ant-carousel .slick-next,
  .ant-carousel .slick-next:hover {
    right: 10px;
    z-index: 2;
    color: white;
  }

  .cover{
    position:relative;
    box-sizing:border-box;
    padding:70% 0 0;
    cursor: pointer;
    .single-img{
      position:absolute;
      left: 0;
      top: 0;
      width: 100%;
      height:100%;
      border-radius:4px;
      object-fit:cover;
    }
  } 
  .info{
    font-weight:500;
    cursor: pointer;
    color:${props=>props.color.textColor||"#000"};
    white-space: nowrap;
    overflow:hidden;
    text-overflow:ellipsis
  }
  .name{
    /* white-space:nowrap; */
    overflow:hidden;
    text-overflow:ellipsis;
    font-weight:700;
    cursor: pointer;
    /* 多行 仅支持webkit内核 */
    display:-webkit-box;
    -webkit-line-clamp:2;
    -webkit-box-orient:vertical;
    height:2rem;
  }
  .price{
    cursor: pointer;
  }
  .bottom{
    display:flex;
    align-items:center;
    .rating{
      color:${props=>props.color.ratingColor||"#000"}
    }
    .info{
      margin-left: 12px;
      color:${props=>props.color.contentColor||"#000"}
    }
  }
`;