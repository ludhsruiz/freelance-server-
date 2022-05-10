const router = require('express').Router()

const Publisher = require('../models/Publisher.model')
const Subscription = require('../models/Subscription.model')
// const { isAuthenticated } = require('../middlewares/jwt.middleware')


// CREATE SUBSCRIPTION
router.post('/create', (req, res) => {

    const { Publisher } = req.body
    // const { _id } = req.payload

    Publisher
        .findById(Publisher)
        // .then(() => {
        //     return Subscription.create({ publisher:_id, year, totalPrice})
        // })
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



// DELETE SUBSCRIPTION
router.delete('/:id/delete', (req, res) => {

    const { subscription_id } = req.params

    Subscription
        .findByIdAndRemove(subscription_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


module.exports = router