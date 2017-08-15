const express = require('express'), 
      app = express(),
      bodyParser = require('body-parser'),
      port = 3000,
      bc = require('./book_controller.js'),
      data = require('./data'); // file extension not required

// ========== Top - level middleware ========== //

app.use(bodyParser.json());

// ============== endpoints ================== //

// CRUD  -  REST
// - Create ---------- Post
// - Read ---------- Get
// - Update ---------- Put
// - Delete ---------- Delete

// axios.get('/api/mydata').then()
// app.get('/api/mydata') 
// Methods need to match

// app.METHOD(URL, HANDLER);
// - Method --- get, put, post, delete
// - URL --- endpoint url ex: '/api/getData'
// - Handler --- callback function that fires when endpoint is hit


app.get('/api/getBooks', bc.get)

app.post('/api/addBook', bc.post)

app.put('/api/updateBook/:index/:name', bc.put)

app.delete('/api/deleteIt/:index', bc.delete)






// ports - 3000 -12000
app.listen(port, () => console.log(`listening on port ${port}`))