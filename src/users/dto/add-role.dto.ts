import {IsNumber, IsString} from "class-validator";

export class AddRoleDto {
    @IsString({message: "Should be a srting"})
    readonly value: string;
    @IsNumber({}, {message: "Should be a number"})
    readonly userId: number;
}