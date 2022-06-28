/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    APP_API: process.env.NODE_ENV === "production" ? "https://strapi.wellikan.com" : "https://strapi.wellikan.com",
    APP_DOMAIN: process.env.NODE_ENV === "production" ? "https://wellikan.com" : "http://localhost:3000"
  },
}
