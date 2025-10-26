export interface LocationConfig {
  currency: string;
  currencyCode: string;
  avgRate: number;
  label: string;
  rateUnit: string;
}

export interface CalculationResults {
  hourly: number;
  daily: number;
  monthly: number;
  yearly: number;
}

export type ClimateZoneKey = 'hot' | 'temperate' | 'cold';

export interface ClimateZone {
  label: string;
  hours: number;
}