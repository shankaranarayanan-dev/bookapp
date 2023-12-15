const express = require('express');
const app = express();

app.use(express.json());

let books =[{bookname:'let us c'}, {bookname:'let us c++'}];

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

app.listen(3000, () => {console.log('server is running ...')});
