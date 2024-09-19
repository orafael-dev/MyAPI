import { DataSource } from "typeorm";
import { Role } from "@roles/entitites/roles";
import { CreateRolesTable1726770440518 } from "./migrations/1726770440518-CreateRolesTable";

export const dataSource = new DataSource({
    type: "sqlite",
    database: "./db.sqlite",
    entities: [Role],
    migrations: [CreateRolesTable1726770440518],

})
