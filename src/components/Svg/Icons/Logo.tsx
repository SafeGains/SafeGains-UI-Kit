import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 52 52" {...props}>
      <image width="52" height="52" href="/images/logo.png"/>
    </Svg>
  );
};

export default Icon;
