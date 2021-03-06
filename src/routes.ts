import { Router } from 'express'
import { CreateUserController } from './controllers/CreateUserController'
import { CreateTagController } from './controllers/CreateTagController'
import { ensureAdmin } from './middlewares/ensureAdmin'
import { AuthenticateUserController } from './controllers/AuthenticateUserController'
import { CreateComplimentController } from './controllers/CreateComplimentController'
import { ensureAuthenticated } from './middlewares/ensureAuthenticated'
import { ListUserSendComplimentController } from './controllers/ListUserSendComplimentController'
import { ListUserReceiveComplimentController } from './controllers/ListUserReceiveComplimentController'
import { ListTagsController } from './controllers/ListTagsController'
import { ListUsersController } from './controllers/ListUsersController'

const router = Router()

const createUserController = new CreateUserController()
const listUsersController = new ListUsersController()
const createTagController = new CreateTagController()
const listTagController = new ListTagsController()
const authenticateUserController = new AuthenticateUserController()
const createComplimentController = new CreateComplimentController()
const listUserSendComplimentController = new ListUserSendComplimentController()
const listUserReceiveComplimentController = new ListUserReceiveComplimentController()

router.post("/tags", ensureAuthenticated, ensureAdmin, createTagController.handle)
router.get("/tags", ensureAuthenticated, listTagController.handle)
router.post("/users", createUserController.handle)
router.post("/login", authenticateUserController.handle)
router.post("/compliments", ensureAuthenticated, createComplimentController.handle)
router.get("/users/compliments/send", ensureAuthenticated, listUserSendComplimentController.handle)
router.get("/users/compliments/receive", ensureAuthenticated, listUserReceiveComplimentController.handle)
router.get("/users", ensureAuthenticated, listUsersController.handle)

export { router }