import { MedusaService } from "@medusajs/utils";
import OmnibusModel from "./models/omnibus-model";
import { Logger } from "@medusajs/medusa";
import { EntityManager } from "@mikro-orm/postgresql";

type InjectedDependencies = {
  logger: Logger;
  manager: EntityManager;
};

class OmnibusModuleService extends MedusaService({
  OmnibusModel,
}) {
  protected logger_: Logger;
  protected manager_: EntityManager;

  constructor({ logger, manager }: InjectedDependencies) {
    super(...arguments);
    this.logger_ = logger;
    this.manager_ = manager;
    this.logger_.info("[Omnibus Module Service]: Initialized");
  }

  async createOrUpdateRecord({
    product_id,
    price,
  }: {
    product_id: string;
    price: number;
  }) {
    const record = await this.listOmnibusModels({ product_id: product_id });

    if (record.length > 0) {
      if (record[0].price > price) {
        const recordId = record[0].id.toString();
        this.logger_.info(`Updating record with id ${recordId}`);
        const res = await this.updateOmnibusModels(recordId, { price: price });
        this.logger_.info(`${res} record updated`);
      }
    } else {
      this.logger_.info(`Creating new record for product_id: ${product_id}`);
      const newRecord = await this.createOmnibusModels({
        product_id: product_id,
        price: price,
      });
      this.logger_.info(`New record created with id ${newRecord.id}`);
    }
  }
}

export default OmnibusModuleService;
