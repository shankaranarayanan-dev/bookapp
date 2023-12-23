const express = require('express');
const app = express();

app.use(express.json());

let books =[{bookname:'let us c'}, {bookname:'let us c++'}];

let reqLogger = (req, res, next) => {
  console.log('new request');
  next();
};

app.use(reqLogger);

//get all books
app.get('/api/books', (req, res) => {
  res.json(books);
});

//get a book
app.get('/api/books/:id', (req, res) => {
  res.json(books[req.params.id]);
});

//write a book
app.post('/api/books', (req, res) => {
  console.log(req.body);
  books.push(req.body);
  res.send('book added');
});

app.delete('/api/books', (req, res) => {
  books.pop();
  res.send('book removed');
});

app.delete('/api/books/:id', (req, res) => {
  try {
    let arrayid = req.params.id;
    delete books[arrayid];
    res.send('book removed');
  } catch (error) {
    console.log('error');
  }

});

app.use(function(err, req, res, next) {
  res.end('error');
});

app.listen(3000, () => {console.log('server is running ...')});
