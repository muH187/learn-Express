const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('I love programming.')
})
app.get('/blog/:slug/:second', (req, res) => {
  res.send(`Hello ${req.params.slug} and Hey ${req.params.second}`)
})
// app.get('/about', (req, res) => {
//   res.send('This is about page')
// })
// app.get('/contact', (req, res) => {
//   res.send('This is contact page')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})