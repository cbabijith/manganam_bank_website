import { BankService, ServiceCategory } from "@/layers/domain/entities/BankService";

export class BankServiceService {
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

  getAllServices(): BankService[] {
    return this.services.filter(service => service.isActive);
  }

  getServicesByCategory(category: ServiceCategory): BankService[] {
    return this.services.filter(
      service => service.category === category && service.isActive
    );
  }

  getServiceById(id: string): BankService | undefined {
    return this.services.find(service => service.id === id);
  }
}
