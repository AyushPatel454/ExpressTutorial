// imports...
const express = require('express')
const path = require('path') // for serve file, folder
const app = express()
const port = 3000

// ---> create our own middleware
// const ashAmyMiddleware = (req, res, next) => {
//     console.log(req)
//     next() // aa middleware pachi ana pachhi ni middleware run thay
// }

// it is middleware. Te response & request access ne rakhe che. & ene change bi kari sake che.
// here app.use() ---> Is a middleware.


app.use(express.static(path.join(__dirname, "public")))
// app.use(ashAmyMiddleware) // ---> implement our own middleware

app.get('/hello/:name', (req, res) => { // ---> localhost:3000/hello/anyname ---> output: Hello Worldanyname
  res.send('Hello World!'+ req.params.name)
})
app.get('/about', (req, res) => {
    // res.send('about page')
    // res.sendFile(path.join(__dirname,'index.html'))
    // res.status(500) // if you want to pass server code 500: for internal server error
    res.json({"Amysh":2519}) // we can also pass json
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})