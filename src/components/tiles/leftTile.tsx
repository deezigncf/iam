import React from "react";

import styled from "@emotion/styled";

const Left = styled.aside`
  grid-area: 1 / 1 / 9 / 2;
`;

export const LeftTile = (): JSX.Element => {
  return <Left />;
};
