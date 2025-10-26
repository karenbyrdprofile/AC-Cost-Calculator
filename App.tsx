
import React, { useState, useEffect, useCallback } from 'react';
import CalculatorForm from './components/CalculatorForm';
import ResultsDisplay from './components/ResultsDisplay';
import { LOCATIONS, CLIMATE_ZONES } from './constants';
import type { CalculationResults, LocationConfig, ClimateZoneKey } from './types';
import PremiumCard from './components/PremiumCard';
import Header from './components/Header';
import Footer from './components/Footer';
import Article from './components/Article';
import AdBanner from './components/AdBanner';

const App: React.FC = () => {
  const [locationKey, setLocationKey] = useState<string>('US');
  const [acPower, setAcPower] = useState<string>('1500');
  const [hoursPerDay, setHoursPerDay] = useState<number>(8);
  const [daysPerMonth, setDaysPerMonth] = useState<number>(30);
  const [daysPerYear, setDaysPerYear] = useState<number>(180);
  const [electricityRate, setElectricityRate] = useState<string>(LOCATIONS['US'].avgRate.toString());
  const [climateZone, setClimateZone] = useState<ClimateZoneKey>('temperate');
  const [results, setResults] = useState<CalculationResults>({ hourly: 0, daily: 0, monthly: 0, yearly: 0 });
  const [currentLocation, setCurrentLocation] = useState<LocationConfig>(LOCATIONS['US']);

  useEffect(() => {
    setCurrentLocation(LOCATIONS[locationKey]);
    setElectricityRate(LOCATIONS[locationKey].avgRate.toString());
  }, [locationKey]);

  const calculateCost = useCallback(() => {
    const powerW = parseFloat(acPower) || 0;
    const rate = parseFloat(electricityRate) || 0;

    if (powerW <= 0 || rate <= 0) {
      setResults({ hourly: 0, daily: 0, monthly: 0, yearly: 0 });
      return;
    }

    const powerKW = powerW / 1000;
    const hourlyCost = powerKW * rate;
    const dailyCost = hourlyCost * hoursPerDay;
    const monthlyCost = dailyCost * daysPerMonth;
    const yearlyCost = dailyCost * daysPerYear;

    setResults({
      hourly: hourlyCost,
      daily: dailyCost,
      monthly: monthlyCost,
      yearly: yearlyCost,
    });
  }, [acPower, hoursPerDay, daysPerMonth, daysPerYear, electricityRate]);

  useEffect(() => {
    calculateCost();
  }, [calculateCost]);
  
  const handleClimateZoneChange = (zone: ClimateZoneKey) => {
    setClimateZone(zone);
    setHoursPerDay(CLIMATE_ZONES[zone].hours);
  };

  const handleReset = () => {
    const defaultLocation = LOCATIONS['US'];
    setLocationKey('US');
    setAcPower('1500');
    setClimateZone('temperate');
    setHoursPerDay(CLIMATE_ZONES['temperate'].hours);
    setDaysPerMonth(30);
    setDaysPerYear(180);
    setElectricityRate(defaultLocation.avgRate.toString());
  };
  
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-800 font-sans print:bg-white">
      <Header />
      <main className="flex-grow max-w-5xl mx-auto p-3 sm:p-6 lg:p-8 w-full">
        <>
          <div className="text-center mb-8 print:hidden">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900">
              <span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
                Air Conditioner Cost Calculator
              </span>
            </h1>
            <p className="text-lg text-slate-600 mt-2">Estimate your AC's electricity bill with ease and accuracy.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2 print:hidden">
               <CalculatorForm
                  locationKey={locationKey}
                  setLocationKey={setLocationKey}
                  acPower={acPower}
                  setAcPower={setAcPower}
                  hoursPerDay={hoursPerDay}
                  setHoursPerDay={setHoursPerDay}
                  daysPerMonth={daysPerMonth}
                  setDaysPerMonth={setDaysPerMonth}
                  daysPerYear={daysPerYear}
                  setDaysPerYear={setDaysPerYear}
                  electricityRate={electricityRate}
                  setElectricityRate={setElectricityRate}
                  currentLocation={currentLocation}
                  climateZone={climateZone}
                  onClimateZoneChange={handleClimateZoneChange}
               />
               <AdBanner className="mt-6 min-h-[250px]" />
               <button
                  onClick={handleReset}
                  className="mt-6 w-full flex items-center justify-center px-4 py-3 text-base font-medium text-slate-700 bg-white shadow-md hover:bg-slate-50 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 border border-slate-200"
                  aria-label="Reset all inputs to default values"
              >
                  Reset All Fields
              </button>
              <div id="premium" className="scroll-mt-24">
                  <PremiumCard />
              </div>
            </div>

            <div className="lg:col-span-3">
               <ResultsDisplay 
                  results={results} 
                  currency={currentLocation.currency}
                  currencyCode={currentLocation.currencyCode}
                  onPrint={handlePrint}
              />
            </div>
          </div>
          
          <Article />
        </>
      </main>
      <Footer />
    </div>
  );
};

export default App;
