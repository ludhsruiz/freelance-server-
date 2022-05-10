const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json("All good in here");
})

router.use("/auth", require('./auth.routes'))

router.use("/users", require('./user.routes'))

// router.use("/events", require('./events.routes'))

// router.use("/courses", require('./courses.routes'))

// router.use("/publishers", require('./publishers.routes'))

// router.use("/offers", require('./offers.routes'))

// router.use("/post", require('./post.routes'))
// payment 
// router.use("/subscription", require('./subscription.routes'))


module.exports = router