
import React from 'react';
import { AcLogoIcon } from './Icons';

const Header: React.FC = () => {
    return (
        <header className="bg-white shadow-sm sticky top-0 z-40 print:hidden">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <a 
                            href="/index.html"
                            className="flex items-center gap-2 text-2xl font-bold text-slate-900 hover:text-slate-700 transition-colors">
                            <AcLogoIcon className="w-8 h-8" />
                             <span className="font-bold bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
                                ACCostCalculator
                            </span>
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex md:items-center md:space-x-8">
                        <a href="/index.html" className="font-medium text-slate-600 hover:text-blue-600 transition-colors">Calculator</a>
                        <a href="/about.html" className="font-medium text-slate-600 hover:text-blue-600 transition-colors">About</a>
                        <a href="/index.html#premium" className="px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg shadow-sm hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                            Unlock Premium
                        </a>
                    </nav>

                </div>
            </div>
        </header>
    );
};

export default Header;
