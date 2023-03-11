const express = require('express');

const app = express();
const PORT = 4001
app.use(express.json());

const { bookRouter } = require('./api')

app.use('/books', bookRouter)

// app.get('/', (req, res) => {
//   res.send({
//     message: `it's works`
//   })
// })

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})