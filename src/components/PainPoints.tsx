'use client';

import { motion } from 'framer-motion';

const painPoints = [
    { emoji: '😩', text: 'No time to handle marketing yourself' },
    { emoji: '📉', text: 'Low ROI from paid ads or SEO' },
    { emoji: '🤯', text: 'Overwhelmed by too many strategies' },
    { emoji: '📱', text: 'Social media is inconsistent or dead' },
    { emoji: '❌', text: 'Tried freelancers, but nothing stuck' },
    { emoji: '🤷‍♂️', text: 'No clear roadmap or marketing plan' },
];

export default function PainPoints() {
    return (
        <section className="bg-white text-blue-900 py-16 px-4 sm:px-8 md:px-16">
            <div className="max-w-5xl mx-auto text-center">
                <motion.h2
                    className="text-3xl sm:text-4xl font-bold mb-10"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Does This Sound Familiar?
                </motion.h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {painPoints.map((item, index) => (
                        <motion.div
                            key={index}
                            className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-md transition"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="text-4xl mb-4">{item.emoji}</div>
                            <p className="text-lg font-medium">{item.text}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
