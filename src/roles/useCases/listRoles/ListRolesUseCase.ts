import { Role } from '@roles/entitites/roles'
import { RolesRepository } from '@roles/repositories/RolesRepository'

export class ListRolesUseCases {
  constructor(private rolesRepository: RolesRepository) {}

  execute(): Role[] {
    return this.rolesRepository.findAll()
  }
}
