const { Console } = require('console')
const express = require('express')
const path = require('path')
const app = express()
const port = 3000

const azmeerMiddleware = (req, res, next)=>{
    console.log(req)
}

app.use(azmeerMiddleware)

app.use(express.static(path.join(__dirname, "public")))
//hello world
app.get('/', (req, res) => {
  res.send('Hello World!')
})

//send file
app.get('/about', (req, res) => {
//   res.sendFile(path.join(__dirname, "index.html"))
    res.json({"azmeer": 21})
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})