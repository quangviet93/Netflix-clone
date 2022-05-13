const userRoute = require("./users");
const genreRoute = require("./genre");
const actorRoute = require("./actor");
const movieRoute = require("./movie");

function routes(app) {
  app.use("/users", userRoute);
  app.use("/genre", genreRoute);
  app.use("/actor", actorRoute);
  app.use("/movie", movieRoute);
}

module.exports = routes;
