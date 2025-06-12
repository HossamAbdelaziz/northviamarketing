'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactSection() {
    const [form, setForm] = useState({
        fullName: '',
        businessName: '',
        email: '',
        phone: '',
        service: '',
        message: '',
    });

    const services = [
        'Essential Partnership',
        'Growth Accelerator',
        'Strategic Partner',
        'Not Sure / Custom',
    ];

    return (
        <section className="bg-white text-blue-900 py-20 px-4 sm:px-8 md:px-16" id="contact">
            <motion.div
                className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                {/* Left Side – Pitch */}
                <div>
                    <h2 className="text-4xl font-bold mb-4 text-blue-900">
                        Your Growth Story Starts Here&mdash;
                        <span className="text-orange-500"> Let's Connect</span>
                    </h2>
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                        Whether you are looking to scale your operations, boost your brand, or simplify your marketing&mdash;
                        we're here to help. Fill out the form and our team will reach out within 24 hours.
                    </p>
                    <ul className="space-y-2 text-gray-800">
                        <li className="before:content-['✔️'] before:mr-2">Tailored Growth Strategies</li>
                        <li className="before:content-['✔️'] before:mr-2">Operations + Marketing in One</li>
                        <li className="before:content-['✔️'] before:mr-2">No long-term commitments</li>
                        <li className="before:content-['✔️'] before:mr-2">1-on-1 Expert Support</li>
                    </ul>
                </div>

                {/* Right Side – Form */}
                <form
                    className="bg-gray-50 rounded-2xl p-8 shadow-md border border-gray-200 space-y-6"
                    onSubmit={(e) => e.preventDefault()}
                >
                    {/* Name */}
                    <div>
                        <label className="block font-semibold mb-1">Full Name <span className="text-orange-500">*</span></label>
                        <input
                            type="text"
                            value={form.fullName}
                            required
                            onChange={e => setForm({ ...form, fullName: e.target.value })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
                        />
                    </div>

                    {/* Business Name */}
                    <div>
                        <label className="block font-semibold mb-1">Business Name</label>
                        <input
                            type="text"
                            value={form.businessName}
                            onChange={e => setForm({ ...form, businessName: e.target.value })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block font-semibold mb-1">Email Address <span className="text-orange-500">*</span></label>
                        <input
                            type="email"
                            value={form.email}
                            required
                            onChange={e => setForm({ ...form, email: e.target.value })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
                        />
                    </div>

                    {/* Phone */}
                    <div>
                        <label className="block font-semibold mb-1">Phone Number</label>
                        <input
                            type="text"
                            value={form.phone}
                            onChange={e => setForm({ ...form, phone: e.target.value })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
                        />
                    </div>

                    {/* Service Selection */}
                    <div>
                        <label className="block font-semibold mb-1">What service are you interested in?</label>
                        <select
                            value={form.service}
                            onChange={e => setForm({ ...form, service: e.target.value })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
                        >
                            <option value="">Select an option</option>
                            {services.map((s, idx) => (
                                <option key={idx} value={s}>{s}</option>
                            ))}
                        </select>
                    </div>

                    {/* Message */}
                    <div>
                        <label className="block font-semibold mb-1">How can we help you?</label>
                        <textarea
                            rows={4}
                            value={form.message}
                            onChange={e => setForm({ ...form, message: e.target.value })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
                        />
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full bg-orange-500 text-white font-semibold py-3 rounded-md hover:bg-orange-600 transition"
                    >
                        Submit Inquiry
                    </button>
                </form>
            </motion.div>
        </section>
    );
}
