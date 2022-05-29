module.exports = {
  apps : [{
    name   : "Welikan client",
    script : "yarn start",
    env_production: {
      APP_API: "http://welikan-strapi.hardart.cz/",
      APP_DOMAIN: "http://welikan.hardart.cz"
    }
  }],

  deploy : {
    production : {
      user : 'dimi',
      host : ['89.221.216.23'],
      ref  : 'origin/main',
      repo : 'git@github.com:simon1400/welikan.git',
      path : '/var/www/welikan/client',
      // 'pre-deploy-local': 'git add . && git commit -m "pm2 deploy auto commit" && git push origin main',
      'post-deploy' : 'yarn && yarn build && pm2 reload ecosystem.config.js --env production',
    }
  }
};
