const router = require("express").Router()
const { response } = require("express")
const Offer = require("../models/Offer.model")
const { isAuthenticated } = require("../middleware/jwt.middleware")



// ALL OFFERS
router.get("/", (req, res) => {

  Offer
    .find()
    .populate('publisher')
    .then(response => res.json(response))
    .catch(err => res.status(500).json(err))
})


// GET OFFERS BY USER 
router.get("/own/:id", isAuthenticated, (req, res) => {

  const { id } = req.params

  Offer
    .find()
    // .populate('subscribers')
    .then(response => {

      const result = []
      response.forEach(elm => {

        elm.subscribers.forEach(el => {
          if (el == id) { result.push(elm) }

        })
      })

      res.json(result)
    })
    .catch(err => res.status(500).json(err))
})


// OFFER CREATE
router.post("/create", isAuthenticated, (req, res) => {

  const { title, companyName, companyLogo, description } = req.body
  const publisher = req.payload._id

  Offer
    .create({ title, companyName, companyLogo, description, publisher })
    .then(response => res.json(response))
    .catch(err => res.status(500).json(err))
})


// ONE OFFER
router.get("/:id", (req, res) => {

  const { id } = req.params

  Offer
    .findById(id)
    .then(response => res.json(response))
    .catch(err => res.status(500).json(err))
})

// OFFER EDIT
router.put("/:id/edit", (req, res) => {

  const { id } = req.params
  const { title, companyName, companyLogo, description } = req.body

  Offer
    .findByIdAndUpdate(id, { title, companyName, companyLogo, description }, { new: true })
    .then(response => res.json(response))
    .catch(err => res.status(500).json(err))
})


// OFFER DELETE 
router.delete("/:id/delete", (req, res) => {

  const { id } = req.params

  Offer
    .findByIdAndDelete(id)
    .then(() => { res.json(response) })
    .catch((err) => next(err))
})


// OFFER SUBSCRIBE
router.put("/:id/subscribe", isAuthenticated, (req, res) => {

  const { id } = req.params;
  const thisUser = req.payload._id

  Offer
    .findByIdAndUpdate(id, { $addToSet: { subscribers: thisUser } })
    .then(response => { res.json(response) })
    .catch((err) => next(err))
})

// OFFER UNSUBSCRIBE

router.put("/:id/unsubscribe", isAuthenticated, (req, res) => {

  const { id } = req.params;
  const thisUser = req.payload._id

  Offer
    .findByIdAndUpdate(id, { $pull: { subscribers: thisUser } })
    .then(response => { res.json(response) })
    .catch((err) => next(err))
})




module.exports = router