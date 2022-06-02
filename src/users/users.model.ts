import {Model, Table, Column, DataType} from 'sequelize-typescript'

interface UserCreationAttrs {
    email: string;
    password: string;

}

@Table({tableName: 'users'})
export class User extends Model<User > {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING, unique: true,  allowNull: false})
    email: string;

    @Column({type: DataType.STRING,  allowNull: false})
    password: string;

    @Column({type: DataType.BOOLEAN, defaultValue: false})
    banned: boolean;

    @Column({type: DataType.BOOLEAN, allowNull: true})
    banReason: string;
}