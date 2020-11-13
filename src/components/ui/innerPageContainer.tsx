import React from "react";
import tw from "twin.macro";
import styled from "@emotion/styled";

const Element = styled.div`
  ${tw` justify-self-auto place-items-auto grid gap-1 py-2`}
  grid-template-columns:  minmax(4px, auto) repeat(3, minmax(100px, 1fr)) minmax(4px, auto);
  grid-template-rows:
    repeat(3, minmax(auto, 1fr)) auto auto
    auto;
`;

const InnerPageContainer = ({
  children,
}: React.PropsWithChildren<Record<string, unknown>>): JSX.Element => {
  return <Element>{children}</Element>;
};

export default InnerPageContainer;
