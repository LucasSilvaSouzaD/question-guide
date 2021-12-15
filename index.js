const express = require('express')
const ejs = require('ejs')

const app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index', { nome: "Lucas"})
})

app.listen(8080, (req, res) => console.log('listening on port 8080'))