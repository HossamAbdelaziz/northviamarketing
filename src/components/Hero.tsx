'use client'

import { motion } from 'framer-motion'

export default function Hero() {
    return (
        <section className="bg-brand-blue text-white">
            {/* Top Navbar / Logo area */}
            <div className="px-6 md:px-12 py-4 flex justify-between items-center max-w-7xl mx-auto">
                <div className="text-xl font-bold tracking-wide">
                    {/* Placeholder Logo */}
                    <span className="bg-white text-brand-blue px-3 py-1 rounded-md font-heading text-sm uppercase">
                        LOGO
                    </span>
                </div>
                {/* Optional nav links in the future */}
                {/* <div className="space-x-4 text-sm">About | Services | Contact</div> */}
            </div>

            {/* Hero Content */}
            <div className="max-w-4xl mx-auto text-center py-20 px-6 md:px-12">
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-heading font-bold leading-tight tracking-tight"
                >
                    Dream bigger. Compete smarter. Win together.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="mt-6 text-lg md:text-xl font-body max-w-2xl mx-auto"
                >
                    North Via Marketing frees you from daily marketing and management tasks—so you can focus on your passion, your customers, and your future.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="mt-10"
                >
                    <button className="bg-brand-orange text-white font-bold py-3 px-8 rounded-full shadow-md hover:bg-orange-600 transition duration-300">
                        Book Your Free Consultation
                    </button>
                </motion.div>
            </div>
        </section>
    )
}
