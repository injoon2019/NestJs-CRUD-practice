import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('contract')
export class ContractController {

    @Get('/:id')
    getContract(@Param('id') contractId: string) {
        return `This will return one contract with the id : ${contractId} `;
    }

    @Post()
    createContract(@Body() contractCreateDto) {
        return contractCreateDto;
    }

    @Delete('/:id')
    deleteContract(@Param('id') contractId: string) {
        return `This will delete on contract with the id : ${contractId} `;
    }

    @Patch('/:id')
    updateContract(@Param('id') contractId: string, @Body() updateContractDto) {
        return {
            updateId: contractId,
            ...updateContractDto,
        }
    }
}
