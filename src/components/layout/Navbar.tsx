import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

import logo from '../../assets/logo.jpg';

import { TopBar } from './TopBar';

export const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navigation = [
        { name: 'Home', href: '/' },
        { name: 'Services', href: '/services' },
        { name: 'Our Doctors', href: '/doctors' },
        { name: 'Gallery', href: '/gallery' },
        { name: 'Contact', href: '/contact' },
    ];

    const isActive = (path: string) => location.pathname === path;

    return (
        <div className="fixed w-full z-50 top-0">
            <TopBar />
            <nav className="bg-white/60 border-b border-gray-100">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-20">
                        <div className="flex items-center">
                            <Link to="/" className="flex-shrink-0 flex items-center gap-3">
                                <img src={logo} alt="Megacity Nursing Home" className="h-10 w-auto" />
                                <span className="font-bold text-xl text-primary tracking-tight">
                                    MEGACITY NURSING HOME PVT. LTD.
                                </span>
                            </Link>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex md:items-center md:space-x-8">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.href}
                                    className={`text-sm font-medium transition-colors uppercase tracking-wide ${isActive(item.href) ? 'text-primary font-bold' : 'text-gray-700 hover:text-primary'
                                        }`}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <button className="bg-primary text-white px-6 py-2.5 rounded text-sm font-bold uppercase tracking-wider hover:bg-primary-hover transition-colors shadow-lg shadow-primary/20">
                                Book a Tour
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="flex items-center md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="text-gray-500 hover:text-gray-700 p-2"
                            >
                                {isOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden bg-white border-t border-gray-100">
                        <div className="space-y-1 px-4 pb-3 pt-2">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.href}
                                    className={`block py-2 text-base font-medium rounded px-3 ${isActive(item.href) ? 'text-primary bg-gray-50' : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                                        }`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <button className="w-full mt-4 bg-primary text-white px-6 py-3 rounded font-bold uppercase tracking-wider">
                                Book a Tour
                            </button>
                        </div>
                    </div>
                )}

            </nav>
        </div>
    );
};
