import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id: Number;

  @Column({ length: 100 })
  name: String;

  @Column()
  description: String;

  @Column()
  when: Date;

  @Column()
  address: String;
}
