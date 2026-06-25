import { BankService, ServiceCategory } from "@/layers/domain/entities/BankService";

export interface IServiceRepository {
  findAll(): Promise<BankService[]>;
  findByCategory(category: ServiceCategory): Promise<BankService[]>;
  findById(id: string): Promise<BankService | null>;
}

export class ServiceRepository implements IServiceRepository {
  private static instance: ServiceRepository;
  private services: BankService[] = [
    {
      id: "1",
      name: "Personal Savings Account",
      description: "High-yield savings account with competitive interest rates",
      category: ServiceCategory.PERSONAL_BANKING,
      isActive: true,
    },
    {
      id: "2",
      name: "Business Current Account",
      description: "Flexible business banking solutions for enterprises",
      category: ServiceCategory.BUSINESS_BANKING,
      isActive: true,
    },
    {
      id: "3",
      name: "Home Loan",
      description: "Affordable home loans with flexible repayment options",
      category: ServiceCategory.LOANS,
      isActive: true,
    },
    {
      id: "4",
      name: "Mobile Banking",
      description: "Bank on the go with our secure mobile app",
      category: ServiceCategory.DIGITAL_SERVICES,
      isActive: true,
    },
  ];

  private constructor() {}

  static getInstance(): ServiceRepository {
    if (!ServiceRepository.instance) {
      ServiceRepository.instance = new ServiceRepository();
    }
    return ServiceRepository.instance;
  }

  async findAll(): Promise<BankService[]> {
    return this.services.filter(service => service.isActive);
  }

  async findByCategory(category: ServiceCategory): Promise<BankService[]> {
    return this.services.filter(
      service => service.category === category && service.isActive
    );
  }

  async findById(id: string): Promise<BankService | null> {
    const service = this.services.find(s => s.id === id);
    return service || null;
  }
}
