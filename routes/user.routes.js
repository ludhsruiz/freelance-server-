const router = require("express").Router()
const User = require('./../models/User.model')
const { isAuthenticated } = require('./../middleware/jwt.middleware')


router.get("/", (req, res) => {

    User
        .find()
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.get("/:user_id", isAuthenticated, (req, res) => {

    const { user_id } = req.params

    User
        .findById(user_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.put("/:user_id/edit", (req, res) => {

    const { user_id } = req.params
    const { name, surname, email, password, profileImg, role, description, bio, occupation } = req.body

    User
        .findByIdAndUpdate(user_id, { name, surname, email, password, profileImg, role, description, bio, occupation }, { new: true })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.put("/:user_id/role", (req, res) => {

    const { user_id } = req.params
    const { role } = req.body

    User
        .findByIdAndUpdate(user_id, { role }, { new: true })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.delete("/:user_id/delete", (req, res) => {

    const { user_id } = req.params

    User
        .findByIdAndDelete(user_id)
        .catch(err => res.status(500).json(err))
})

router.put("/:user_id/follow", isAuthenticated, (req, res) => {

    const { user_id } = req.params
    const thisUser = req.payload._id

    const promises = [User.findByIdAndUpdate(thisUser, { $addToSet: { following: user_id } }),
    User.findByIdAndUpdate(user_id, { $addToSet: { follower: thisUser } })]

    Promise
        .all(promises)
        .then((response) => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.put("/:user_id/unfollow", isAuthenticated, (req, res) => {

    const { user_id } = req.params
    const thisUser = req.payload._id

    const promises = [User.findByIdAndUpdate(thisUser, { $pull: { following: user_id } }),
    User.findByIdAndUpdate(user_id, { $pull: { follower: thisUser } })]


    Promise
        .all(promises)
        .then((response) => res.json(response))
        .catch(err => res.status(500).json(err))

})

router.get("/:user_id/followers", isAuthenticated, (req, res) => {
    const { user_id } = req.params
    User
        .findById(user_id)
        .populate('follower')
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.get("/:user_id/following", isAuthenticated, (req, res) => {

    const { user_id } = req.params

    User
        .findById(user_id)
        .populate('following')
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

module.exports = router
