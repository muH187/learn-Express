const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(function(req, res, next){
    console.log("Middleware Chala.")
    next()
})

app.get("/", function (req, res) {
  res.send('Hello! Programmers')
})

app.get("/ali", function(req, res){
    res.send("Ali! You are learning Express Framework.")
})

app.listen(3000)