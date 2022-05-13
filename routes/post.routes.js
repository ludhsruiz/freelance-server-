const router = require("express").Router()
const Post = require('./../models/Post.model')
const User = require('./../models/User.model')

const { isAuthenticated } = require('./../middleware/jwt.middleware')


router.get("/", isAuthenticated, (req, res) => {

    const thisUser = req.payload._id
    console.log('llego al server, ', thisUser)

    Post
        .find({ receiver: thisUser })
        //.select('comment')
        //.populate('User')
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.post("/send", isAuthenticated, (req, res) => {

    const sender = req.payload._id

    const { receiver, comment } = req.body

    console.log('SERVER_POST= ', req.body)

    Post
        .create({ sender, receiver, comment })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.delete("/:id/delete", (req, res) => {

    const { id } = req.params

    Post
        .findByIdAndDelete(user_id)
        .catch(err => res.status(500).json(err))
})


module.exports = router




