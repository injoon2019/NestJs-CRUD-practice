import { Module } from '@nestjs/common';
import { ContractController } from './contract/controller/contract.controller';
import { ContractService } from './contract/service/contract.service';


@Module({
  imports: [],
  controllers: [ContractController],
  providers: [ContractService],
})
export class AppModule {}
