const seed = require("./seed");
const app = require("./app");
const port = process.env.PORT || 8080;

const init = async () => {
  try {
    console.log("calling init");
    await seed();
    app.listen(port, () => console.log(`listening on port ${port}`));
  } catch (ex) {
    console.log(ex);
  }
};

init();

module.exports = { port };
