import React from 'react';
import Card from './Card';

const AboutPage: React.FC = () => {
    const Subheading: React.FC<{ children: React.ReactNode }> = ({ children }) => (
        <h2 className="text-2xl font-bold text-slate-800 mt-6 mb-3">{children}</h2>
    );

    const Paragraph: React.FC<{ children: React.ReactNode }> = ({ children }) => (
        <p className="text-slate-600 leading-relaxed mb-4">{children}</p>
    );

    return (
        <Card>
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold text-slate-900 text-center mb-6">About AC Cost Calc</h1>
                
                <Subheading>Our Mission</Subheading>
                <Paragraph>
                    In a world where energy conservation is paramount, our mission is to empower homeowners and renters with a simple, accurate, and easy-to-use tool to understand and manage their air conditioning costs. We believe that awareness is the first step towards making smarter energy choices, saving money, and reducing our collective environmental footprint.
                </Paragraph>

                <Subheading>How This Calculator Works</Subheading>
                <Paragraph>
                    The AC Cost Calculator combines key data points to provide a reliable estimate of your expenses. We take into account:
                </Paragraph>
                <ul className="list-disc list-inside space-y-2 text-slate-600 mb-4">
                    <li><strong>AC Power Consumption:</strong> The wattage of your specific unit.</li>
                    <li><strong>Local Electricity Rates:</strong> We use up-to-date average rates for various regions, which you can customize for precision.</li>
                    <li><strong>Usage Patterns:</strong> You can adjust daily hours, monthly usage, and seasonal activity to match your lifestyle.</li>
                </ul>
                <Paragraph>
                    By processing these variables, we break down the cost into hourly, daily, monthly, and yearly estimates, presented in clear, easy-to-understand formats and charts.
                </Paragraph>

                <Subheading>Our Commitment to Accuracy</Subheading>
                <Paragraph>
                    While this tool provides a detailed estimate, please remember that actual costs can be influenced by factors like your home's insulation, ambient temperature, humidity, and your AC unit's age and efficiency (SEER rating). We continuously strive to refine our data and algorithms to provide the most accurate projections possible.
                </Paragraph>

                <Subheading>Get In Touch</Subheading>
                <Paragraph>
                    Have a suggestion, a question, or feedback? We'd love to hear from you! While we don't have a formal contact page yet, we are always working on improving this tool. Thank you for using AC Cost Calc to make more informed energy decisions.
                </Paragraph>
            </div>
        </Card>
    );
};

export default AboutPage;
