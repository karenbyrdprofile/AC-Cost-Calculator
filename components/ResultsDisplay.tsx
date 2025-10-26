import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Label, AreaChart, Area, defs, linearGradient, stop } from 'recharts';
import type { CalculationResults } from '../types';
import { PrintIcon } from './Icons';
import Card from './Card';

interface ResultsDisplayProps {
    results: CalculationResults;
    currency: string;
    currencyCode: string;
    onPrint: () => void;
}

// Custom Tooltip for a more integrated look and feel
const CustomTooltip = ({ active, payload, label, currencyCode }: any) => {
    if (active && payload && payload.length) {
        const value = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: currencyCode,
            currencyDisplay: 'narrowSymbol'
        }).format(payload[0].value);

        return (
            <div className="bg-white p-3 rounded-lg shadow-lg border border-slate-200">
                <p className="text-sm font-semibold text-slate-700">{label}</p>
                <p className="text-base font-bold text-blue-600">{`Cost: ${value}`}</p>
            </div>
        );
    }
    return null;
};


const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ results, currency, currencyCode, onPrint }) => {

    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: currencyCode,
            currencyDisplay: 'narrowSymbol'
        }).format(value);
    };

    const costComparisonData = [
        { name: 'Hourly', Cost: parseFloat(results.hourly.toFixed(2)) },
        { name: 'Daily', Cost: parseFloat(results.daily.toFixed(2)) },
        { name: 'Monthly', Cost: parseFloat(results.monthly.toFixed(2)) },
        { name: 'Yearly', Cost: parseFloat(results.yearly.toFixed(2)) },
    ];

    // Simulate a seasonal breakdown of the yearly cost for a more insightful chart
    const getYearlyBreakdown = () => {
        if (results.yearly <= 0) {
            return Array(12).fill(0).map((_, i) => ({ name: new Date(0, i).toLocaleString('default', { month: 'short' }), Cost: 0 }));
        }
        // A simple curve for Northern Hemisphere summer peak
        const seasonalWeights = [1, 1, 2, 4, 6, 8, 8, 7, 5, 3, 2, 1]; 
        const totalWeight = seasonalWeights.reduce((sum, weight) => sum + weight, 0);
        const months = Array.from({length: 12}, (_, i) => new Date(0, i).toLocaleString('default', { month: 'short' }));

        return months.map((month, index) => ({
            name: month,
            Cost: parseFloat(((results.yearly / totalWeight) * seasonalWeights[index]).toFixed(2)),
        }));
    };

    const yearlyBreakdownData = getYearlyBreakdown();
    
    const ResultCard: React.FC<{title: string, value: string, main?: boolean}> = ({ title, value, main = false }) => (
        <div className={`p-4 rounded-lg text-center ${main ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-800'}`}>
            <p className={`text-sm ${main ? 'text-blue-100' : 'text-slate-500'}`}>{title}</p>
            <p className={`font-bold ${main ? 'text-4xl' : 'text-2xl'}`}>{value}</p>
        </div>
    );

    return (
        <div id="printable-area">
            <Card>
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-slate-800">Cost Breakdown</h2>
                    <button
                        onClick={onPrint}
                        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-blue-600 bg-blue-100 hover:bg-blue-200 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 print:hidden"
                        aria-label="Print results"
                    >
                        <PrintIcon />
                        Print
                    </button>
                </div>

                <div className="mb-6">
                    <ResultCard title="Estimated Monthly Cost" value={formatCurrency(results.monthly)} main />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                   <ResultCard title="Hourly Cost" value={formatCurrency(results.hourly)} />
                   <ResultCard title="Daily Cost" value={formatCurrency(results.daily)} />
                   <ResultCard title="Yearly Cost" value={formatCurrency(results.yearly)} />
                </div>

                <h3 className="text-xl font-bold text-slate-800 mb-4">Visual Comparison</h3>
                <div className="w-full h-64 sm:h-80">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            data={costComparisonData}
                            margin={{
                                top: 5,
                                right: 20,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" vertical={false} />
                            <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                            <YAxis 
                                stroke="#64748b" 
                                fontSize={12}
                                tickFormatter={(value) => `${currency}${value}`}
                                allowDecimals={false}
                                tickLine={false}
                                axisLine={false}
                                width={80}
                            >
                                <Label value={`Cost in ${currency}`} angle={-90} position="insideLeft" style={{ textAnchor: 'middle', fill: '#64748b', fontSize: '14px' }} />
                            </YAxis>
                            <Tooltip
                                content={<CustomTooltip currencyCode={currencyCode} />}
                                cursor={{ fill: 'rgba(239, 246, 255, 0.7)' }}
                            />
                            <Legend wrapperStyle={{fontSize: "14px", paddingTop: "20px"}}/>
                            <Bar dataKey="Cost" fill="#2563eb" barSize={30} radius={[4, 4, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                <h3 className="text-xl font-bold text-slate-800 mt-12 mb-4">Annual Cost Distribution</h3>
                <div className="w-full h-64 sm:h-80">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart
                            data={yearlyBreakdownData}
                             margin={{
                                top: 5,
                                right: 20,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                             <defs>
                                <linearGradient id="colorCost" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#2563eb" stopOpacity={0.8}/>
                                    <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} />
                            <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                            <YAxis
                                stroke="#64748b"
                                fontSize={12}
                                tickFormatter={(value) => `${currency}${value}`}
                                allowDecimals={false}
                                tickLine={false}
                                axisLine={false}
                                width={80}
                             />
                            <Tooltip content={<CustomTooltip currencyCode={currencyCode} />} />
                            <Area type="monotone" dataKey="Cost" stroke="#2563eb" fillOpacity={1} fill="url(#colorCost)" strokeWidth={2} />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
                
                <div className="mt-8 p-4 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-600">
                    <h4 className="font-semibold text-slate-700 mb-2">How It's Calculated</h4>
                    <p className="font-mono text-xs sm:text-sm bg-slate-100 p-2 rounded">
                        ( (Watts / 1000) &times; Hours/Day &times; Days/Month &times; Rate ) = Monthly Cost
                    </p>
                    <p className="mt-2 text-xs">
                        <strong>Disclaimer:</strong> This is an estimate. Actual costs may vary based on your AC's efficiency, weather conditions, and exact electricity rates.
                    </p>
                </div>

            </Card>
        </div>
    );
};

export default ResultsDisplay;