import { Role } from '@roles/entitites/roles'
import { RolesRepository } from '@roles/repositories/RolesRepository'
import { AppError } from '@shared/errors/AppError'

type CreateRoleDTO = {
  name: string
}

export class CreateRoleUseCase {
  constructor(private rolesRepository: RolesRepository) {}

  async execute({ name }: CreateRoleDTO): Promise<Role> {
    const roleAlreadExists = await this.rolesRepository.findByName(name)

    if (roleAlreadExists) {
      throw new AppError('Role already exists')
    }

    return this.rolesRepository.create({ name })
  }
}
