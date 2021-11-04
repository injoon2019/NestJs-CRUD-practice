import { PartialType } from "@nestjs/mapped-types";
import { IsNumber, IsString } from "class-validator";
import { CreateContractDto } from "./createContract.dto";

export class UpdateContractDto extends PartialType(CreateContractDto) {
    
}