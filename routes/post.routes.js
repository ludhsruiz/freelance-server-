const router = require("express").Router()
const Post = require('./../models/Post.model')

//const { isAuthenticated } = require('./../middleware/jwt.middleware')


router.get("/:receiver_id", (req, res) => {
    
    //const thisUser = req.payload._id

    const { receiver } = req.params

    Post
        .find({ sender: thisUser, receiver })
        //.select('comment')
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.post("/send", (req, res) => {

    //const thisUser = req.payload._id

    const { receiver, comment } = req.body

    Post
        .create({ sender: thisUser, receiver, comment })
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




