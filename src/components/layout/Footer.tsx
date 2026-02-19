import React from 'react';
import { MapPin, PhoneCall, Link } from 'lucide-react';

import logo from '../../assets/Megacity-LOGO.jpg';

export const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-[#1A1A1A] text-white pt-24 pb-12" id="contact">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <img src={logo} alt="Megacity Nursing Home" className="h-12 w-auto" />
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Commitment to life, dignity, and expert care. Providing a safe haven for our seniors since 1994.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 bg-white/5 flex items-center justify-center rounded hover:bg-primary transition-colors"><Link size={18} /></a>
                            <a href="#" className="w-10 h-10 bg-white/5 flex items-center justify-center rounded hover:bg-primary transition-colors"><Link size={18} /></a>
                        </div>
                    </div>

                    {/* Quick Nav */}
                    <div>
                        <h3 className="text-primary font-bold uppercase tracking-widest text-xs mb-8">Quick Navigation</h3>
                        <ul className="space-y-4 text-sm font-semibold">
                            <li><a href="#" className="text-white hover:text-primary transition-colors uppercase">About Our Home</a></li>
                            <li><a href="#" className="text-white hover:text-primary transition-colors uppercase">Medical Services</a></li>
                            <li><a href="#" className="text-white hover:text-primary transition-colors uppercase">Admissions</a></li>
                            <li><a href="#" className="text-white hover:text-primary transition-colors uppercase">Photo Gallery</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-primary font-bold uppercase tracking-widest text-xs mb-8">Get In Touch</h3>
                        <ul className="space-y-6 text-sm">
                            <li className="flex gap-3">
                                <MapPin className="text-primary shrink-0" size={20} />
                                <span className="text-gray-400">12 Jessore Road, Champadali,<br />Barasat, North 24 Parganas,<br />Kolkata - 700124</span>
                            </li>
                            <li className="flex gap-3 items-center">
                                <PhoneCall className="text-primary shrink-0" size={20} />
                                <span className="text-gray-400">+91 6290337393</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-primary font-bold uppercase tracking-widest text-xs mb-8">Newsletter</h3>
                        <p className="text-gray-400 text-sm mb-4">Subscribe for updates on our facilities and geriatric health tips.</p>
                        <div className="flex flex-col gap-2">
                            <input
                                type="email"
                                placeholder="YOUR EMAIL ADDRESS"
                                className="bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-primary uppercase tracking-wide"
                            />
                            <button className="bg-primary text-white font-bold uppercase text-xs py-3 hover:bg-primary-hover transition-colors tracking-widest">
                                Join Now
                            </button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-semibold uppercase tracking-wide">
                    <p>© {currentYear} Megacity Nursing Home Pvt. Ltd. All rights reserved.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
