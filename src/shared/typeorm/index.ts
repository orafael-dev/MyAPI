import { DataSource } from "typeorm";
import { CreateRolesTable1726751399204 } from "./migrations/1726751399204-CreateRolesTable";
import { Role } from "@roles/entitites/roles";

export const dataSource = new DataSource({
    type: "sqlite",
    database: "./db.sqlite",
    entities: [Role],
    migrations: [CreateRolesTable1726751399204],

})
