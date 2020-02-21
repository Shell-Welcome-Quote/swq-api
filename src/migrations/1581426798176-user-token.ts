import { MigrationInterface, QueryRunner } from 'typeorm';

export class userToken1581426798176 implements MigrationInterface {
  public name = 'TableUserToken1581426798176';

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      // language=PostgreSQL
      `CREATE TABLE "Tokens"
      (
      "id"   SERIAL            NOT NULL,
      "userId" CHARACTER VARYING NOT NULL,
      "token" CHARACTER VARYING NOT NULL,
      CONSTRAINT "PK_Tokens_id_3f1a6bc3" PRIMARY KEY ("id")
      )`,
      undefined,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    // language=PostgreSQL
    await queryRunner.query('DROP TABLE "Tokens"', undefined);
  }
}
