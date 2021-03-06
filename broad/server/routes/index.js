const router = require("express").Router()
const authRouter = require('./auth.routes')
const usersRouter = require('./users.routes')
const exchangesRouter = require('./exchanges.routes')
const userBooksRouter = require('./userBooks.routes')
const quotesRouter = require('./quotes.routes')
const friendsRouter = require('./friends.routes')
const chatRouter = require('./chat.routes')
const challengesRouter = require('./challenges.routes')

router.use("/auth", authRouter)
router.use("/users", usersRouter)
router.use("/exchanges", exchangesRouter)
router.use("/user-books", userBooksRouter)
router.use("/quotes", quotesRouter)
router.use("/friends", friendsRouter)
router.use("/chat", chatRouter)
router.use("/challenges", challengesRouter)

module.exports = router;
