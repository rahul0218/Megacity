import React from 'react';
import { Heart, Brain, Activity, Utensils } from 'lucide-react';

const services = [
    {
        title: 'Skilled Nursing',
        description: '24/7 medical supervision and professional healthcare monitoring for all residents.',
        icon: Heart,
    },
    {
        title: 'Memory Care',
        description: 'Specialized programs for those with Alzheimer\'s and other memory impairments.',
        icon: Brain,
    },
    {
        title: 'Rehabilitation',
        description: 'Personalized physical, occupational, and speech therapy sessions.',
        icon: Activity,
    },
    {
        title: 'Nutrition Care',
        description: 'Gourmet dining plans tailored to specific dietary and health requirements.',
        icon: Utensils,
    },
];

export const Services: React.FC = () => {
    return (
        <div className="py-24 sm:py-32 bg-gray-50" id="services">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <span className="text-primary font-bold uppercase tracking-widest text-sm">Core Care</span>
                    </div>
                    <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl font-display relative inline-block">
                        Our Services
                        <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-primary"></span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border-t-4 border-transparent hover:border-primary group"
                        >
                            <div className="w-14 h-14 bg-primary/5 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                                <service.icon size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
