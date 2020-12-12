import React from "react";
import tw from "twin.macro";

import styled from "@emotion/styled";
import { ImageProps } from "@types";

const Element = styled.img`
  ${tw`z-40 object-fill object-center w-full`}
`;

export const ImageTile = ({ alt, url }: ImageProps): JSX.Element => {
  return <Element src={url} alt={alt} />;
};
