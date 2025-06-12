'use client';

import { motion } from 'framer-motion';
import { FaPhoneAlt, FaLightbulb, FaRocket, FaHandshake, FaChartLine } from 'react-icons/fa';

const steps = [
    {
        icon: <FaPhoneAlt className="text-orange-500 text-3xl" />,
        title: 'Discovery Call',
        desc: 'We start with a free consultation to understand your business, goals, and challenges.',
    },
    {
        icon: <FaLightbulb className="text-orange-500 text-3xl" />,
        title: 'Custom Strategy',
        desc: 'We create a tailored action plan—combining marketing, operations, and design solutions that fit your needs.',
    },
    {
        icon: <FaRocket className="text-orange-500 text-3xl" />,
        title: 'Seamless Onboarding',
        desc: 'We handle all setup, from digital tools to team introductions, so you can focus on your business.',
    },
    {
        icon: <FaHandshake className="text-orange-500 text-3xl" />,
        title: 'Ongoing Partnership',
        desc: 'We deliver, optimize, and report on your results—staying in close contact with regular check-ins and support.',
    },
    {
        icon: <FaChartLine className="text-orange-500 text-3xl" />,
        title: 'Continuous Growth',
        desc: 'Your business evolves, and so do we—constantly refining strategies to help you dream bigger, compete smarter, and win together.',
    },
];

export default function HowItWorks() {
    return (
        <section className="bg-white text-blue-900 py-20 px-4 sm:px-8 md:px-16">
            <motion.div
                className="max-w-6xl mx-auto text-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-3xl sm:text-4xl font-bold mb-12">How It Works</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-center">
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-md transition text-left flex flex-col items-start"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <div className="mb-4">{step.icon}</div>
                            <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                            <p className="text-sm">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
