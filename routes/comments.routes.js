const router = require('express').Router()
// const { isAuthenticated } = require('../middlewares/jwt.middleware')
const Post = require('../models/Post.model')


// CREATE POST IN EVENTS

router.post("/postComment", (req, res ) => {

    const { message, event } = req.body
    // const thisUser = req.payload._id

    Comment
        .create({ message, user: thisUser, event})
        .then(response => { res.json(response)})
        .catch((err) => next(err))
})

// POST DELETE ???? if you write it 

router.delete("/:id/delete",(req, res ) => {

    const { id } = req.params
       
    Comment    
        .findByIdAndDelete(id)
        .then(() => res.json(`comentario eliminado => ${id}`))
        .catch(err => res.status(400).json(err))
})



