import { Migration } from '@mikro-orm/migrations';

export class Migration20240707104140 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table if not exists "omnibus_model" ("id" text not null, "product_id" text not null, "price" numeric not null, "raw_price" jsonb not null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "omnibus_model_pkey" primary key ("id"));');
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists "omnibus_model" cascade;');
  }

}
