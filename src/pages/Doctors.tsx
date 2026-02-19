import React from 'react';
import { Doctors as DoctorList } from '../components/layout/Doctors';

export const DoctorsPage: React.FC = () => {
    return (
        <main className="pt-20">
            <div className="bg-primary/5 py-16">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl font-display mb-4">
                        Meet Our Specialists
                    </h1>
                    <p className="text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
                        Our world-class medical team is here to provide 24/7 support and expert geriatric care.
                    </p>
                </div>
            </div>
            <DoctorList />
        </main>
    );
};
