import React from 'react';
import { Services as ServicesList } from '../components/layout/Services';

export const ServicesPage: React.FC = () => {
    return (
        <main className="pt-20">
            <div className="bg-primary/5 py-16">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl font-display mb-4">
                        Comprehensive Care Services
                    </h1>
                    <p className="text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
                        Dedicated to enhancing the quality of life for every resident through personalized medical and personal care.
                    </p>
                </div>
            </div>
            <ServicesList />
        </main>
    );
};
