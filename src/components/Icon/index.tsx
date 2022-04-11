import { memo } from "react";
import styled from "styled-components";

import * as SvgIconList from './Svg'; 
import { IconTye } from "./type";

const Icon = ({ name, id, color='#D2D5D8', onClick, ...props}: IconTye) => { 
  return (
    <SvgIcon onClick={onClick} {...props} id={id}>
      {Object.entries(SvgIconList).map(
      ([key, Component]) => {
        return (`Icon${name}` === key &&   (
          <Component color={color} key={`Icon${name}`} />
        ))
      }
    )}
    </SvgIcon>
  ); 
}; 

const SvgIcon = styled.div``;

export default memo(Icon)