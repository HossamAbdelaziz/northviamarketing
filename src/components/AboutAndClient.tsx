'use client';

import { motion } from 'framer-motion';

export default function AboutAndClient() {
    return (
        <section className="bg-white py-20 px-4 sm:px-8 md:px-16">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                {/* About Section */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-blue-900 text-white p-8 rounded-2xl shadow-lg"
                >
                    <h2 className="text-3xl font-bold mb-4">About North Via Marketing</h2>
                    <p className="text-lg leading-relaxed mb-6">
                        Founded by <strong>Ahmed Anwar, MBA</strong>, North Via Marketing is more than a marketing service—we’re your
                        dedicated growth partner. With over 15 years of business experience—at FedEx, Orascom, and managing a
                        5-star restaurant—Ahmed brings deep operations expertise, merged with an MBA and a strong marketing career.
                    </p>
                    <p className="text-lg leading-relaxed">
                        We help Ontario’s ambitious business owners streamline operations, reduce costs, and attract more customers—so
                        you can focus on what you do best.
                    </p>
                    <p className="mt-6 text-orange-400 font-semibold text-xl italic">
                        Dream bigger. Compete smarter. Win together.
                    </p>
                </motion.div>

                {/* Ideal Client Profile */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-gray-50 p-8 rounded-2xl border-l-8 border-orange-500 shadow-md"
                >
                    <h3 className="text-2xl font-bold mb-4 text-blue-900">Are You Our Next Success Story?</h3>
                    <p className="text-gray-800 text-lg leading-relaxed">
                        Our ideal client is a small to mid-sized business in Ontario, led by a proud, ambitious owner who’s built something
                        worth celebrating. You’ve worked hard to grow your business—and you know it deserves to stand out, run smarter, and reach
                        new heights.
                    </p>
                    <p className="mt-4 text-gray-800 text-lg">
                        You value true partnership, welcome fresh ideas, and are ready to invest in your legacy. If that sounds like you—
                        we’re the strategic partner you've been looking for.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
