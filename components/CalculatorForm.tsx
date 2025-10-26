import React from 'react';
import { LOCATIONS, CLIMATE_ZONES } from '../constants';
import type { LocationConfig, ClimateZoneKey } from '../types';
import Card from './Card';

interface CalculatorFormProps {
    locationKey: string;
    setLocationKey: (value: string) => void;
    acPower: string;
    setAcPower: (value: string) => void;
    hoursPerDay: number;
    setHoursPerDay: (value: number) => void;
    daysPerMonth: number;
    setDaysPerMonth: (value: number) => void;
    daysPerYear: number;
    setDaysPerYear: (value: number) => void;
    electricityRate: string;
    setElectricityRate: (value: string) => void;
    currentLocation: LocationConfig;
    climateZone: ClimateZoneKey;
    onClimateZoneChange: (zone: ClimateZoneKey) => void;
}

const CalculatorForm: React.FC<CalculatorFormProps> = ({
    locationKey,
    setLocationKey,
    acPower,
    setAcPower,
    hoursPerDay,
    setHoursPerDay,
    daysPerMonth,
    setDaysPerMonth,
    daysPerYear,
    setDaysPerYear,
    electricityRate,
    setElectricityRate,
    currentLocation,
    climateZone,
    onClimateZoneChange,
}) => {
    
    const InputField: React.FC<{ label: string; id: string; children: React.ReactNode; helpText?: string }> = ({ label, id, children, helpText }) => (
        <div className="mb-6">
            <label htmlFor={id} className="block text-sm font-medium text-slate-700 mb-1">{label}</label>
            {children}
            {helpText && <p className="text-xs text-slate-500 mt-1">{helpText}</p>}
        </div>
    );
    
    const Slider: React.FC<{id: string, value: number, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void, min: number, max: number, step: number, label: string}> = ({ id, value, onChange, min, max, step, label }) => (
         <div className="flex items-center gap-4">
            <input
                id={id}
                type="range"
                min={min}
                max={max}
                step={step}
                value={value}
                onChange={onChange}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
            <span className="font-semibold text-blue-600 w-16 text-center">{value} {label}</span>
        </div>
    );


    return (
        <Card>
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-slate-800">Your AC Setup</h2>
            </div>
           
            <InputField label="Location & Currency" id="location">
                 <select
                    id="location"
                    value={locationKey}
                    onChange={(e) => setLocationKey(e.target.value)}
                    className="w-full p-2 border border-slate-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                >
                    {Object.entries(LOCATIONS).map(([key, { label }]) => (
                        <option key={key} value={key}>{label}</option>
                    ))}
                </select>
            </InputField>

            <InputField label="AC Power Consumption (Watts)" id="ac-power" helpText="Check your AC's label or manual. A typical window unit is 1000-1500W.">
                <input
                    id="ac-power"
                    type="number"
                    value={acPower}
                    onChange={(e) => setAcPower(e.target.value)}
                    placeholder="e.g., 1500"
                    className="w-full p-2 border border-slate-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
            </InputField>

            <InputField label="Climate Zone" id="climate-zone" helpText="Presets the daily usage based on typical climate.">
                <div className="flex rounded-lg border border-slate-300 p-1 bg-slate-50">
                    {(Object.keys(CLIMATE_ZONES) as Array<ClimateZoneKey>).map((key) => (
                        <button
                            key={key}
                            onClick={() => onClimateZoneChange(key)}
                            className={`flex-1 py-2 text-sm font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1
                                ${climateZone === key
                                    ? 'bg-blue-600 text-white shadow'
                                    : 'text-slate-600 hover:bg-slate-200'
                                }
                            `}
                        >
                            {CLIMATE_ZONES[key].label}
                        </button>
                    ))}
                </div>
            </InputField>
            
            <InputField label="Hours of Use per Day" id="hours-day">
                 <Slider id="hours-day" value={hoursPerDay} onChange={(e) => setHoursPerDay(Number(e.target.value))} min={1} max={24} step={1} label="hrs" />
            </InputField>

            <InputField label="Days of Use per Month" id="days-month">
                <Slider id="days-month" value={daysPerMonth} onChange={(e) => setDaysPerMonth(Number(e.target.value))} min={1} max={31} step={1} label="days" />
            </InputField>

            <InputField label="Days of Use per Year" id="days-year" helpText="Overrides monthly setting for the yearly cost. Ideal for seasonal usage.">
                <Slider id="days-year" value={daysPerYear} onChange={(e) => setDaysPerYear(Number(e.target.value))} min={1} max={365} step={1} label="days" />
            </InputField>
            
            <InputField label={`Electricity Rate (${currentLocation.currency} per ${currentLocation.rateUnit})`} id="electricity-rate" helpText="Find this on your utility bill. The value is pre-filled with your region's average.">
                <input
                    id="electricity-rate"
                    type="number"
                    step="0.01"
                    value={electricityRate}
                    onChange={(e) => setElectricityRate(e.target.value)}
                    placeholder="e.g., 0.17"
                    className="w-full p-2 border border-slate-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
            </InputField>
        </Card>
    );
};

export default CalculatorForm;