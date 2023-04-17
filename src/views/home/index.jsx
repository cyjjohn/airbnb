import {
  fetchDiscountAction,
  fetchGoodPriceInfoAction,
  fetchHighScoreInfoAction,
  fetchLongforAction,
} from '@/store/modules/home';
import { changeHeaderConfigAction } from '@/store/modules/main';
import { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import HomeSection from './section';
import HomeLongfor from './section-longfor';
import { HomeWrapper } from "./style";

const Home = memo(() => {
  //从store中取出state内容
  const {
    goodPriceInfo,
    highScoreInfo,
    discount,
    longfor,
  } = useSelector(state => ({
    goodPriceInfo: state.home.goodPriceInfo,
    highScoreInfo: state.home.highScoreInfo,
    discount: state.home.discount,
    longfor: state.home.longfor,
  }), shallowEqual)
  //派发异步请求action获取后台数据
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGoodPriceInfoAction())
    dispatch(fetchHighScoreInfoAction())
    dispatch(fetchDiscountAction())
    dispatch(fetchLongforAction())
  
    dispatch(changeHeaderConfigAction({isFixed:true,topAlpha:true})) //修改HeaderConfig
  }, [dispatch])

  return (
    <HomeWrapper>
      {/* content */}
      <HomeLongfor data={longfor} />
      {Object.keys(discount).length > 0 && <HomeSection data={discount} itemWidth={"33.33%"} />}
      {goodPriceInfo && <HomeSection data={goodPriceInfo} />}
      <HomeSection data={highScoreInfo} />
    </HomeWrapper>
  )
})

export default Home