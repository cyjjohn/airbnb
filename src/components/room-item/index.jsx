import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Rating } from '@mui/material';
import { Carousel } from 'antd';
import classNames from 'classnames';
import { memo, useRef, useState } from 'react';
import Indicator from '../ui/indicator';
import { Wrapper } from './style';

const settings = {
  dots: true,
};

const RoomItem = memo((props) => {
  const {
    data,
    itemWidth,
    itemClick,
  } = props;

  const [carouselIndex, setCarouselIndex] = useState(0)

  //解构数据
  const {
    picture_url: url,
    picture_urls: urls,
    verify_info: {
      messages,
      text_color: textColor,
    },
    name,
    price_format: price,
    star_rating:rating,
    star_rating_color: ratingColor,
    reviews_count,
    bottom_info,
    lat,
    lng
  } = data;
  const {content,content_color:contentColor} = bottom_info||{content:null,content_color:null};

  //设置轮播图索引
  function onChange(from,to){
    setCarouselIndex(to)
  }
  //轮播图跳转
  const carouselRef=useRef()
  function indicatorClick(index,e){
    e.stopPropagation()
    carouselRef.current.goTo(index)
  }
  //点击item
  const onClick = ()=>{
    itemClick && itemClick(data)
  }

  return (
    <Wrapper 
      itemWidth={itemWidth}
      color={{textColor:textColor,ratingColor:ratingColor,contentColor:contentColor}}
    >
      <div className="inner">
        <div className="cover">
          {
            urls?.length > 0 ? (
              <>
                <Carousel arrows prevArrow={<LeftOutlined />} nextArrow={<RightOutlined />} dots={false} beforeChange={onChange} ref={carouselRef}>
                  {
                    urls.map((item, index) => (
                      <img key={item} src={item} onClick={onClick} />
                    ))
                  }
                </Carousel>
                <div className="indicator">
                  <Indicator currentIndex={carouselIndex}>
                    {
                      urls.map((item, index) => (
                        <div 
                          key={item} 
                          className={classNames("dots",{ "active": index === carouselIndex,"sub-active":Math.abs(carouselIndex-index)<3&&Math.abs(carouselIndex-index)>0 })} 
                          onClick={e=>indicatorClick(index,e)}
                        >
                        </div>
                      ))
                    }
                  </Indicator>
                </div>
              </>
            ) : (
              <img className='single-img' src={url} alt="" />
            )
          }
        </div>

        <div onClick={onClick}>
          <div className="info">{messages.join(" · ")}</div>
          <div className="name">{name}</div>
          <div className="price">{price}/晚</div>
          <div className="bottom">
            <span className="rating">
              <Rating defaultValue={rating ?? 5 } precision={0.1} readOnly sx={{fontSize:'12px',color:"#00848a",marginTop:'2px',marginRight:'4px'}} />
            </span>
            {
              (reviews_count && content) && (
                <span className="info">
                  {`${reviews_count} · ${content}`}
                </span>
              )
            }
          </div>
        </div>
      </div>
    </Wrapper>
  )
})

export default RoomItem