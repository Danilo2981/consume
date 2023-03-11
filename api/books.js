const express = require('express')
const router = express.Router();
const axios = require("axios");

// READ - Obtener todos los libros
router.get('/', async (req, res) => {
try {
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
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error en el servidor');
    }
})
  
// CREATE - Agregar un nuevo libro
router.post('/', async (req, res) => {
    try {
        // Obtener los datos del nuevo libro
        const { name, autor, date, resume } = req.body;

        // Enviar los datos del nuevo libro al servidor
        const resp = await axios.post('https://api-l6mce2vuy-danilo2981.vercel.app/books', {
        name,
        autor,
        date,
        resume
        })

        res.send('El libro se agregó correctamente')
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error en el servidor');
    }
})
  
// UPDATE - Actualizar un libro existente
router.put('/:id', async (req, res) => {
try {
    // Obtener el id del libro a actualizar
    const { id } = req.params;

    // Obtener los datos actualizados del libro
    const { name, autor, date, resume } = req.body;

    // Enviar los datos actualizados al servidor
    const resp = await axios.put(`https://api-l6mce2vuy-danilo2981.vercel.app/books/${id}`, {
        name,
        autor,
        date,
        resume
    })

    res.send('El libro se actualizó correctamente')
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error en el servidor');
    }
})
  
// DELETE - Eliminar un libro existente
router.delete('/:id', async (req, res) => {
try {
    // Obtener el id del libro a eliminar
    const { id } = req.params;

    // Enviar la solicitud de eliminación al servidor
    const resp = await axios.delete(`https://api-l6mce2vuy-danilo2981.vercel.app/books/${id}`)

    res.send('El libro se eliminó correctamente')
} catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error en el servidor');
}
})

module.exports = router