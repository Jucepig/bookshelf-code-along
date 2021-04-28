const express = require('express')
const bc = require('./controllers/books_controller.js')

const app = express()
app.use(express.json())
app.use(express.static(__dirname + '/../build'))
const PORT = 4000

app.get('/api/books', bc.getBooks)
app.post('/api/books', bc.addBook)
app.delete('/api/books/:id', bc.deleteBook)
app.put('/api/books/:id', bc.editBook)




app.listen(PORT, () => console.log(`The server on Port: ${PORT} is running, you better go catch it...`))