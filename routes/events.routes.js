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

// ONE EVENT BY IDUSER
router.get("/own/:id", isAuthenticated, (req, res) => {

  const { id } = req.params

  Event
    .find()
    //.populate('attendants')
    .then(response => {
      const result = []
      response.forEach(elm => {

        elm.attendants.forEach(el => {

          if (el == id) { result.push(elm) }

        })


      })

      res.json(result)
    })
    .catch(err => res.status(500).json(err))
})


// EVENT CREATE
router.post("/create",  isAuthenticated,  (req, res) => {

  const { title, description, date, img, location, price } = req.body
  const owner = req.payload._id

  Event
    .create({ title, description, date, img, location, price, owner })
    .then(response => res.json(response))
    .catch(err => res.status(500).json(err))
})

// ONE EVENT
router.get("/:id", isAuthenticated, (req, res) => {

  const { id } = req.params

  Event
    .findById(id)
    .populate('attendants')
    .then(response => res.json(response))
    .catch(err => res.status(500).json(err))
})

// EVENTS EDIT
router.put("/:id/edit", (req, res) => {

  const { id } = req.params
  const { title, description, date, img, location, price } = req.body
  let query = {}

  if (img === '') {
    query = { title, description, date, location, price }
  } else {
    query = { title, description, date, img, location, price }
  }


  Event
    .findByIdAndUpdate(id, query, { new: true })
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

  console.log('EVENT ATTENDANCE ', req.params, thisUser)

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