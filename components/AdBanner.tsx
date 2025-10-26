
import React from 'react';

const AdBanner: React.FC<{ className?: string }> = ({ className = '' }) => {
    return (
        <div className={`w-full bg-slate-100 border border-slate-200 rounded-lg flex items-center justify-center text-slate-400 relative overflow-hidden print:hidden ${className}`}>
            <div className="p-4 text-center">
                <p className="text-lg font-medium">Advertisement</p>
                <p className="text-sm">Your ad placeholder</p>
            </div>
            <div className="absolute top-1.5 right-1.5 flex items-center space-x-1 px-1 py-0.5 rounded bg-white/50 backdrop-blur-sm">
                <svg aria-label="AdChoices" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="#5F6368" className="cursor-pointer">
                    <path d="M7.5 0C3.36 0 0 3.36 0 7.5S3.36 15 7.5 15 15 11.64 15 7.5 11.64 0 7.5 0zm0 13.5c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"></path><path d="M6 4.5h3v6H6z"></path><path d="M6 4.5h3v6H6z" transform="rotate(-90 7.5 7.5)"></path>
                </svg>
                <svg aria-label="Close ad" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="#5F6368" className="cursor-pointer">
                    <path d="M11.6 4.5l-1.1-1.1-3 3-3-3-1.1 1.1 3 3-3 3 1.1 1.1 3-3 3 3 1.1-1.1-3-3z"></path>
                </svg>
            </div>
        </div>
    );
};

export default AdBanner;
