const router = require("express").Router()
const Post = require('./../models/Post.model')
const User = require('./../models/User.model')

const { isAuthenticated } = require('./../middleware/jwt.middleware')


const test = []
test.push('hola')

router.get("/", isAuthenticated, (req, res) => {

    const thisUser = req.payload._id
    console.log('llego al server, ', thisUser)

    Post
        .find({ receiver: thisUser })
        .sort({ 'sender': 1 })
        .populate('sender', '_id name')
        .select('_id sender comment')
        .then(response => {


            res.json(response)


            const result = []
            result[0] = [response[0]]
            let index = 0

            for (let i = 0; i < response.length - 1; i++) {
                if (response[i].sender._id === response[i + 1].sender._id) {
                    result[index].push(response[i + 1])

                } else {
                    index += 1
                    result[index] = []
                    result[index].push(response[i + 1])
                }
            }
            console.log(result)

        })
    //.catch(err => res.status(500).json(err))
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




