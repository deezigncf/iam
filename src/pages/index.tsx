import { PageLayout, SEO } from "components/layout";
import { Footer, ImageTile, MainPageContainer } from "components/ui";
import { myContext } from "context";
import { Link } from "gatsby";
import React from "react";
import tw from "twin.macro";

import styled from "@emotion/styled";

import { IMAGES } from "../const";

const Left = styled.aside`
  grid-area: 1 / 1 / 7 / 2;
`;

const Menu = styled.header`
  cursor: pointer;
  border: 4px solid transparent;
  border-image-slice: 1;
  border-width: 4px;
  &:hover {
    border-image-source: linear-gradient(to left, #be1e2d, #320004);
  }
  grid-area: 1 / 2 / 2 / 3;
`;

const Blank = styled.header`
  border: 4px solid transparent;
  border-image-slice: 1;
  border-width: 4px;
  grid-area: 1 / 3 / 2 / 5;
`;

const Brand = styled.section`
  border: 4px solid transparent;
  border-image-slice: 1;
  border-width: 4px;
  &:hover {
    border-image-source: linear-gradient(to left, #743ad5, #d53a9d);
  }
  grid-area: 2 / 2 / 5 / 5;
`;

const Bauhaus = styled.section`
  border: 4px solid transparent;
  border-image-slice: 1;
  border-width: 4px;
  &:hover {
    border-image-source: linear-gradient(to left, #743ad5, #d53a9d);
  }
  grid-area: 5 / 2 / 6 / 4;
`;

const Thing = styled.section`
  border: 4px solid transparent;
  border-image-slice: 1;
  border-width: 4px;
  &:hover {
    border-image-source: linear-gradient(to left, #743ad5, #d53a9d);
  }
  grid-area: 5 / 4 / 6 / 5;
`;

const Right = styled.aside`
  grid-area: 1 / 5 / 7 / 6;
`;

const IndexPage = (): JSX.Element => {
  return (
    <PageLayout>
      <SEO title="I AM" />
      <MainPageContainer>
        <Left />
        <myContext.Consumer>
          {(context) => (
            <Menu onClick={context.showMenu}>
              <ImageTile {...IMAGES.find((e) => e.alt === "menu")} />
            </Menu>
          )}
        </myContext.Consumer>
        <Blank />
        <Right />
        <Brand>
          <Link to="brand">
            <ImageTile {...IMAGES.find((e) => e.alt === "brand")} />
          </Link>
        </Brand>
        <Bauhaus>
          <ImageTile {...IMAGES.find((e) => e.alt === "bauhaus")} />
        </Bauhaus>
        <Thing>
          <Link to="thing">
            <ImageTile {...IMAGES.find((e) => e.alt === "thing")} />
          </Link>
        </Thing>
        <Footer />
      </MainPageContainer>
    </PageLayout>
  );
};

export default IndexPage;
