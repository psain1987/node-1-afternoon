let express = require('express')
let getProducts = require('./getProducts')
let getProduct = require('./getProduct')


let app = express()

let port = 3001

app.get("/api/products", getProducts) 
app.get('/api/product/:id', getProduct)


app.listen(port, () => {console.log(`I'm here and running on port: ${port}`)})