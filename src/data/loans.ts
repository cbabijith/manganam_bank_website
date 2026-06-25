export interface LoanScheme {
  id: string;
  name: string;
  nameML: string;
  interestRate: string;
  eligibility: string[];
  eligibilityML: string[];
  documents: string[];
  documentsML: string[];
  benefits: string[];
  benefitsML: string[];
  minAmount: string;
  maxAmount: string;
  tenure: string;
}

export const loanSchemes: LoanScheme[] = [
  {
    id: "gold-loan",
    name: "Gold Loan",
    nameML: "സ്വർണ്ണ വായ്പ",
    interestRate: "9.5% - 12% p.a.",
    eligibility: [
      "Age: 18 years and above",
      "Must be a bank member",
      "Gold ornaments should be in good condition",
    ],
    eligibilityML: [
      "പ്രായം: 18 വയസ്സ് അല്ലെങ്കിൽ അതിൽ കൂടുതൽ",
      "ബാങ്ക് അംഗമായിരിക്കണം",
      "സ്വർണ്ണാഭരണങ്ങൾ നല്ല അവസ്ഥയിലായിരിക്കണം",
    ],
    documents: [
      "Aadhaar Card",
      "PAN Card",
      "Passport size photo",
      "Gold ornaments",
    ],
    documentsML: [
      "ആധാർ കാർഡ്",
      "പാൻ കാർഡ്",
      "പാസ്പോർട്ട് സൈസ് ഫോട്ടോ",
      "സ്വർണ്ണാഭരണങ്ങൾ",
    ],
    benefits: [
      "Quick processing",
      "Low interest rates",
      "Flexible repayment options",
      "No hidden charges",
    ],
    benefitsML: [
      "വേഗത്തിലുള്ള പ്രോസസ്സിംഗ്",
      "കുറഞ്ഞ പലിശ നിരക്ക്",
      "വഴക്കമുള്ള തിരിച്ചടവ് ഓപ്ഷനുകൾ",
      "മറഞ്ഞിരിക്കുന്ന ചാർജുകളില്ല",
    ],
    minAmount: "₹5,000",
    maxAmount: "₹50,00,000",
    tenure: "Up to 12 months",
  },
  {
    id: "personal-loan",
    name: "Personal Loan",
    nameML: "വ്യക്തിഗത വായ്പ",
    interestRate: "12% - 14% p.a.",
    eligibility: [
      "Age: 21 - 60 years",
      "Must be a bank member for at least 1 year",
      "Regular income source",
      "Good credit history",
    ],
    eligibilityML: [
      "പ്രായം: 21 - 60 വയസ്സ്",
      "കുറഞ്ഞത് 1 വർഷമായി ബാങ്ക് അംഗമായിരിക്കണം",
      "സ്ഥിരമായ വരുമാന സ്രോതസ്സ്",
      "നല്ല ക്രെഡിറ്റ് ചരിത്രം",
    ],
    documents: [
      "Aadhaar Card",
      "PAN Card",
      "Income proof",
      "Bank statements",
      "Passport size photos",
    ],
    documentsML: [
      "ആധാർ കാർഡ്",
      "പാൻ കാർഡ്",
      "വരുമാന തെളിവ്",
      "ബാങ്ക് സ്റ്റേറ്റ്മെന്റുകൾ",
      "പാസ്പോർട്ട് സൈസ് ഫോട്ടോകൾ",
    ],
    benefits: [
      "No collateral required",
      "Quick approval",
      "Flexible EMI options",
      "Competitive interest rates",
    ],
    benefitsML: [
      "പണയം ആവശ്യമില്ല",
      "വേഗത്തിലുള്ള അംഗീകാരം",
      "വഴക്കമുള്ള EMI ഓപ്ഷനുകൾ",
      "മത്സരാധിഷ്ഠിത പലിശ നിരക്കുകൾ",
    ],
    minAmount: "₹25,000",
    maxAmount: "₹10,00,000",
    tenure: "12 - 60 months",
  },
  {
    id: "housing-loan",
    name: "Housing Loan",
    nameML: "ഭവന വായ്പ",
    interestRate: "8.5% - 10.5% p.a.",
    eligibility: [
      "Age: 21 - 65 years",
      "Must be a bank member",
      "Stable income source",
      "Property should be in borrower's name",
    ],
    eligibilityML: [
      "പ്രായം: 21 - 65 വയസ്സ്",
      "ബാങ്ക് അംഗമായിരിക്കണം",
      "സ്ഥിരമായ വരുമാന സ്രോതസ്സ്",
      "സ്വത്ത് വായ്പ എടുക്കുന്നയാളുടെ പേരിലായിരിക്കണം",
    ],
    documents: [
      "Aadhaar Card",
      "PAN Card",
      "Income proof",
      "Property documents",
      "Bank statements",
      "Passport size photos",
    ],
    documentsML: [
      "ആധാർ കാർഡ്",
      "പാൻ കാർഡ്",
      "വരുമാന തെളിവ്",
      "സ്വത്ത് രേഖകൾ",
      "ബാങ്ക് സ്റ്റേറ്റ്മെന്റുകൾ",
      "പാസ്പോർട്ട് സൈസ് ഫോട്ടോകൾ",
    ],
    benefits: [
      "Low interest rates",
      "Long repayment tenure",
      "Tax benefits",
      "No prepayment charges",
    ],
    benefitsML: [
      "കുറഞ്ഞ പലിശ നിരക്കുകൾ",
      "ദീർഘമായ തിരിച്ചടവ് കാലയളവ്",
      "നികുതി ആനുകൂല്യങ്ങൾ",
      "മുൻകൂർ തിരിച്ചടവ് ചാർജുകളില്ല",
    ],
    minAmount: "₹5,00,000",
    maxAmount: "₹1,00,00,000",
    tenure: "Up to 20 years",
  },
  {
    id: "agricultural-loan",
    name: "Agricultural Loan",
    nameML: "കാർഷിക വായ്പ",
    interestRate: "7% - 9% p.a.",
    eligibility: [
      "Age: 18 - 65 years",
      "Must be a farmer",
      "Own agricultural land",
      "Bank membership required",
    ],
    eligibilityML: [
      "പ്രായം: 18 - 65 വയസ്സ്",
      "കർഷകനായിരിക്കണം",
      "കൃഷിഭൂമി ഉണ്ടായിരിക്കണം",
      "ബാങ്ക് അംഗത്വം ആവശ്യമാണ്",
    ],
    documents: [
      "Aadhaar Card",
      "Land documents",
      "Cultivation details",
      "Bank statements",
      "Passport size photos",
    ],
    documentsML: [
      "ആധാർ കാർഡ്",
      "ഭൂമി രേഖകൾ",
      "കൃഷി വിശദാംശങ്ങൾ",
      "ബാങ്ക് സ്റ്റേറ്റ്മെന്റുകൾ",
      "പാസ്പോർട്ട് സൈസ് ഫോട്ടോകൾ",
    ],
    benefits: [
      "Subsidized interest rates",
      "Flexible repayment",
      "Crop insurance support",
      "Quick processing",
    ],
    benefitsML: [
      "സബ്‌സിഡി പലിശ നിരക്കുകൾ",
      "വഴക്കമുള്ള തിരിച്ചടവ്",
      "വിള ഇൻഷുറൻസ് പിന്തുണ",
      "വേഗത്തിലുള്ള പ്രോസസ്സിംഗ്",
    ],
    minAmount: "₹10,000",
    maxAmount: "₹25,00,000",
    tenure: "Up to 5 years",
  },
  {
    id: "business-loan",
    name: "Business Loan",
    nameML: "ബിസിനസ് വായ്പ",
    interestRate: "11% - 13% p.a.",
    eligibility: [
      "Age: 21 - 65 years",
      "Business must be operational for 2+ years",
      "Bank membership required",
      "Good business credit history",
    ],
    eligibilityML: [
      "പ്രായം: 21 - 65 വയസ്സ്",
      "ബിസിനസ് 2+ വർഷമായി പ്രവർത്തിക്കുന്നതായിരിക്കണം",
      "ബാങ്ക് അംഗത്വം ആവശ്യമാണ്",
      "നല്ല ബിസിനസ് ക്രെഡിറ്റ് ചരിത്രം",
    ],
    documents: [
      "Aadhaar Card",
      "PAN Card",
      "Business registration",
      "Financial statements",
      "Bank statements",
      "Passport size photos",
    ],
    documentsML: [
      "ആധാർ കാർഡ്",
      "പാൻ കാർഡ്",
      "ബിസിനസ് രെജിസ്ട്രേഷൻ",
      "സാമ്പത്തിക പ്രസ്താവനങ്ങൾ",
      "ബാങ്ക് സ്റ്റേറ്റ്മെന്റുകൾ",
      "പാസ്പോർട്ട് സൈസ് ഫോട്ടോകൾ",
    ],
    benefits: [
      "No collateral for small amounts",
      "Competitive rates",
      "Quick disbursement",
      "Flexible terms",
    ],
    benefitsML: [
      "ചെറിയ തുകകൾക്ക് പണയം ആവശ്യമില്ല",
      "മത്സരാധിഷ്ഠിത നിരക്കുകൾ",
      "വേഗത്തിലുള്ള വിതരണം",
      "വഴക്കമുള്ള നിബന്ധനകൾ",
    ],
    minAmount: "₹50,000",
    maxAmount: "₹50,00,000",
    tenure: "12 - 84 months",
  },
];
