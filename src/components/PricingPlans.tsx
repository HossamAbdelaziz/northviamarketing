'use client';

import { motion } from 'framer-motion';

const plans = [
    {
        name: 'Starter',
        price: '$499',
        features: [
            'Social Media Setup',
            '1 Campaign Strategy',
            'Basic SEO Optimization',
            'Email Support',
        ],
        highlight: false,
    },
    {
        name: 'Growth',
        price: '$899',
        features: [
            'Everything in Starter',
            '3 Campaign Strategies',
            'Google Ads Setup',
            'Monthly Analytics Report',
        ],
        highlight: true,
    },
    {
        name: 'Premium',
        price: '$1399',
        features: [
            'Everything in Growth',
            'Full Funnel Strategy',
            'Retargeting & Automation',
            'Weekly Strategy Calls',
        ],
        highlight: false,
    },
];

export default function PricingPlans() {
    return (
        <section className="bg-gray-100 text-blue-900 py-20 px-4 sm:px-8 md:px-16">
            <motion.div
                className="max-w-6xl mx-auto text-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">Our Packages</h2>
                <p className="text-lg mb-12">Choose a plan that fits your growth stage</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            className={`rounded-xl p-8 shadow-md bg-white border-2 ${plan.highlight
                                    ? 'border-orange-500 scale-105'
                                    : 'border-gray-200'
                                } transition`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.15 }}
                        >
                            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                            <p className="text-3xl font-semibold text-orange-500 mb-6">{plan.price}</p>
                            <ul className="text-left space-y-3 mb-6">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center">
                                        <span className="text-green-600 mr-2">✔</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <button className="w-full bg-blue-900 text-white py-2 px-4 rounded-md hover:bg-blue-800 transition">
                                Select Plan
                            </button>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
