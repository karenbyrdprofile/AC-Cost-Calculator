import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-slate-800 text-slate-300 pt-12 sm:pt-16 print:hidden">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* About Section */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">AC Cost Calculator</h4>
                        <p className="text-slate-400 text-sm">
                            Your go-to tool for accurately estimating air conditioner running costs. Make informed decisions and save on your energy bills.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h5 className="font-semibold text-white mb-4">Quick Links</h5>
                        <ul className="space-y-2">
                            <li><a href="/index.html" className="text-slate-400 hover:text-white transition-colors">Home</a></li>
                            <li><a href="/index.html#premium" className="text-slate-400 hover:text-white transition-colors">Premium Features</a></li>
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h5 className="font-semibold text-white mb-4">Legal</h5>
                        <ul className="space-y-2">
                            <li><a href="/privacy.html" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</a></li>
                            <li><a href="/terms.html" className="text-slate-400 hover:text-white transition-colors">Terms of Service</a></li>
                            <li><a href="/about.html" className="text-slate-400 hover:text-white transition-colors">About Us</a></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8 sm:mt-12 border-t border-slate-700 py-6 text-center text-sm text-slate-400">
                     <p className="mb-4">
                        The Air Conditioner Cost Calculator is part of the{' '}
                        <a href="https://generatorsizecalculator.com/" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white underline">
                            Generator Size Calculator
                        </a>{' '}
                        publishing family.
                    </p>
                    <p>&copy; {new Date().getFullYear()} AC Cost Calculator. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;