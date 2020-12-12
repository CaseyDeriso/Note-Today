const express = require("express");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");
const app = express();
const PORT = process.env.PORT || 3001;


// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoing JSON data
app.use(express.json());
// link app to routes for api
app.use("/api", apiRoutes);
// link app to routes for html
app.use('/', htmlRoutes);
// set up path to public  directory
app.use(express.static("public"))

app.listen(PORT, () => {
  console.log(`API server is now open on ${PORT}`)
})

