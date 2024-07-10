import { model } from "@medusajs/utils";

const OmnibusModel = model.define("omnibus_model", {
  id: model.id().primaryKey(),
  product_id: model.text(),
  price: model.bigNumber(),
});

export default OmnibusModel;
