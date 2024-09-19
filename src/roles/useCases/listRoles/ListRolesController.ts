import { Request, Response } from 'express'
import { ListRolesUseCases } from './ListRolesUseCase'

export class ListRolesController {
  constructor(private listRolesUseCase: ListRolesUseCases) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const page =
      request.query.page && Number(request.query.page) > 0
        ? Number(request.query.page)
        : 1

    const limit = request.query.limit && Number(request.query.limit) > 0
    ? Number(request.query.limit)
    : 15

    const roles = await this.listRolesUseCase.execute({ page, limit })
    return response.json(roles)
  }
}
