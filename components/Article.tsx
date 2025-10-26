
import React from 'react';
import Card from './Card';
import AdBanner from './AdBanner';

const Article: React.FC = () => {
    
    const Subheading: React.FC<{ children: React.ReactNode }> = ({ children }) => (
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mt-10 mb-4">{children}</h2>
    );

    const Paragraph: React.FC<{ children: React.ReactNode }> = ({ children }) => (
        <p className="text-slate-600 leading-relaxed mb-4">{children}</p>
    );

    const ListItem: React.FC<{ children: React.ReactNode, title: string }> = ({ children, title }) => (
        <li className="mb-3">
            <strong className="text-slate-700">{title}:</strong> {children}
        </li>
    );
    
    return (
        <div className="mt-16 print:hidden">
            <Card className="prose max-w-none">
                <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                    How Much Does Your Air Conditioner Really Cost to Run?
                </h1>
                
                <Paragraph>
                    The cool air from your AC is a welcome relief on a hot day. That feeling can fade when a surprisingly high electric bill arrives. It leaves you wondering just how much that comfort costs.
                </Paragraph>
                <Paragraph>
                    You don't have to guess anymore. The Air Conditioner Cost Calculator on this page gives you a clear estimate of your AC's energy use. This helps you plan your budget and understand your expenses.
                </Paragraph>

                <Subheading>What Goes Into Your AC Running Cost?</Subheading>
                <Paragraph>
                    A few key things decide how much you spend on air conditioning. Our calculator uses this information to give you an accurate estimate.
                </Paragraph>
                <ul>
                    <ListItem title="AC Power (Watts)">
                        This is how much electricity your unit needs to run. Look for a sticker on the side of your AC or check the user manual to find this number. A higher wattage uses more power.
                    </ListItem>
                    <ListItem title="Your Electricity Rate">
                        This is what your power company charges you for each kilowatt-hour (kWh). The price can be very different depending on your location. Your electric bill will show the exact rate. Our tool provides an average for your area to get you started.
                    </ListItem>
                    <ListItem title="How Often You Use It">
                        The more hours your AC is on, the higher the cost. You can adjust the hours per day and days per year in the calculator. This is great for figuring out seasonal costs.
                    </ListItem>
                </ul>

                <Subheading>How to Use the Air Conditioner Cost Calculator</Subheading>
                <Paragraph>
                    Our tool gives you a detailed cost breakdown in four simple steps:
                </Paragraph>
                <ol className="list-decimal list-inside space-y-2 text-slate-600">
                    <li><strong>Choose Your Location:</strong> This sets the right currency and finds the average local power rate.</li>
                    <li><strong>Enter Your AC's Power:</strong> Type in the wattage of your air conditioner.</li>
                    <li><strong>Set Your Usage:</strong> Use the sliders to set how many hours a day and days a year you use it.</li>
                    <li><strong>See Your Results:</strong> The calculator shows you the estimated costs per hour, day, month, and year.</li>
                </ol>

                <AdBanner className="my-10 min-h-[90px]" />

                <Subheading>Simple Ways to Lower Your AC Bill</Subheading>
                <Paragraph>
                    Knowing your cost is the first step. Next, you can find ways to save money. Here are a few ideas:
                </Paragraph>
                <ul>
                    <ListItem title="Clean the Filter">
                        A dirty filter forces your AC to work harder and use more electricity. Clean or replace it once a month when it's hot.
                    </ListItem>
                    <ListItem title="Pair it with a Fan">
                        A fan helps spread the cool air around the room. This means you can set your thermostat a little higher and still feel comfortable.
                    </ListItem>
                     <ListItem title="Block Air Leaks">
                        Check for gaps around your windows and doors. A little weather stripping can keep the cool air in and the hot air out.
                    </ListItem>
                    <ListItem title="Consider an Upgrade">
                        An old AC unit uses more power. A new, efficient model could lower your bills. The Department of Energy has more <a href="https://www.energy.gov/energysaver/home-cooling-systems" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">home cooling tips</a>.
                    </ListItem>
                </ul>

                <Subheading>Common Questions</Subheading>
                <div className="space-y-4">
                    <div>
                        <h4 className="font-semibold text-slate-800">How accurate is this calculator?</h4>
                        <Paragraph>
                            It gives you a very close estimate. Your actual bill can change a bit based on things like how well your home is insulated, the weather, and your AC's age.
                        </Paragraph>
                    </div>
                    <div>
                        <h4 className="font-semibold text-slate-800">Where do I find the wattage for my AC?</h4>
                        <Paragraph>
                           Check the sticker on the side of your unit. It should be listed there as "Watts" or "W". The owner's manual is another good place to look.
                        </Paragraph>
                    </div>
                    <div>
                        <h4 className="font-semibold text-slate-800">What's a normal price for electricity?</h4>
                        <Paragraph>
                            The cost per kWh is different all over the country. Our tool uses an average for your area, but your utility bill will have the exact rate.
                        </Paragraph>
                    </div>
                </div>

                 <div className="mt-8 p-4 bg-slate-50 border border-slate-200 rounded-lg text-center">
                    <h3 className="text-xl font-bold text-slate-800">Ready to See Your Numbers?</h3>
                    <p className="mt-2 text-slate-600">Scroll up and use the calculator. Finding out your true air conditioner running cost is the best way to start saving money.</p>
                </div>
            </Card>
        </div>
    );
};

export default Article;
