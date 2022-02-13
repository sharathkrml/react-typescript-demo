import React from "react";
import { StypeProps } from "./Style.types";
function Style(props: StypeProps) {
  return <div style={props.style}>Text here</div>;
}

export default Style;
