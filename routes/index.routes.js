
const router = require("express").Router()


router.get("/", (req, res, next) => {
  res.render("index", {user: req.session.currentUser})
})


module.exports = router
