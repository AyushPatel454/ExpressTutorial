// imports...
const express = require('express')
var exphbs  = require('express-handlebars');
// const { engine } = require('express-handlebars');
const path = require('path') // for serve file, folder
const app = express()
const port = 3000

// app.engine('handlebars', exphbs());
// app.set('view engine', 'handlebars');

var hbs = exphbs.create({ /* config */ });

// Register `hbs.engine` with the Express app.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, "public")))

app.use('/',require(path.join(__dirname,'routes/blog.js')))

app.listen(port, () => {
  console.log(`Blog app listening on port http://localhost:${port}`)
})