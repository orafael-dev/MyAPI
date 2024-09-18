import { Request, Response } from 'express'
import { ListRolesUseCases } from './ListRolesUseCase'

export class ListRolesController {
  constructor(private listRolesUseCase: ListRolesUseCases) {}

  handle(request: Request, response: Response): Response {
    const roles = this.listRolesUseCase.execute()
    return response.json(roles)
  }
}
