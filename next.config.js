/** @type {import('next').NextConfig} */
module.exports = () => {
  // reactStrictMode: true,



  const env = {
    APP_API: (() => {
      return 'http://localhost:1337'
      // if (isDev) return 'http://localhost:1339'
      // if (isProd) return 'https://strapi-kp.investmag.cz'
      // return 'RESTURL_SPEAKERS:not (isDev,isProd && !isStaging,isProd && isStaging)'
    })(),
    APP_DOMAIN: (() => {
      // if (isDev) return 'http://localhost:3005'
      // if (isProd) return 'https://kralovska-pece.hardart.cz'
      // return 'RESTURL_SPEAKERS:not (isDev,isProd && !isStaging,isProd && isStaging)'
    })()
  }

  return {
    env
  }
}
