import tw from "twin.macro";
import React from "react";

import SEO from "components/layout/seo";
import Layout from "components/layout/layout";

const Wrapper = tw.div`
  flex items-center justify-center
`;

const Main = tw.div`
  bg-gray-100 rounded-lg shadow-2xl
`;

const Heading = tw.h1`
  text-2xl text-gray-500 uppercase
`;

const Text = tw.p`
  text-xl text-gray-700
`;

const Custom404 = (): JSX.Element => {
  return (
    <Layout>
      <Wrapper>
        <SEO title="Page Not Found" />
        <Main>
          <Heading>Oops!</Heading>
          <Text>We can`&lsquo;`t find the page that you are looking for.</Text>
        </Main>
      </Wrapper>
    </Layout>
  );
};

export default Custom404;
