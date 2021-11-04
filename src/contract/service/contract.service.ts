import { Injectable } from '@nestjs/common';
import { Contract } from '../domain/contract.entity';

@Injectable()
export class ContractService {
    private contracts: Contract[] = [];

    getAllContracts(): Contract[] {
        return this.contracts;
    }

    getContractById(id: string): Contract {
        return this.contracts.find(contract => contract.id === +id);
    }

    deleteContractById(id: string): boolean {
        this.contracts.filter(contract => contract.id !== +id);
        return true;
    }

    createContract(contractData) {
        this.contracts.push({
            id: this.contracts.length + 1,
            ...contractData,
        })
    }

    update(id: string, updateCreateData) {
        const contract  = this.getContractById(id);
        this.deleteContractById(id);
        this.contracts.push({...contract, ...updateCreateData});
    }
}
