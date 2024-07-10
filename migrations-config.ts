import { defineMikroOrmCliConfig } from "@medusajs/utils";
import path from "path";
import OmnibusModel from "./models/omnibus-model";

export default defineMikroOrmCliConfig("omnibus_module", {
  entities: [OmnibusModel] as any[],
  migrations: {
    path: path.join(__dirname, "migrations"),
  },
});
