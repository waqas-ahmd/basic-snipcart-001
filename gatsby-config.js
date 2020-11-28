module.exports = {
  plugins: [
    {
      resolve: "gatsby-plugin-snipcartv3",
      options: {
        apiKey: process.env.GATSBY_SNIPCART_KEY,
      },
    },
  ],
}
