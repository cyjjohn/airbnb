import { changeHeaderConfigAction } from '@/store/modules/main'
import { memo,useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import DetailPictrue from './detail-picture'
import { DetailWrapper } from './style'

const Detail = memo((props) => {
  const {
    detailInfo,
  } = useSelector((state)=>({
    detailInfo:state.detail.detailInfo
  }),shallowEqual)

  const dispatch =useDispatch()
  useEffect(() => {
    dispatch(changeHeaderConfigAction({isFixed:false,topAlpha:false})) //修改HeaderConfig
  }, [])
  

  //解构数据
  const {
    picture_url: url,
    picture_urls: urls,
    name,
    price_format: price,
    star_rating:rating,
    star_rating_color: ratingColor,
    reviews_count,
    bottom_info,
    lat,
    lng
  } = detailInfo;
  const {content,content_color:contentColor} = bottom_info||{content:null,content_color:null};
  

  return (
    <DetailWrapper>
      <DetailPictrue pictures={urls} />
      <div>{name}</div>
    </DetailWrapper>
  )
})

Detail.propTypes = {}

export default Detail