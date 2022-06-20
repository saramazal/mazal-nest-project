import {BelongsToMany, Column, DataType, HasMany, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {Role} from "../roles/roles.model";
import {UserRoles} from "../roles/user-roles.model";


interface UserCreationAttrs {
    email: string;
    password: string;

}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs> {
    @ApiProperty({example:'1', description: 'Unique id' })
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;
    @ApiProperty({example:'user@gmail.com', description: 'email' })
    @Column({type: DataType.STRING, unique: true,  allowNull: false})
    email: string;

    @ApiProperty({example:'123456789', description: 'password' })
    @Column({type: DataType.STRING,  allowNull: false})
    password: string;

    @ApiProperty({example:'true', description: 'bun or not' })
    @Column({type: DataType.BOOLEAN, defaultValue: false})
    banned: boolean;

    @ApiProperty({example:'disrespect', description: 'Reason for blocking' })
    @Column({type: DataType.STRING, allowNull: true})
    banReason: string;

    @BelongsToMany(() => Role, () => UserRoles)
    roles: Role[];


}