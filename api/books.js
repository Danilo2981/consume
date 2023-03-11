const express = require('express')
const router = express.Router();
const axios = require("axios");

router.get('/', async (req, res) => {
    const resp = await axios.get('https://api-l6mce2vuy-danilo2981.vercel.app/books')
    console.log(resp)
    const { data } = resp
    const books = data.map(item => {
      return {
        id: item.id,
        name: item.name,
        autor: item.autor,
        date: item.date,
        resume: item.resume
      }
    })
    res.send(books)
  })

module.exports = router