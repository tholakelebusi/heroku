const express = require('express');
const app = express();
const bodyParser= require('body-parser');
app.use(bodyParser.urlencoded({extended: true}))


app.listen(3000, function() {
    console.log('listening on 3000')
  })


  app.get('/', function(req, res) {
    res.send('Hello World see')
  })



  app.post('/',function(req,res)
  {

  })

  app.post('/quotes', (req, res) => {
    console.log(req.body)
  })