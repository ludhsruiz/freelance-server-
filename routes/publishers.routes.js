const router = require("express").Router()
const { response } = require("express")
const Publisher = require("../models/Publisher.model")


// ALL PUBLISHERS
router.get("/", (req, res) => {

  Publisher
    .find()
    .then(response => res.json(response))
    .catch(err => res.status(500).json(err))
})

// PUBLISHERS CREATE
router.post("/create", (req, res) => {

  const { name, contacto, companyLogo, description, owner } = req.body
  const userId = req.payload._id

  Publisher
    .create({ name, contacto, companyLogo, description, owner })
    // .then(() => {
    //   return Subscription.create({ publisher: userId, totalPrice})
    //  })

    .then(response => res.json(response))
    .catch(err => {
      console.log(err)
      res.status(500).json(err)
  })

})

// PUBLISHERS EDIT
router.put("/:id/edit", (req, res) => {

    const { id } = req.params
    const { name, contacto, companyLogo, description, owner } = req.body

  
    Publisher
      .findByIdAndUpdate(id, { name, contacto, companyLogo, description, owner }, {new: true})
      .then(response => res.json(response))
      .catch(err =>res.status(500).json(err))
  })


// PUBLISHERS DELETE
router.delete("/:id/delete", (req, res, next) => {

    const { id } = req.params

    Publisher
        .findByIdAndDelete(id)
        .then(response => res.json(response))
        .catch((err) => next(err))
})


// PUBLISHER FOLLOW
router.put("/:id/follow", (req, res, next) => {

    const { id } = req.params;
    // const { _id } = req.payload

    Publisher
        .findByIdAndUpdate(_id, { $addToSet: { publishers : id } })
        .then(response => res.json(response))
        .catch((err) => next(err))
})


// UNFOLLOW PUBLISHER
router.put("/:id/unfollow",  (req, res, next) => {

    const { id } = req.params;
    // const { _id } = req.payload

    Publisher     
        .findByIdAndUpdate(_id, { $pull: { publishers : id } })
        .then(response => res.json(response))
        .catch((err) => next(err))
})





module.exports = router