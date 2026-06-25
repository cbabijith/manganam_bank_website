export interface FAQ {
  id: string;
  question: string;
  questionML: string;
  answer: string;
  answerML: string;
  category: string;
}

export const faqs: FAQ[] = [
  {
    id: "1",
    question: "How to become a member of the bank?",
    questionML: "ബാങ്കിലെ അംഗമാകാൻ എങ്ങനെ?",
    answer: "To become a member, you need to fill out the membership form, submit required documents (Aadhaar, PAN, photos), and pay the membership fee. Visit our nearest branch or download the form from our Downloads section.",
    answerML: "അംഗമാകാൻ, നിങ്ങൾ അംഗത്വ ഫോം പൂരിപ്പിക്കുക, ആവശ്യമായ രേഖകൾ (ആധാർ, പാൻ, ഫോട്ടോകൾ) സമർപ്പിക്കുക, അംഗത്വ ഫീസ് അടയ്ക്കുക എന്നിവ ചെയ്യണം. ഞങ്ങളുടെ അടുത്തുള്ള ശാഖയിൽ സന്ദർശിക്കുക അല്ലെങ്കിൽ ഡൗൺലോഡുകളിൽ നിന്ന് ഫോം ഡൗൺലോഡ് ചെയ്യുക.",
    category: "General",
  },
  {
    id: "2",
    question: "What are the bank's working hours?",
    questionML: "ബാങ്കിന്റെ പ്രവർത്തന സമയം എന്ത്?",
    answer: "Our bank is open Monday to Friday from 9:30 AM to 4:00 PM, and on Saturdays from 9:30 AM to 1:00 PM. We are closed on Sundays and public holidays.",
    answerML: "ഞങ്ങളുടെ ബാങ്ക് തിങ്കൾ മുതൽ വെള്ളി വരെ രാവിലെ 9:30 മുതൽ വൈകുന്നേരം 4:00 വരെയും, ശനിയാഴ്ച രാവിലെ 9:30 മുതൽ ഉച്ച 1:00 വരെയും തുറന്നിരിക്കും. ഞങ്ങൾ ഞായറാഴ്ചയും പൊതു അവധി ദിനങ്ങളിലും അടച്ചിരിക്കും.",
    category: "General",
  },
  {
    id: "3",
    question: "What documents are required for a Gold Loan?",
    questionML: "സ്വർണ്ണ വായ്പയ്ക്ക് ഏതൊക്കെ രേഖകൾ ആവശ്യമാണ്?",
    answer: "For a Gold Loan, you need Aadhaar Card, PAN Card, passport size photographs, and the gold ornaments you wish to pledge. The process is quick and simple.",
    answerML: "സ്വർണ്ണ വായ്പയ്ക്ക്, നിങ്ങൾക്ക് ആധാർ കാർഡ്, പാൻ കാർഡ്, പാസ്പോർട്ട് സൈസ് ഫോട്ടോകൾ, പണയം വയ്ക്കാൻ ആഗ്രഹിക്കുന്ന സ്വർണ്ണാഭരണങ്ങൾ എന്നിവ ആവശ്യമാണ്. പ്രക്രിയ വേഗത്തിലും ലളിതവുമാണ്.",
    category: "Loans",
  },
  {
    id: "4",
    question: "What is the minimum balance required for a Savings Account?",
    questionML: "സേവിംഗ്സ് അക്കൗണ്ടിന് ഏറ്റവും കുറഞ്ഞ ബാലൻസ് എത്ര?",
    answer: "The minimum balance required for a regular Savings Account is ₹500. However, students can maintain a zero balance account with valid student ID proof.",
    answerML: "സാധാരണ സേവിംഗ്സ് അക്കൗണ്ടിന് ആവശ്യമായ ഏറ്റവും കുറഞ്ഞ ബാലൻസ് ₹500 ആണ്. എന്നിരുന്നാലും, സാധുവായ വിദ്യാർത്ഥി ID തെളിവുള്ള വിദ്യാർത്ഥികൾക്ക് സൗജന്യ അക്കൗണ്ട് പാലിക്കാം.",
    category: "Deposits",
  },
  {
    id: "5",
    question: "How can I check my account balance?",
    questionML: "എന്റെ അക്കൗണ്ട് ബാലൻസ് എങ്ങനെ പരിശോധിക്കാം?",
    answer: "You can check your account balance by visiting our branch, calling our customer service, or using our mobile banking assistance. We provide online banking support for balance inquiries.",
    answerML: "ഞങ്ങളുടെ ശാഖ സന്ദർശിച്ചോ, കസ്റ്റമർ സർവീസിലേക്ക് വിളിച്ചോ, ഞങ്ങളുടെ മൊബൈൽ ബാങ്കിംഗ് സഹായം ഉപയോഗിച്ചോ നിങ്ങൾക്ക് നിങ്ങളുടെ അക്കൗണ്ട് ബാലൻസ് പരിശോധിക്കാം. ബാലൻസ് അന്വേഷണങ്ങൾക്കായി ഞങ്ങൾ ഓൺലൈൻ ബാങ്കിംഗ് പിന്തുണ നൽകുന്നു.",
    category: "General",
  },
  {
    id: "6",
    question: "What are the interest rates for Fixed Deposits?",
    questionML: "ഫിക്സഡ് ഡിപ്പോസിറ്റിനുള്ള പലിശ നിരക്കുകൾ എത്ര?",
    answer: "Our Fixed Deposit interest rates range from 6.5% to 7.5% per annum depending on the tenure. Senior citizens get an additional 0.5% interest. Contact us for current rates.",
    answerML: "ഞങ്ങളുടെ ഫിക്സഡ് ഡിപ്പോസിറ്റ് പലിശ നിരക്കുകൾ കാലയളവ് അനുസരിച്ച് വർഷം 6.5% മുതൽ 7.5% വരെയാണ്. സീനിയർ സിറ്റിസൺമാർക്ക് അധിക 0.5% പലിശ ലഭിക്കും. നിലവിലെ നിരക്കുകൾക്ക് ഞങ്ങളെ ബന്ധപ്പെടുക.",
    category: "Deposits",
  },
  {
    id: "7",
    question: "Is ATM facility available?",
    questionML: "ATM സൗകര്യം ലഭ്യമാണോ?",
    answer: "Yes, we provide ATM card facility to our savings account holders. You can use your card at any ATM network across India for cash withdrawals and balance inquiries.",
    answerML: "അതെ, ഞങ്ങൾ ഞങ്ങളുടെ സേവിംഗ്സ് അക്കൗണ്ട് ഉടമകൾക്ക് ATM കാർഡ് സൗകര്യം നൽകുന്നു. പണം പിൻവലിക്കലിനും ബാലൻസ് അന്വേഷണത്തിനും നിങ്ങൾക്ക് ഇന്ത്യയിലുടനീളമുള്ള ഏതൊരു ATM നെറ്റ്‌വർക്കിലും നിങ്ങളുടെ കാർഡ് ഉപയോഗിക്കാം.",
    category: "Services",
  },
  {
    id: "8",
    question: "How do I apply for a loan?",
    questionML: "വായ്പ അപേക്ഷിക്കാൻ എങ്ങനെ?",
    answer: "You can apply for a loan by visiting our branch with required documents, downloading the application form from our website, or contacting our loan officer. We offer quick processing for eligible applicants.",
    answerML: "ആവശ്യമായ രേഖകളോടെ ഞങ്ങളുടെ ശാഖ സന്ദർശിച്ചോ, ഞങ്ങളുടെ വെബ്സൈറ്റിൽ നിന്ന് അപേക്ഷാ ഫോം ഡൗൺലോഡ് ചെയ്തോ, ഞങ്ങളുടെ ലോൺ ഓഫീസറുമായി ബന്ധപ്പെട്ടോ നിങ്ങൾക്ക് വായ്പ അപേക്ഷിക്കാം. യോഗ്യതയുള്ള അപേക്ഷകർക്ക് ഞങ്ങൾ വേഗത്തിലുള്ള പ്രോസസ്സിംഗ് വാഗ്ദാനം ചെയ്യുന്നു.",
    category: "Loans",
  },
];
