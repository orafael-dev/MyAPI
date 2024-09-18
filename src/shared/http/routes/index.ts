import { Router } from "express";

const routes = Router()

routes.get('/', (request, response) => {
  throw new Error('Access denied')
  return response.json({ message: 'Olá Dev!' })
})

export {routes}

