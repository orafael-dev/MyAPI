import { DataSource } from "typeorm";
import { CreateRolesTable1726751399204 } from "./migrations/1726751399204-CreateRolesTable";

export const dataSource = new DataSource({
    type: "sqlite",
    database: "./db.sqlite",
    entities: [],
    migrations: [CreateRolesTable1726751399204],

})
