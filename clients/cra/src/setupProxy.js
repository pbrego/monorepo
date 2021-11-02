/* eslint-disable */
// Rename this file to setupProxy.js
// The configuration in this file is the equivalent to having in the package.json:
// "proxy": "http://localhost:9000"
// the pro is this file can be added to .gitignore unlike the package.json
// config.js should now only have window.API_URL = "/api/v1/execute"; and not have the IP:PORT
const proxy = require('http-proxy-middleware');

module.exports = function (app) {
  // const externalGatewayURL = 'http://localhost:32000';
  const payveris = 'http://localhost:9094';
  //const externalGatewayURL = "http://localhost:8084";
  app.use(
    proxy(['/api/**', '/oauth/**'], {
      target: 'https://digital-test-oracle.technisys.net/',
      changeOrigin: true,
    })
  );
  app.use(
    proxy('/v1', {
      target: payveris,
      changeOrigin: true,
    })
  );
};
