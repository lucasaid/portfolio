module.exports = {
  siteMetadata: {
    title: "Chris Creates"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/img`,
        name: "images"
      }
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Chris Creates",
        short_name: "chriscreates",
        start_url: "/",
        background_color: "#FFFFFF",
        theme_color: "#FFFFFF",
        display: "standalone",
        icon: "static/android-chrome-512x512.png",
        icons: [
          {
            src: "static/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "static/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png"
          }
        ]
      }
    },
    "gatsby-plugin-typescript",
    "gatsby-plugin-offline"
  ]
};
