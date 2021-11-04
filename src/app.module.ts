import { Module } from '@nestjs/common';
import { ContractModule } from './contract.module';


@Module({
  imports: [ContractModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
