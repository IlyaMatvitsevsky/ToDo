import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Task extends Model {
  @Column
  userId: number

  @Column
  name: string

  @Column
  description: string

  @Column
  deadline: Date

  @Column
  priority: string

  @Column({ defaultValue: false })
  completed: boolean
}