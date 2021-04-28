import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'deviceData' })
export class Device {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: Date;

  @Column()
  meantemp: number;

  @Column()
  humidity: number;

  @Column({ name: 'wind_speed' })
  windSpeed: number;

  @Column()
  meanpressure: number;
}
