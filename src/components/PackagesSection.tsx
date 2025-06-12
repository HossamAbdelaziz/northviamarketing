'use client';

import React, { useState } from 'react';
import { FaCheck, FaMinus, FaInfoCircle } from 'react-icons/fa';

const plans = ['Essential Partnership', 'Growth Accelerator', 'Strategic Partner'];

const pricing: Record<string, string> = {
    'Essential Partnership': '$200',
    'Growth Accelerator': '$400',
    'Strategic Partner': '$700',
};

const featureDescriptions: Record<string, string> = {
    'Social Media Management': 'We manage your profiles and schedule consistent content with full analytics.',
    'Website Updates & Maintenance': 'We update your website content, fix bugs, and keep things fast and secure.',
    'Monthly Report/Strategy Call': 'Includes a PDF report + a strategy call to review performance and next steps.',
    'Full Business Process Audit': 'A detailed review of your end-to-end workflow with optimization suggestions.',
    'Quarterly Business Health Deep-Dive': 'Comprehensive review of all growth KPIs and performance every quarter.',
};

const features = [
    {
        name: 'Social Media Management',
        plans: ['✔️', '✔️', '✔️'],
    },
    {
        name: 'Website Updates & Maintenance',
        plans: ['✔️', '✔️', '✔️'],
    },
    {
        name: 'Monthly Report/Strategy Call',
        plans: ['✔️', '✔️', '✔️'],
    },
    {
        name: 'Basic Business Process Review',
        plans: ['✔️', '✔️', '✔️'],
    },
    {
        name: 'Email Support',
        plans: ['✔️', '✔️', '✔️'],
    },
    {
        name: 'Google & Social Media Ads Mgmt',
        plans: ['—', '✔️', '✔️'],
    },
    {
        name: 'CRM Setup/Automation',
        plans: ['—', '✔️', '✔️'],
    },
    {
        name: 'Customer Experience Suggestions',
        plans: ['—', '✔️', '✔️'],
    },
    {
        name: 'Bi-weekly Strategy Calls',
        plans: ['—', '✔️', '✔️'],
    },
    {
        name: 'Staff Onboarding Support',
        plans: ['—', '✔️', '✔️'],
    },
    {
        name: 'Custom Design Services',
        plans: ['—', '✔️', '✔️ (expanded scope)'],
    },
    {
        name: 'SEO Services',
        plans: ['—', '✔️', '✔️ (advanced)'],
    },
    {
        name: 'Unlimited Marketing Consulting',
        plans: ['—', '—', '✔️'],
    },
    {
        name: 'Full Business Process Audit',
        plans: ['—', '—', '✔️'],
    },
    {
        name: 'Priority Support',
        plans: ['—', '—', '✔️'],
    },
    {
        name: 'Quarterly Business Health Deep-Dive',
        plans: ['—', '—', '✔️'],
    },
];

export default function PackagesSection() {
    const [open, setOpen] = useState<string | null>(null);

    const toggle = (featureName: string) => {
        setOpen(prev => (prev === featureName ? null : featureName));
    };

    return (
        <section className="bg-gray-100 text-blue-900 py-20 px-4 sm:px-8 md:px-16">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4">Choose Your Growth Path</h2>
                    <p className="text-lg max-w-3xl mx-auto">
                        Try our <strong>Strategic Partner</strong> package for your first 3 months at just{' '}
                        <strong>$400/month</strong> (regularly $700). Experience the full power of a dedicated
                        growth team—risk-free.
                    </p>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left bg-white border border-gray-300 rounded-lg">
                        <thead className="bg-blue-900 text-white text-sm md:text-base">
                            <tr>
                                <th className="p-4 text-left">Feature</th>
                                {plans.map((plan, idx) => (
                                    <th
                                        key={plan}
                                        className={`p-4 text-center border-l border-blue-800 ${idx === plans.length - 1 ? '' : ''
                                            }`}
                                    >
                                        <div className="font-semibold">{plan}</div>
                                        <div className="text-xs">{pricing[plan]}/month</div>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {features.map((feature, idx) => (
                                <React.Fragment key={feature.name}>
                                    <tr
                                        className={`${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                                            } border-t transition hover:bg-orange-50`}
                                    >
                                        <td className="p-4 font-medium align-top w-1/3">
                                            <div className="flex items-start gap-2">
                                                <span>{feature.name}</span>
                                                {featureDescriptions[feature.name] && (
                                                    <button
                                                        onClick={() => toggle(feature.name)}
                                                        aria-label="More info"
                                                        className="text-orange-600 hover:text-orange-800 mt-1 text-xs"
                                                    >
                                                        <FaInfoCircle />
                                                    </button>
                                                )}
                                            </div>
                                            {open === feature.name && (
                                                <div className="text-sm text-gray-700 mt-2 pl-2 border-l-4 border-orange-500">
                                                    {featureDescriptions[feature.name]}
                                                </div>
                                            )}
                                        </td>
                                        {feature.plans.map((val, i) => (
                                            <td
                                                key={i}
                                                className="p-4 text-center align-top border-l border-gray-300 w-1/5"
                                            >
                                                {val === '✔️' ? (
                                                    <FaCheck className="text-green-700 mx-auto" />
                                                ) : val === '—' ? (
                                                    <FaMinus className="text-gray-400 mx-auto" />
                                                ) : (
                                                    <span className="text-green-700 font-medium">{val}</span>
                                                )}
                                            </td>
                                        ))}
                                    </tr>
                                </React.Fragment>
                            ))}
                        </tbody>
                    </table>

                </div>
            </div>
        </section>
    );
}
