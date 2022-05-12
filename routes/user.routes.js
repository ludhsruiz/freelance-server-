const router = require("express").Router()

const User = require('./../models/User.model')

//const { isAuthenticated } = require('./../middleware/jwt.middleware')

// GET USERS
router.get("/", (req, res) => {

    User
        .find()
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

// GET ONE USER
router.get("/:user_id", (req, res) => {

    const { user_id } = req.params

    User
        .findById(user_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

// EDIT USER 
router.put("/:user_id/edit", (req, res) => {

    const { user_id } = req.params
    const { name, surname, email, password, description, occupation } = req.body

    User
        .findByIdAndUpdate(user_id, { name, surname, email, password, description, occupation }, { new: true })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

// DELETE USER
router.delete("/:user_id/delete", (req, res) => {

    const { user_id } = req.params

    User
        .findByIdAndDelete(user_id)
        .catch(err => res.status(500).json(err))
})


// USER FOLLOW

router.put("/:user_id/follow", (req, res) => {

    const { user_id } = req.params
    const thisUser = req.body

    const promises = [User.findByIdAndUpdate(thisUser, { $addToSet: { following: user_id } }),
    User.findByIdAndUpdate(user_id, { $addToSet: { follower: thisUser } })]


    Promise
        .all(promises)
        .then((response) => res.json(response))
        .catch(err => res.status(500).json(err))
})


// USER UNFOLLOW

router.put("/:user_id/unfollow", (req, res) => {

    const { user_id } = req.params
    const thisUser = req.body

    const promises = [User.findByIdAndDelete(thisUser, { $addToSet: { following: user_id } }),
    User.findByIdAndDelete(user_id, { $addToSet: { follower: thisUser } })]


    Promise
        .all(promises)
        .then((response) => res.json(response))
        .catch(err => res.status(500).json(err))

})
module.exports = router
