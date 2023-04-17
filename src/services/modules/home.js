import request from "utils/request";

export function getHomeGoodPriceInfo(){
  return request.get({
    url:"/home/goodprice"
  })
}

export function getHighScoreInfo(){
  return request.get({
    url:"/home/highscore"
  })
}

export function getDiscount(){
  return request.get({
    url:"/home/discount"
  })
}

export function getLongfor(){
  return request.get({
    url:"/home/longfor"
  })
}