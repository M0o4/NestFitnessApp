import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class User extends Model<User> {
  @Column({
    type: DataType.STRING,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: string;

  @Column({
    type: DataType.STRING,
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
    type: DataType.INTEGER,
  })
  sex: number;

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
    type: DataType.INTEGER,
  })
  role: number;
}
