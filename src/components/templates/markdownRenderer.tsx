import externalLinks from "remark-external-links";
import parse from "remark-parse";
import remark2react from "remark-react";
import tw from "twin.macro";
import unified from "unified";

const H1Title = tw.h1`font-semibold	text-yellow-100 text-2xl my-5`;
const H2Title = tw.h2`font-semibold	text-yellow-100 text-2xl my-4`;
const H3Title = tw.h3`font-medium	text-yellow-100 text-2xl my-3`;
const H4Title = tw.h4`font-medium	text-yellow-100 text-xl  my-2`;
const H5Title = tw.h5`font-medium	text-yellow-100 text-lg  my-2`;
const H6Title = tw.h6`font-medium	text-yellow-100 text-lg my-2`;
const Paragraph = tw.p`text-gray-200 text-base my-4`;
const Link = tw.a`text-pink-600 hover:underline hover:text-pink-300`;
const Ul = tw.ul`text-yellow-100 list-disc list-inside`;
const Li = tw.li`text-gray-200`;
const Img = tw.img`object-center object-scale-down `;
const Em = tw.em`text-gray-400`;
const Strong = tw.strong`text-yellow-100`;
const Hr = tw.hr`border-b-2 border-gray-500 `;
const Bq = tw.blockquote`border-l-4 border-gray-500 pl-2`;
const options = {
  remarkReactComponents: {
    h1: H1Title,
    h2: H2Title,
    h3: H3Title,
    h4: H4Title,
    h5: H5Title,
    h6: H6Title,
    p: Paragraph,
    a: Link,
    ul: Ul,
    li: Li,
    img: Img,
    em: Em,
    strong: Strong,
    hr: Hr,
    blockquote: Bq,
  },
};

export const markdownRenderer = (markdown: string): JSX.Element => {
  const rendered: JSX.Element = unified()
    .use(externalLinks, { target: false, rel: ["nofollow"] })
    .use(parse)
    .use(remark2react, options)
    .processSync(markdown).result;
  return rendered;
};
