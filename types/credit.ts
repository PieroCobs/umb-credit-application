export type Credit = {
  _id: string;
  applicationId: string;
  accountNumber: number;
  accountName: string;
  accountType: AccountType;
  dateAccountOpened: Date;
  dateBusinessEstablished: Date;
  applicationDate: Date;
  businessSector: string;
  businessType: BusinessType;
  mainBusinessLocation: string;
  contactPersonTelNumber: string;
  facilityType: Facility;
  psrScore: number;
  shareholders: Shareholder[];
};

export type Shareholder = {
  name: string;
  sharePercentage: number;
};

export enum AccountType {
  Current = "CURRENT",
  Savings = "SAVINGS",
}

export enum BusinessType {
  SoleProprietorship = "SOLE PROPRIETORSHIP",
  Partnership = "PARTNERSHIP",
  Corporation = "CORPORATION",
  LimitedLiability = "LIMITED LIABILITY COMPANY (LLC)",
  Cooperative = "COOPERATIVE",
}

export enum Facility {
  OverdraftService = "OVERDRAFT SERVICE",
  DeferredPaymentPlan = "DEFERRED PAYMENT PLAN",
  LineOfCredit = "LINE OF CREDIT (LOC)",
  RevolvingCredit = "REVOLVING CREDIT",
  TermLoan = "TERM LOAN",
  LetterOfCredit = "LETTER OF CREDIT",
  SwinglineLoan = "SWINGLINE LOAN",
}
