
import type { LocationConfig, ClimateZone, ClimateZoneKey } from './types';

export const LOCATIONS: Record<string, LocationConfig> = {
  US: { currency: '$', currencyCode: 'USD', avgRate: 0.17, label: 'United States (USD)', rateUnit: 'kWh' },
  CA: { currency: '$', currencyCode: 'CAD', avgRate: 0.19, label: 'Canada (CAD)', rateUnit: 'kWh' },
  GB: { currency: '£', currencyCode: 'GBP', avgRate: 0.34, label: 'United Kingdom (GBP)', rateUnit: 'kWh' },
  AU: { currency: '$', currencyCode: 'AUD', avgRate: 0.30, label: 'Australia (AUD)', rateUnit: 'kWh' },
  DE: { currency: '€', currencyCode: 'EUR', avgRate: 0.40, label: 'Germany (EUR)', rateUnit: 'kWh' },
  IN: { currency: '₹', currencyCode: 'INR', avgRate: 8.00, label: 'India (INR)', rateUnit: 'kWh' },
  JP: { currency: '¥', currencyCode: 'JPY', avgRate: 35.0, label: 'Japan (JPY)', rateUnit: 'kWh' },
  BR: { currency: 'R$', currencyCode: 'BRL', avgRate: 0.89, label: 'Brazil (BRL)', rateUnit: 'kWh' },
  ZA: { currency: 'R', currencyCode: 'ZAR', avgRate: 2.50, label: 'South Africa (ZAR)', rateUnit: 'kWh' },
  NZ: { currency: '$', currencyCode: 'NZD', avgRate: 0.30, label: 'New Zealand (NZD)', rateUnit: 'kWh' },
  CH: { currency: 'Fr.', currencyCode: 'CHF', avgRate: 0.22, label: 'Switzerland (CHF)', rateUnit: 'kWh' },
  NO: { currency: 'kr', currencyCode: 'NOK', avgRate: 1.00, label: 'Norway (NOK)', rateUnit: 'kWh' },
  MX: { currency: '$', currencyCode: 'MXN', avgRate: 2.00, label: 'Mexico (MXN)', rateUnit: 'kWh' },
  CN: { currency: '¥', currencyCode: 'CNY', avgRate: 0.60, label: 'China (CNY)', rateUnit: 'kWh' },
  SG: { currency: '$', currencyCode: 'SGD', avgRate: 0.30, label: 'Singapore (SGD)', rateUnit: 'kWh' },
  WW: { currency: '$', currencyCode: 'USD', avgRate: 0.15, label: 'Worldwide (USD)', rateUnit: 'kWh' },
};

export const CLIMATE_ZONES: Record<ClimateZoneKey, ClimateZone> = {
  hot: { label: 'Hot', hours: 12 },
  temperate: { label: 'Temperate', hours: 8 },
  cold: { label: 'Cold', hours: 4 },
};