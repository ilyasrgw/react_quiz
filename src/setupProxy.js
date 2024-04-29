const { createProxyMiddleWare } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/questions",
    createProxyMiddleWare({
      target: "http://localhost:8000",
      changeOrigin: true,
    })
  );
};
