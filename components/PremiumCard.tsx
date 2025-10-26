import React, { useState } from 'react';
import Card from './Card';
import { CheckCircleIcon, DownloadIcon, GlobeIcon, BookmarkIcon } from './Icons';

const PremiumCard: React.FC = () => {
    const [showConfirmation, setShowConfirmation] = useState(false);

    const paypalEmail = 'talukdardildar@gmail.com';
    const itemName = 'AC Cost Calculator - Premium Features';
    const price = '5.00';
    const currency = 'USD';

    const paypalUrl = `https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=${paypalEmail}&item_name=${encodeURIComponent(itemName)}&amount=${price}&currency_code=${currency}&no_shipping=1`;

    const features = [
        { icon: <BookmarkIcon />, text: 'Save & Compare Scenarios' },
        { icon: <DownloadIcon />, text: 'Export Results to PDF/CSV' },
        { icon: <GlobeIcon />, text: 'Advanced Climate Models' },
        { icon: <CheckCircleIcon />, text: 'Ad-free Experience' },
    ];

    const handleProceedToPayment = () => {
        window.open(paypalUrl, '_blank', 'noopener,noreferrer');
        setShowConfirmation(false);
    };

    return (
        <>
            <Card className="mt-8 border-2 border-blue-500 bg-blue-50/50">
                <div className="text-center">
                    <h3 className="text-2xl font-bold text-slate-800">Unlock Premium Features</h3>
                    <p className="text-slate-600 mt-1">Get more insights with a one-time payment.</p>
                    <div className="my-6 text-5xl font-extrabold text-slate-900">
                        $5
                        <span className="text-base font-medium text-slate-500"> / one-time</span>
                    </div>
                </div>

                <ul className="space-y-3 mb-8">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-3">
                            <span className="text-blue-500">{feature.icon}</span>
                            <span className="text-slate-700">{feature.text}</span>
                        </li>
                    ))}
                </ul>

                <button
                    onClick={() => setShowConfirmation(true)}
                    className="w-full flex items-center justify-center px-4 py-3 text-base font-bold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    aria-label="Pay with PayPal to unlock premium features"
                >
                    Upgrade Now via PayPal
                </button>
            </Card>

            {showConfirmation && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 transition-opacity"
                    aria-labelledby="confirmation-dialog-title"
                    role="dialog"
                    aria-modal="true"
                    onClick={() => setShowConfirmation(false)}
                >
                    <div onClick={(e) => e.stopPropagation()}>
                        <Card className="w-full max-w-md">
                            <h3 id="confirmation-dialog-title" className="text-xl font-bold text-slate-800">Confirm Your Purchase</h3>
                            <p className="mt-2 text-slate-600">
                                You are about to be redirected to PayPal to complete your purchase of Premium Features for a one-time payment of ${price}.
                            </p>
                            <div className="mt-6 flex justify-end gap-4">
                                <button
                                    onClick={() => setShowConfirmation(false)}
                                    className="px-4 py-2 text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleProceedToPayment}
                                    className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                >
                                    Proceed to PayPal
                                </button>
                            </div>
                        </Card>
                    </div>
                </div>
            )}
        </>
    );
};

export default PremiumCard;