import { Test, TestingModule } from '@nestjs/testing';
import { ContractService } from './contract.service';

describe('ContractService', () => {
  let service: ContractService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContractService],
    }).compile();

    service = module.get<ContractService>(ContractService);
  });


  describe("getAllContracts", () => {
    it("Contracts 배열 반환", () => {
      const result = service.getAllContracts();
      expect(result).toBeInstanceOf(Array);
    });
  });

  describe("getContractById", () => {
    it("식별자와 일치하는 계약 반환", () => {
      service.createContract({
        "title": "test Title",
        "year" : 2021,
        "companies": ["companyA", "companyB"]
    });

    const contract = service.getContractById(1);
    expect(contract).toBeDefined();
    expect(contract.id).toEqual(1);
    })
  });

  describe("deleteContractById", () => {
    it("식별자와 일치하는 계약 삭제", () => {
      service.createContract({
        "title": "test Title",
        "year" : 2021,
        "companies": ["companyA", "companyB"]
    });

    const beforeContracts = service.getAllContracts();
    service.deleteContractById(1);
    const afterContracts = service.getAllContracts();
    expect(afterContracts.length).toBeLessThan(beforeContracts.length);
    })
  });

  describe("createContractById", () => {
    it("계약  생성", () => {
      const beforeContracts = service.getAllContracts().length;
      service.createContract({
        "title": "test Title",
        "year" : 2021,
        "companies": ["companyA", "companyB"]
      });
    const afterContracts = service.getAllContracts().length;
    expect(afterContracts).toBeGreaterThan(beforeContracts);
    })
  });

  describe("updateContractById", () => {
    it("계약  수정", () => {
      const beforeContracts = service.getAllContracts().length;
      service.createContract({
        "title": "test Title",
        "year" : 2021,
        "companies": ["companyA", "companyB"]
      });
      service.updateContract(1, {"title" : "Updated Title"});
      const updatedContract = service.getContractById(1);
      expect(updatedContract.title).toEqual("Updated Title");
    })
  });
});
