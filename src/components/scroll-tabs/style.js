import { Tab, Tabs } from '@mui/material';
import { styled } from "@mui/material/styles";

export const TabsWrapper = styled(Tabs)`
  /* width: 100%; */
`;

export const TabWrapper = styled(Tab)`
  box-sizing:border-box;
  padding:14px 16px;
  margin-right: 16px;
  height:40px;
  border:1px solid rgba(0,0,0,.2);
  border-radius:3px;
  cursor:pointer;
  white-space:nowrap;

  transition: box-shadow 200ms ease;
  :hover {
    box-shadow: 0 2px 4px rgba(0,0,0,.18);
  }
  .active{
    color: #fff;
    background-color: "#00848A";
  }
`