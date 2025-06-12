'use client';

import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaWhatsapp,
    FaTiktok,
    FaLinkedinIn,
    FaMapMarkerAlt,
} from 'react-icons/fa';
import Link from 'next/link';


export default function Footer() {
    return (
        <footer className="bg-[#274290] text-white pt-16 pb-8 px-6 sm:px-12 mt-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-sm items-start">

                {/* Left: Logo + Brand */}
                <div className="space-y-2">
                    {/* Replace this with your actual logo later */}
                    <div className="w-16 h-16 bg-white rounded-full mb-2" />
                    <h3 className="text-2xl font-bold text-orange-400">North Via Marketing</h3>
                    <p className="text-gray-100 text-sm leading-relaxed">
                        Dream bigger. Compete smarter. Win together.
                    </p>
                </div>

                {/* Center: Quick Links */}
                <div className="space-y-2">
                    <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
                    <ul className="text-gray-200 space-y-1">
                        <li><Link href="/" className="hover:underline">Home</Link></li>
                        <li><Link href="#about" className="hover:underline">About</Link></li>
                        <li><Link href="#packages" className="hover:underline">Services</Link></li>
                        <li><Link href="#contact" className="hover:underline">Contact</Link></li>
                    </ul>
                </div>

                {/* Right: Social Media Icons */}
                <div>
                    <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
                    <div className="flex flex-wrap gap-4 text-2xl">
                        <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
                            <FaFacebookF className="text-[#1877F2] hover:scale-110 transition-transform" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                            <FaInstagram className="text-[#E1306C] hover:scale-110 transition-transform" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
                            <FaTwitter className="text-[#1DA1F2] hover:scale-110 transition-transform" />
                        </a>
                        <a href="https://wa.me" target="_blank" rel="noreferrer" aria-label="WhatsApp">
                            <FaWhatsapp className="text-[#25D366] hover:scale-110 transition-transform" />
                        </a>
                        <a href="https://tiktok.com" target="_blank" rel="noreferrer" aria-label="TikTok">
                            <FaTiktok className="text-white hover:text-[#FF0050] hover:scale-110 transition-transform" />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                            <FaLinkedinIn className="text-[#0A66C2] hover:scale-110 transition-transform" />
                        </a>
                        <a href="https://maps.google.com" target="_blank" rel="noreferrer" aria-label="Google Maps">
                            <FaMapMarkerAlt className="text-[#EA4335] hover:scale-110 transition-transform" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Credit */}
            <div className="mt-12 border-t border-[#e6e7e8] pt-4 text-center text-xs text-gray-300 tracking-wide">
                <div>
                    &copy; {new Date().getFullYear()} North Via Marketing. All rights reserved.
                </div>
                <div className="mt-1">
                    Website by <a href="https://northviatech.com" className="text-orange-400 hover:underline font-medium">NorthViaTech</a>
                </div>
            </div>
        </footer>
    );
}
