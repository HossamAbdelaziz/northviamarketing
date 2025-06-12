'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function OfferTeaser() {
    return (
        <section className="bg-orange-500 text-white py-14 px-4 sm:px-8 md:px-16">
            <motion.div
                className="max-w-4xl mx-auto text-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
            >
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                    Limited-Time Offer: Become a Strategic Partner
                </h2>
                <p className="text-lg sm:text-xl mb-8">
                    Get up to <span className="font-semibold underline">40% off</span> our premium package when you book a consultation this week.
                </p>
                <Link
                    href="#contact" // you can update this to the actual link later
                    className="inline-block bg-white text-orange-500 font-semibold px-6 py-3 rounded-md hover:bg-gray-100 transition"
                >
                    Book My Free Consultation
                </Link>
            </motion.div>
        </section>
    );
}
