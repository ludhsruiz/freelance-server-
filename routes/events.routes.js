const router = require("express").Router()
const { response } = require("express")
const { isAuthenticated } = require("../middleware/jwt.middleware")
const Event = require("../models/Event.model")


// ALL EVENTS
router.get("/", (req, res) => {

  Event
    .find()
    .populate()
    .then(response => res.json(response))
    .catch(err => res.status(500).json(err))
})

// ONE EVENT
router.get("/:id", isAuthenticated, (req, res) => {

  const { id } = req.params

  Event
    .findById(id)
    .then(response => res.json(response))
    .catch(err => res.status(500).json(err))
})

// EVENT CREATE
router.post("/create", (req, res) => {

  const { title, description, date, img, location, price } = req.body

  Event
    .create({ title, description, date, img, location, price })
    .then(response => res.json(response))
    .catch(err => res.status(500).json(err))
})

// EVENTS EDIT
router.put("/:id/edit", (req, res) => {

  const { id } = req.params
  const { title, description, date, img, location, price } = req.body


  Event
    .findByIdAndUpdate(id, { title, description, date, img, location, price }, { new: true })
    .then(response => res.json(response))
    .catch(err => res.status(500).json(err))
})


// EVENT DELETE 
router.delete("/:id/delete", (req, res) => {

  const { id } = req.params

  console.log(id)
  Event
    .findByIdAndDelete(id)
    .then(() => { res.json(response) })
    .catch((err) => next(err))
})


// EVENT ATTENDANCE  (( pay button n add to user ))
router.put("/:id/attendance", isAuthenticated, (req, res) => {

  const { id } = req.params;
  const thisUser = req.payload._id

  Event
    .findByIdAndUpdate(id, { $addToSet: { attendants: thisUser } })
    .then(response => { res.json(response) })
    .catch((err) => next(err))
})


// LEAVE EVENT    (( pay button n delete from user  ))
router.put("/:id/leave", isAuthenticated, (req, res) => {

  const { id } = req.params;
  const thisUser = req.payload._id


  Event
    .findByIdAndUpdate(id, { $pull: { attendants: thisUser } })
    .then(() => { res.json(response) })
    .catch((err) => next(err))
})





module.exports = router