import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export const TopBar: React.FC = () => {
    return (
        <div className="bg-[#1A1A1A] text-white text-xs py-2 hidden md:block">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                <div className="flex items-center gap-6">
                    <a href="tel:+916290337393" className="flex items-center gap-2 hover:text-primary transition-colors">
                        <Phone size={14} className="text-primary" />
                        <span>+91 6290337393</span>
                    </a>
                    <a href="mailto:megacitynh@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                        <Mail size={14} className="text-primary" />
                        <span>megacitynh@gmail.com</span>
                    </a>
                </div>
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                        <MapPin size={14} className="text-primary" />
                        <span>Barasat, Kolkata</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Clock size={14} className="text-primary" />
                        <span>24/7 Emergency Care</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
