import { Module } from '@nestjs/common';
import { ContractController } from './contract/contract.controller';

@Module({
  imports: [],
  controllers: [ContractController],
  providers: [],
})
export class AppModule {}
