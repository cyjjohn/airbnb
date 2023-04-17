import styled from 'styled-components';

export const IndicatorWrapper = styled.div`
    display:flex;
    flex-wrap:nowrap;
    justify-content:flex-start;
    align-items:center;
    transition:transform 200ms ease;
    >*{
      flex-shrink:0;
    }
`;