import { Injectable } from '@nestjs/common';
import { Contract } from '../domain/contract.entity';
import { CreateContractDto } from '../domain/createContract.dto';

@Injectable()
export class ContractService {
    private contracts: Contract[] = [];

    getAllContracts(): Contract[] {
        return this.contracts;
    }

    getContractById(id: number): Contract {
        return this.contracts.find(contract => contract.id === id);
    }

    deleteContractById(id: number): boolean {
        this.contracts = this.contracts.filter(contract => contract.id !== id);
        return true;
    }

    createContract(contractData: CreateContractDto) {
        this.contracts.push({
            id: this.contracts.length + 1,
            ...contractData,
        })
    }

    updateContract(id: number, updateCreateData) {
        const contract  = this.getContractById(id);
        this.deleteContractById(id);
        this.contracts.push({...contract, ...updateCreateData});
    }
}
