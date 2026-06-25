export interface DepositScheme {
  id: string;
  name: string;
  nameML: string;
  interestRate: string;
  minAmount: string;
  maxAmount: string;
  tenure: string;
  features: string[];
  featuresML: string[];
}

export const depositSchemes: DepositScheme[] = [
  {
    id: "savings-account",
    name: "Savings Account",
    nameML: "സേവിംഗ്സ് അക്കൗണ്ട്",
    interestRate: "3.5% - 4% p.a.",
    minAmount: "₹500",
    maxAmount: "No Limit",
    tenure: "Unlimited",
    features: [
      "ATM Card facility",
      "Online banking assistance",
      "Mobile banking",
      "Zero balance for students",
      "Free cheque book",
    ],
    featuresML: [
      "ATM കാർഡ് സൗകര്യം",
      "ഓൺലൈൻ ബാങ്കിംഗ് സഹായം",
      "മൊബൈൽ ബാങ്കിംഗ്",
      "വിദ്യാർത്ഥികൾക്ക് സൗജന്യ അക്കൗണ്ട്",
      "സൗജന്യ ചെക്ക് പുസ്തകം",
    ],
  },
  {
    id: "fixed-deposit",
    name: "Fixed Deposit",
    nameML: "ഫിക്സഡ് ഡിപ്പോസിറ്റ്",
    interestRate: "6.5% - 7.5% p.a.",
    minAmount: "₹1,000",
    maxAmount: "No Limit",
    tenure: "7 days - 10 years",
    features: [
      "High interest rates",
      "Flexible tenure options",
      "Loan against FD",
      "Premature withdrawal facility",
      "Auto-renewal option",
    ],
    featuresML: [
      "ഉയർന്ന പലിശ നിരക്കുകൾ",
      "വഴക്കമുള്ള കാലയളവ് ഓപ്ഷനുകൾ",
      "FD-ക്കെതിരെ വായ്പ",
      "മുൻകൂർ പിൻവലിപ്പ് സൗകര്യം",
      "ഓട്ടോ-നവീകരണ ഓപ്ഷൻ",
    ],
  },
  {
    id: "recurring-deposit",
    name: "Recurring Deposit",
    nameML: "റിക്കറിംഗ് ഡിപ്പോസിറ്റ്",
    interestRate: "6% - 7% p.a.",
    minAmount: "₹100 per month",
    maxAmount: "No Limit",
    tenure: "6 months - 10 years",
    features: [
      "Small monthly deposits",
      "Disciplined savings",
      "High returns",
      "Loan against RD",
      "Flexible deposit amounts",
    ],
    featuresML: [
      "ചെറിയ മാസിക നിക്ഷേപങ്ങൾ",
      "അച്ചടക്കമുള്ള സേവിംഗ്സ്",
      "ഉയർന്ന വരുമാനം",
      "RD-ക്കെതിരെ വായ്പ",
      "വഴക്കമുള്ള നിക്ഷേപ തുകകൾ",
    ],
  },
  {
    id: "childrens-deposit",
    name: "Children's Deposit",
    nameML: "കുട്ടികളുടെ നിക്ഷേപം",
    interestRate: "7% p.a.",
    minAmount: "₹500 per month",
    maxAmount: "₹50,000 per month",
    tenure: "5 years - 15 years",
    features: [
      "Special interest rate",
      "Educational support",
      "Flexible contribution",
      "Maturity benefits",
      "Gift vouchers on special occasions",
    ],
    featuresML: [
      "പ്രത്യേക പലിശ നിരക്ക്",
      "വിദ്യാഭ്യാസ പിന്തുണ",
      "വഴക്കമുള്ള സംഭാവന",
      "പക്വത ആനുകൂല്യങ്ങൾ",
      "പ്രത്യേക അവസരങ്ങളിൽ സമ്മാന വൗച്ചറുകൾ",
    ],
  },
  {
    id: "senior-citizen-deposit",
    name: "Senior Citizen Deposit",
    nameML: "സീനിയർ സിറ്റിസൻ ഡിപ്പോസിറ്റ്",
    interestRate: "7.5% - 8% p.a.",
    minAmount: "₹1,000",
    maxAmount: "No Limit",
    tenure: "1 year - 10 years",
    features: [
      "Additional 0.5% interest",
      "Priority service",
      "Home collection facility",
      "Quarterly interest payout",
      "Flexible tenure",
    ],
    featuresML: [
      "അധിക 0.5% പലിശ",
      "മുൻഗണനാ സേവനം",
      "വീട്ടിൽ നിന്നുള്ള ശേഖരണ സൗകര്യം",
      "ത്രൈമാസിക പലിശ പേയ്‌മെന്റ്",
      "വഴക്കമുള്ള കാലയളവ്",
    ],
  },
];
