/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    // APP_API: process.env.NODE_ENV === "production" ? "http://authentica-strapi.hardart.cz" : "http://localhost:1340"
    APP_API: process.env.NODE_ENV === "production" ? "http://welikan-strapi.hardart.cz/" : "http://localhost:1337",
    APP_DOMAIN: process.env.NODE_ENV === "production" ? "http://welikan.hardart.cz" : "http://localhost:3000"
  },
}
