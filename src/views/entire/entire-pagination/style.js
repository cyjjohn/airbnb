import styled from 'styled-components';

export const EntirePaginationWrapper = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  margin-top:40px;
  .info{
    margin-top:26px;
  }

  .MuiPaginationItem-root.Mui-selected:hover{
    background-color:rgba(0,0,0,1);
    text-decoration:none;
  }
  .MuiPaginationItem-page{
    margin:0 8px;
  }
  .MuiPaginationItem-page:hover{
    background-color:rgba(0,0,0,0.2);
    text-decoration:underline;
  }
  .MuiPaginationItem-page.Mui-selected{
    color:#fff;
    background-color:#000;
  }
  .MuiPaginationItem-icon{
    font-size:25px;
  }
`;