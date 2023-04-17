import styled from 'styled-components';

export const FooterWrapper = styled.a`
  display:inline-block;
  padding:15px 0;
  font-weight:700;
  cursor: pointer;

  .text{
    margin-right: 5px;
    color:${props=>props.color}
  }
`;