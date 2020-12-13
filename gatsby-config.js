require("dotenv").config({
  path: `.env.${process.env.NODE_ENV || "development"}`,
});

module.exports = {
  siteMetadata: {
    title: "Roma More Dezign",
    description: "Roma More personal website description",
    author: "@romamore",
    siteURL: "https://deezign.cf",
    lang: "ru",
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/@romamore`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/`,
      },
      {
        name: `medium`,
        url: `https://medium.com/@romamore`,
      },
      {
        name: `facebook`,
        url: `https://www.facebook.com/etreugly`,
      },
    ],
  },
  flags: {
    PRESERVE_WEBPACK_CACHE: true,
  },
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-netlify",
    "gatsby-plugin-postcss",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-typescript",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-resolve-src",
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: [
          process.env.GATSBY_GOOGLE_ANALYTICS_ID,
          // "GA-TRACKING_ID",  Google Analytics / GA
          // "AW-CONVERSION_ID",  Google Ads / Adwords / AW
          // "DC-FLOODIGHT_ID",  Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
        gtagConfig: {
          optimize_id: "process.env.GATSBY_OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
        },
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "uploads",
        path: `${__dirname}/static/img`,
      },
    },
    {
      resolve: `gatsby-plugin-catch-links`,
      options: {
        excludePattern: /(excluded-link|external)/,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "I AM",
        short_name: "I AM",
        start_url: "/",
        display: "browser",
        icon: "src/assets/svg/brand.svg",
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: `Montserrat`,
              subsets: [`cyrillic-ext`],
              variants: [`400`, `500`, `700`, `800`],
            },
          ],
        },
      },
    },
    {
      resolve: "gatsby-plugin-typegen",
      options: {
        outputPath: `src/@types/__generated__/gatsby-types.d.ts`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-plugin-netlify-cms-paths`,
            options: {
              cmsConfig: `/static/admin/config.yml`,
            },
          },
        ],
      },
    },
    `gatsby-plugin-netlify-cms`,
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Romamore Dezign",
        short_name: "Romamore Dezign",
        description: `Romamore personal website description`,
        start_url: "/",
        lang: "ru",
        display: "standalone",
        icon: "src/assets/svg/brand.svg",
        background_color: "#101010",
        theme_color: "#20263d",
        crossOrigin: `use-credentials`,
      },
    },
  ],
};
