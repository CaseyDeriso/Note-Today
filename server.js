const express = require("express");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");
const app = express();
const PORT = process.env.PORT || 3001;

app.use("/api", apiRoutes);
app.use('/', htmlRoutes);
// set up path to public  directory
app.use(express.static("Public"))

app.listen(PORT, () => {
  console.log(`API server is now open on ${PORT}`)
})

