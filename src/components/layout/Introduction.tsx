import React from 'react';
import MegacityBanner from '../../assets/Megacity-Banner-456x408.png';
export const Introduction: React.FC = () => {
    return (
        <div className="py-24 sm:py-32 bg-white overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 items-center">
                    {/* Text Content */}
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <span className="h-0.5 w-8 bg-primary"></span>
                            <span className="text-primary font-bold uppercase tracking-widest text-sm">Introduction</span>
                        </div>

                        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl font-display mb-6">
                            Welcome to <br />
                            Megacity Nursing Home
                        </h2>

                        <p className="text-lg leading-8 text-gray-600 mb-6">
                            “Megacity Nursing Home (P) Ltd.” stationed at the heart of Barasat (Champadali More) North 24 Parganas has been serving to the people with round the clock cure and care quality solutions of health problems since 1994,
                        </p>

                        <p className="text-lg leading-8 text-gray-600 mb-10">
                            and providing all human needs day to day to the enormous people of all sections in the field of Medical Health Care and Diagnostics facilities sincerely and comprehensively.
                        </p>

                        <div className="flex gap-12 border-t border-gray-100 pt-8">
                            <div>
                                <h3 className="text-3xl font-bold text-gray-900">25+</h3>
                                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mt-1">Years Experience</p>
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold text-gray-900">500+</h3>
                                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mt-1">Happy Residents</p>
                            </div>
                        </div>
                    </div>

                    {/* Image Content */}
                    <div className="relative">
                        <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                            <img
                                src={MegacityBanner}
                                alt="Smiling nurse"
                                className="object-cover w-full h-full"
                            />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};
