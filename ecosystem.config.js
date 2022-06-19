module.exports = {
  apps : [{
    name   : "Welikan client",
    script : "npm start",
    env_production: {
      APP_API: "https://strapi.wellikan.com",
      APP_DOMAIN: "https://wellikan.com"
    }
  }],

  deploy : {
    production : {
      user : 'dimi',
      host : ['51.250.18.9'],
      ref  : 'origin/main',
      repo : 'git@github.com:simon1400/welikan.git',
      path : '/var/app/client',
      'post-deploy' : 'npm i && npm run build && pm2 reload ecosystem.config.js --env production',
    }
  }
};
