import styled from 'styled-components';

export const DetailPictureWrapper = styled.div`
  position:relative;
  > .pictures{
    display:flex;
    background-color:#000;
    .cover{
      opacity:1 !important;
    }
    .item:hover{
      .cover{
        opacity:0 !important;
      }
    }
  }
  .left,.right{
    width: 50%;
    height:100%;
    display:flex;
    flex-wrap:wrap;
    .item{
      position: relative;
      overflow:hidden;
      box-sizing:border-box;
      padding:0 1px;
      img{
        width: 100%;
        object-fit:cover;
        transition:transform 0.2s ease;
      }
      .cover{
        position:absolute;
        left:0;
        right:0;
        top:0;
        bottom:0;
        background-color:rgba(0,0,0,.2);
        opacity: 0;
        transition:opacity .2s ease;
      }
      :hover{
        img{
          transform:scale(1.05);
        }
      }
    }    
  }
  .left{
    cursor:pointer;
    .item{
      width: 100%;
    }
  }
  .right{
    .item{
      width: 50%;
    }
  }

  .show-btn{
    position:absolute;
    right:30px;
    bottom: 20px;
    background-color:#fff;
    border:1px solid #ccc;
    padding:5px;
    border-radius:3px;
    font-size:10px;
    cursor: pointer;
    ${props=>props.theme.mixin.boxShadow};
  }
`;