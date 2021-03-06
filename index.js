const express = require('express')
const ejs = require('ejs')

const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res) => res.render('index'))

app.get('/perguntar', (req, res) => res.render('perguntar'))

app.listen(8080, (req, res) => console.log('listening on port 8080'))