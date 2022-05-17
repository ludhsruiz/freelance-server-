const router = require('express').Router()

const Publisher = require('../models/Publisher.model')
const Subscription = require('../models/Subscription.model')
// const { isAuthenticated } = require('../middlewares/jwt.middleware')


// CREATE SUBSCRIPTION
router.post('/create', (req, res) => {

    console.log('me suscribo')
    const { publisher, amount } = req.body

    Subscription
        .create({ publisher, amount })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


// GET SUBSCRIPTIONS 
router.get('/', (req, res) => {

    Subscription
        .find()
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


// GET ONE SUBSCRIPTIONS 
// router.get('/:id', (req, res) => {

//     Subscription
//         .find()
//         .populate('publisher')
//         .then(response => res.json(response))
//         .catch(err => res.status(500).json(err))
// })

// GET ONE SUBSCRIBER id = publisher
router.get('/:id/publisher', (req, res) => {

    const { id } = req.params

    Subscription
        .find({ 'publisher': id })
        .populate('publisher')
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})



// DELETE SUBSCRIPTION
// router.delete('/:id/delete', (req, res) => {

//     const { subscription_id } = req.params

//     Subscription
//         .findByIdAndRemove(subscription_id)
//         .then(response => res.json(response))
//         .catch(err => res.status(500).json(err))
// })


module.exports = router