import styled from 'styled-components';

export const EntireRoomsWrapper = styled.div`
  margin-top:120px;
  display:flex;
  flex-wrap:wrap;
  .title{
    font-size:18px;
    margin-top:8px;
  }
  .list{
    margin-left: -8px;
    >li{
      padding:8px;
    }
  }
`;

export const SkeletonWrapper = styled.div`
  display:flex;
  flex-wrap:wrap;
  width: 100%;
  .list{
    --width:20%;
    flex-grow:1;
    margin-left: -8px;
    width:var(--width);
    height:calc(var(--width)*2/3);
    >.MuiSkeleton-rectangular{
      margin:8px;
    }
    >.MuiSkeleton-text{
      margin: 0 8px;
    }
  }
`