import { RolesRepository } from "@roles/repositories/RolesRepository";
import { ListRolesUseCases } from "./ListRolesUseCase";
import { ListRolesController } from "./ListRolesController";

const rolesRepository = RolesRepository.getInstance()
const listRolesUseCase = new ListRolesUseCases(rolesRepository)
export const listRolesController = new ListRolesController(listRolesUseCase)
