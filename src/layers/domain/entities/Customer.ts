export interface Customer {
  id: string;
  name: string;
  email: string;
  accountNumber: string;
  accountType: AccountType;
  balance: number;
  isActive: boolean;
}

export enum AccountType {
  SAVINGS = "savings",
  CURRENT = "current",
  FIXED_DEPOSIT = "fixed_deposit",
}
