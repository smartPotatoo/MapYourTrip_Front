const { createProxyMiddleware } = require('http-proxy-middleware');


module.exports = function(app) {
  app.use(
    '/map-geocode',
    createProxyMiddleware({
      target:'https://naveropenapi.apigw.ntruss.com/map-geocode',
      changeOrigin: true,
    })
  );
};
