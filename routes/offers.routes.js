const router = require("express").Router()
const { response } = require("express")
const Offer = require("../models/Offer.model")


// ALL OFFERS
router.get("/", (req, res) => {

  Offer
    .find()
    .then(response => res.json(response))
    .catch(err => res.status(500).json(err))
})


// OFFER CREATE
router.post("/create", (req, res) => {

  const { title, companyName, companyLogo, description } = req.body

  Offer
    .create({ title, companyName, companyLogo, description })
    .then(response => res.json(response))
    .catch(err => res.status(500).json(err))
})

// OFFER EDIT
router.put("/:id/edit", (req, res ) => {

    const { id } = req.params
    const { title, companyName, companyLogo, description } = req.body

  
    Course
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
router.put("/:id/attendance", (req, res) => {

    const { id } = req.params;
    // const thisUser = req.session.currentUser._id    ____ token

    Offer
        .findByIdAndUpdate(thisUser, { $addToSet: { courses : id } })
        .then(response => { res.json(response)})
        .catch((err) => next(err))
})








module.exports = router