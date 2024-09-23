import { container } from "tsyringe"
import { UpdateAvatarUseCase } from "./UpdateAvatarUseCase"
import { Request, Response } from "express"
import { instanceToInstance } from "class-transformer"

export class UpdateAvatarController {
  async handle(request: Request, response: Response): Promise<Response> {
    const updateAvatarUseCase = container.resolve(UpdateAvatarUseCase)
    const user = await updateAvatarUseCase.execute({
     userId: request.user.id,
     avatarFilename: request.file.filename
    })
    return response.json(instanceToInstance(user))
  }
}
