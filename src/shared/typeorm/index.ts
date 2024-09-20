import { DataSource } from "typeorm";
import { Role } from "@roles/entitites/roles";
import { CreateRolesTable1726770440518 } from "./migrations/1726770440518-CreateRolesTable";
import { CreateUsersTable1726854494728 } from "./migrations/1726854494728-CreateUsersTable";

export const dataSource = new DataSource({
    type: "sqlite",
    database: "./db.sqlite",
    entities: [Role],
    migrations: [CreateRolesTable1726770440518, CreateUsersTable1726854494728],

})
