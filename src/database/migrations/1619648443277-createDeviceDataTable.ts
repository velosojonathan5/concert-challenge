import { MigrationInterface, QueryRunner, Table, TableColumn } from 'typeorm';

const deviceDataTable = new Table({
  name: 'deviceData',
});

const id = new TableColumn({
  name: 'id',
  type: 'int',
  isPrimary: true,
  isGenerated: true,
});
const date = new TableColumn({ name: 'date', type: 'date' });
const meantemp = new TableColumn({ name: 'meantemp', type: 'numeric' });
const humidity = new TableColumn({ name: 'humidity', type: 'numeric' });
const windSpeed = new TableColumn({ name: 'wind_speed', type: 'numeric' });
const meanpressure = new TableColumn({ name: 'meanpressure', type: 'numeric' });

deviceDataTable.addColumn(id);
deviceDataTable.addColumn(date);
deviceDataTable.addColumn(meantemp);
deviceDataTable.addColumn(humidity);
deviceDataTable.addColumn(windSpeed);
deviceDataTable.addColumn(meanpressure);

export class createDeviceTable1619648443277 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(deviceDataTable);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(deviceDataTable);
  }
}
