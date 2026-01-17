const figlet = require('./node_modules/figlet/dist/types/cjs/figlet.cts');

figlet("Mantresh!!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});