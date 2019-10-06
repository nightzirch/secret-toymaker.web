const next = require("next");
const express = require("express");
const routes = require("./routes");

const isDev = process.env.NODE_ENV !== "production";
const app = next({
  dev: isDev
});
const port = process.env.PORT || 3000;
const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
  console.log(`> Ready on http://localhost:${port}`); // eslint-disable-line no-console
  express()
    .use(handler)
    .listen(port);
});
