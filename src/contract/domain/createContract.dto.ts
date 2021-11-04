import { IsNumber, IsString } from "class-validator";

export class CreateContractDto {
    @IsString()
    readonly title: string;

    @IsNumber()
    readonly year: number;

    @IsString({each: true})
    readonly companies: string[];
}