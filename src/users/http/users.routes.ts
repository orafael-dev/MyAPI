import { Router } from 'express'
import { celebrate, Joi, Segments } from 'celebrate'
import { container } from 'tsyringe'
import multer from 'multer'
import uploadConfig from '@config/upload'
import { CreateUserController } from '@users/useCases/createUser/CreateUserController'
import { ListUsersController } from '@users/useCases/listUsers/ListUsersController'
import { CreateLoginController } from '@users/useCases/createLogin/CreateLoginController'
import { isAuthenticated } from '@shared/http/middlewares/isAuthenticated'
import { UpdateAvatarController } from '@users/useCases/updateAvatar/UpdateAvatarController'
import { ShowProfileController } from '@users/useCases/showProfile/ShowProfileController'
import { UpdateProfileController } from '@users/useCases/updateProfile/UpdateProfileController'

const usersRouter = Router()
const createUserController = container.resolve(CreateUserController)
const listUsersController = container.resolve(ListUsersController)
const createLoginController = container.resolve(CreateLoginController)
const updateAvatarController = container.resolve(UpdateAvatarController)
const showProfileController = container.resolve(ShowProfileController)
const updateProfileController = container.resolve(UpdateProfileController)

const upload = multer(uploadConfig)

usersRouter.post(
  '/',
  isAuthenticated,
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
      isAdmin: Joi.boolean().required(),
      roleId: Joi.string().uuid().required(),
    },
  }),
  (request, response) => {
    return createUserController.handle(request, response)
  },
)

usersRouter.get(
  '/',
  isAuthenticated,
  celebrate({
    [Segments.QUERY]: {
      page: Joi.number(),
      limit: Joi.number(),
    },
  }),
  (request, response) => {
    return listUsersController.handle(request, response)
  },
)

usersRouter.post(
  '/login',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    },
  }),
  (request, response) => {
    return createLoginController.handle(request, response)
  },
)

usersRouter.patch(
  '/avatar',
  isAuthenticated,
  upload.single('avatar'),
  (request, response) => {
    return updateAvatarController.handle(request, response)
  },
)

usersRouter.get('/profile', isAuthenticated, (request, response) => {
  return showProfileController.handle(request, response)
})

usersRouter.put(
  '/profile',
  isAuthenticated,
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      old_password: Joi.string(),
      password: Joi.string().optional(),
      password_confirmation: Joi.string()
        .valid(Joi.ref('password'))
        .when('password', {
          is: Joi.exist(),
          then: Joi.required(),
        }),
    },
  }),
  (request, response) => {
    return updateProfileController.handle(request, response)
  },
)

export { usersRouter }
