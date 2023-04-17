import PictureBrowser from '@/components/ui/picture-browser';
import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { DetailPictureWrapper } from './sytle';

const DetailPictrue = memo((props) => {
  const {pictures} = props;

  const [showBrowser, setShowBrowser] = useState(false)

  return (
    <DetailPictureWrapper>
      <div className="pictures">
        <div className="left">
          <div className="item" onClick={e=>setShowBrowser(true)}>
            <img src={pictures?.[0]} alt="" />
            <div className="cover"></div>
          </div>
        </div>
        <div className="right">
          {
            pictures?.slice(1,5).map(item=>(
              <div key={item} className="item">
                <img src={item} alt="" />
                <div className="cover"></div>
              </div>
            ))
          }
        </div>
      </div>

      <button className="show-btn" onClick={e=>setShowBrowser(true)}>查看图片</button>
      {showBrowser && <PictureBrowser pictureUrls={pictures} closeFn={e=>setShowBrowser(false)} />}

    </DetailPictureWrapper>
  )
})

DetailPictrue.propTypes = {}

export default DetailPictrue