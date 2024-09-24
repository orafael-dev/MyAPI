import { DataSource } from 'typeorm'
import { Role } from '@roles/entitites/roles'
import { CreateRolesTable1726770440518 } from './migrations/1726770440518-CreateRolesTable'
import { CreateUsersTable1726854494728 } from './migrations/1726854494728-CreateUsersTable'
import { AddRoleIdToUsersTable1726855958595 } from './migrations/1726855958595-AddRoleIdToUsersTable'
import { User } from '@users/entities/User'
import { CreateRefreshTokensTable1727178892367 } from './migrations/1727178892367-CreateRefreshTokensTable'
import { RefreshToken } from '@users/entities/RefreshToken'

export const dataSource = new DataSource({
  type: 'sqlite',
  database: './db.sqlite',
  entities: [Role, User, RefreshToken],
  migrations: [
    CreateRolesTable1726770440518,
    CreateUsersTable1726854494728,
    AddRoleIdToUsersTable1726855958595,
    CreateRefreshTokensTable1727178892367
  ],
})
