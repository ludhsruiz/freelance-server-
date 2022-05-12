const router = require("express").Router()
const { response } = require("express")
const Offer = require("../models/Offer.model")
const { isAuthenticated } = require("../middleware/jwt.middleware")



// ALL OFFERS
router.get("/", (req, res) => {

  Offer
    .find()
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

// OFFER CREATE
router.post("/create", isAuthenticated, (req, res) => {

  const {title, companyName, companyLogo, description } = req.body
  const publisher = req.payload._id

  Offer
    .create({ title, companyName, companyLogo, description, publisher })
    .then(response => res.json(response))
    .catch(err => res.status(500).json(err))
})


// OFFER EDIT
router.put("/:id/edit", (req, res ) => {

    const { id } = req.params
    const { title, companyName, companyLogo, description } = req.body

    Offer
      .findByIdAndUpdate(id, { title, companyName, companyLogo, description }, {new: true})
      .then(response => res.json(response))
      .catch(err =>res.status(500).json(err))
  })


// OFFER DELETE 
router.delete("/:id/delete", (req, res) => {

    const { id } = req.params

    Offer
        .findByIdAndDelete(id)
        .then(() => { res.json(response)})
        .catch((err) => next(err))
})


// OFFER SUBSCRIBE (( send to publisher info ??? ))
router.put("/:id/subscribe", (req, res) => {

    const { id } = req.params;
    // const thisUser = req.session.currentUser._id    ____ token

    Offer
        .findByIdAndUpdate(thisUser, { $addToSet: { courses : id } })
        .then(response => { res.json(response)})
        .catch((err) => next(err))
})




module.exports = router