import { ImageTile } from "components/ui/tiles";
import { STATIC_TILES } from "const";
import { myContext } from "context";
import React from "react";
import tw from "twin.macro";

import styled from "@emotion/styled";

const Container = styled.header`
  grid-area: 1 / 2 / 2 / 3;
`;
const SubGrid = styled.section`
  grid-template-columns: 33.3% 66.7%;
  grid-template-rows: auto;
`;

const Menu = styled.section`
  ${tw``}
  cursor: pointer;
  border: 0.5rem solid transparent;
  border-image-slice: 1;
  border-width: 0.5rem;
  &:hover {
    border-image-source: linear-gradient(
      45deg,
      rgba(255, 0, 82, 1) 0%,
      rgba(9, 9, 121, 1) 35%,
      rgba(62, 169, 218, 1) 100%
    );
  }
  grid-area: 1 / 1 / 2 / 2;
`;

const HeaderRight = styled.section`
  border: 0.5rem solid transparent;
  border-image-slice: 1;
  border-width: 0.5rem;
  grid-area: 1 / 2 / 2 / 4;
`;

export const Header = (): JSX.Element => {
  return (
    <Container>
      <SubGrid>
        <myContext.Consumer>
          {(context) => (
            <Menu onClick={context.showMenu}>
              <ImageTile {...STATIC_TILES.find((e) => e.alt === "menu")} />
            </Menu>
          )}
        </myContext.Consumer>
        <HeaderRight>
          <ImageTile {...STATIC_TILES.find((e) => e.alt === "design")} />;
        </HeaderRight>
      </SubGrid>
    </Container>
  );
};
