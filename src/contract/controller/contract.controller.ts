import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { createHistogram } from 'perf_hooks';
import { Contract } from '../domain/contract.entity';
import { ContractService } from '../service/contract.service';

@Controller('contract')
export class ContractController {

    constructor(private readonly contractService: ContractService) {}

    @Get()
    getAllContracts(): Contract[] {
        return this.contractService.getAllContracts();
    }

    @Get('/:id')
    getContract(@Param('id') id: string) {
        return this.contractService.getContractById(id);
    }

    @Post()
    createContract(@Body() contractCreateDto) {
        return this.contractService.createContract(contractCreateDto);
    }

    @Delete('/:id')
    deleteContract(@Param('id') id: string) {
        return this.contractService.deleteContractById(id);
    }

    @Patch('/:id')
    updateContract(@Param('id') id: string, @Body() updateContractDto) {
        return this.contractService.
    }
}
