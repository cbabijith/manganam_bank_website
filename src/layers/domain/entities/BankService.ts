export interface BankService {
  id: string;
  name: string;
  description: string;
  category: ServiceCategory;
  isActive: boolean;
}

export enum ServiceCategory {
  PERSONAL_BANKING = "personal_banking",
  BUSINESS_BANKING = "business_banking",
  LOANS = "loans",
  INVESTMENTS = "investments",
  DIGITAL_SERVICES = "digital_services",
}
