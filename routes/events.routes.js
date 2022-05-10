const router = require("express").Router()
const { response } = require("express")
const Event = require("../models/Event.model")


// ALL EVENTS
router.get("/", (req, res, next) => {

  Event
    .find()
    .then(response => res.json(response))
    .catch(err => res.status(500).json(err))
})

// EVENT CREATE
router.post("/create", (req, res, next) => {

  const { title, description, date, img, location, price } = req.body

  Event
    .create({ title, description, date, img, location, price })
    .then(response => res.json(response))
    .catch(err => res.status(500).json(err))
})

// EVENTS EDIT
router.put("/:id/edit", (req, res, next) => {

    const { id } = req.params
    const { title, description, date, img, location, price } = req.body

  
    Event
      .findByIdAndUpdate(id, { title, description, date, img, location, price }, {new: true})
      .then(response => res.json(response))
      .catch(err =>res.status(500).json(err))
  })


// EVENT DELETE (( pay back ???? ))
router.delete("/:id/delete", (req, res, next) => {

    const { id } = req.params

    Event
        .findByIdAndDelete(id)
        .then(() => { res.json(response)})
        .catch((err) => next(err))
})


// EVENT ATTENDANCE  (( pay button n add to user ))
router.put("/:id/attendance", (req, res, next) => {

    const { id } = req.params;
    // const thisUser = req.session.currentUser._id    ____ token

    Publisher
        .findByIdAndUpdate(thisUser, { $addToSet: { events : id } })
        .then(response => { res.json(response)})
        .catch((err) => next(err))
})


// LEAVE EVENT    (( pay button n delete from user  ))
router.put("/:id/leave",  (req, res, next) => {

    const { id } = req.params;
    // const thisUser = req.session.currentUser._id

    Publisher     
        .findByIdAndUpdate(thisUser, { $pull: { events : id } })
        .then(() => { res.json(response) })
        .catch((err) => next(err))
})





module.exports = router