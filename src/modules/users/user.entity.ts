import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class User extends Model<User> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  username: string;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  login: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @Column({
    type: DataType.ENUM,
    values: ['male', 'female'],
  })
  gender: string;

  @Column({
    type: DataType.DOUBLE,
  })
  height: number;

  @Column({
    type: DataType.DOUBLE,
  })
  weight: number;

  @Column({
    type: DataType.DATE,
  })
  birthDate: Date;

  @Column({
    type: DataType.ENUM,
    values: ['trainer', 'user'],
    allowNull: false,
  })
  role: string;
}
