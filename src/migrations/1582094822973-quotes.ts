import { MigrationInterface, QueryRunner } from 'typeorm';

export class quotes1582094822973 implements MigrationInterface {
  public name = 'quotes1582094822973';

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      // language=PostgreSQL
      `CREATE TABLE "Quotes"
         (
             "id"   SERIAL            NOT NULL,
             "title" CHARACTER VARYING NOT NULL,
             "text" TEXT NOT NULL,
             "type" INTEGER NOT NULL,
             CONSTRAINT "PK_Quotes_id_3f1a6bc3" PRIMARY KEY ("id")
         )`,
      undefined,
    );
    await queryRunner.query(
      // language=PostgreSQL
      `CREATE TABLE "UsersQuotes"
         (
             "userId"  SERIAL NOT NULL,
             "quoteId" SERIAL NOT NULL,
             CONSTRAINT "PK_UsersQuotes_id_3f1a6bc3" PRIMARY KEY ("userId", "quoteId")
         )`,
      undefined,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    // language=PostgreSQL
    await queryRunner.query('DROP TABLE "Quotes"', undefined);
    await queryRunner.query('DROP TABLE "UsersQuotes"', undefined);
  }

}
