import { Role } from '@roles/entitites/roles'
import { IRolesRepository } from '@roles/repositories/IRolesRepository'
import { AppError } from '@shared/errors/AppError'
import { inject, injectable } from 'tsyringe'

type CreateRoleDTO = {
  name: string
}

@injectable()
export class CreateRoleUseCase {
  constructor(
    @inject('RolesRepository')
    private rolesRepository: IRolesRepository) {}

  async execute({ name }: CreateRoleDTO): Promise<Role> {
    const roleAlreadExists = await this.rolesRepository.findByName(name)

    if (roleAlreadExists) {
      throw new AppError('Role already exists')
    }

    return this.rolesRepository.create({ name })
  }
}
