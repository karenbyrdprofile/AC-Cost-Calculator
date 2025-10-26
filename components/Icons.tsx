import React from 'react';

export const AcLogoIcon: React.FC<{ className?: string }> = ({ className = '' }) => (
    <svg 
        className={className}
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#2563eb" />
            </linearGradient>
        </defs>
        <path d="M12 2L12 6M12 18L12 22M6.70996 4.5L8.47996 7.5M15.52 16.5L17.29 19.5M4.5 9.71L7.5 11.48M16.5 12.52L19.5 14.29M4.5 14.29L7.5 12.52M16.5 11.48L19.5 9.71M6.70996 19.5L8.47996 16.5M15.52 7.5L17.29 4.5" stroke="url(#logoGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);


export const ResetIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h5M20 20v-5h-5M4 4l1.5 1.5A9 9 0 0121.5 13.5M20 20l-1.5-1.5A9 9 0 002.5 10.5" />
    </svg>
);

export const PrintIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
    </svg>
);

export const PayPalIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M7.068 20.392c.28 1.48.81 2.392 2.05 2.392h.56c.15 0 .28-.08.35-.22l.62-1.22c.04-.08.02-.17-.05-.22l-1.35-.97a.23.23 0 0 1-.1-.31l.46-.86c.07-.12.21-.17.34-.12l1.6.6c.13.05.28 0 .36-.12l.53-.8c.07-.12.04-.26-.07-.33l-1.26-.77c-.12-.07-.16-.21-.1-.34l.43-1.03c.06-.15.22-.22.37-.17l1.7.53c.14.04.28 0 .36-.12l.54-.82c.07-.1.04-.25-.07-.32l-1.26-.78c-.12-.07-.16-.22-.1-.34l.43-1.03c.06-.15.22-.22.37-.17l1.7.53c.14.04.28 0 .36-.12l.54-.82c.07-.1.04-.25-.07-.32l-1.26-.78a.25.25 0 0 1-.1-.34l.43-1.03c.06-.15.22-.22.37-.17l1.35.42c.16.05.32 0 .4-.14l.43-.65c.1-.15.06-.34-.1-.42l-2.05-1.03c-.26-.13-.39-.42-.31-.7l.95-3.32c.05-.16.21-.26.38-.24l1.83.25c.3.04.53.28.53.58v.09c0 .32-.24.58-.55.61l-1.16.15c-.23.03-.39.24-.35.47l-.23 1.32c-.04.24.11.47.34.54l1.3.38c.32.1.58.37.58.7v.1c0 .32-.24.58-.55.61l-1.16.15c-.23.03-.39.24-.35.47l-.23 1.32c-.04.24.11.47.34.54l1.3.38c.32.1.58.37.58.7v.1c0 .32-.24.58-.55.61l-1.16.15c-.23.03-.39.24-.35.47l-.23 1.32c-.04.24.11.47.34.54l1.3.38c.32.1.58.37.58.7v.1a.63.63 0 0 1-.6.62h-1.93c-1.23 0-2.19-.8-2.5-2.07l-2.73-11.4c-.1-.44-.48-.75-.93-.75h-2.1a.5.5 0 0 0-.49.58l3.19 13.43z"/>
    </svg>
);

export const BookmarkIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
    </svg>
);

export const DownloadIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
);

export const GlobeIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h10a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.707 4.293l.536.536M16.293 4.293l-.536.536M12 21a9 9 0 100-18 9 9 0 000 18z" />
    </svg>
);

export const CheckCircleIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

export const TwitterIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
);

export const FacebookIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z" />
    </svg>
);

export const LinkedInIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-4.481 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.59-11.018-3.714v-2.155z" />
    </svg>
);