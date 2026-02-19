import React from 'react';
import { Hero } from '../components/layout/Hero';
import { Introduction } from '../components/layout/Introduction';
import { Services } from '../components/layout/Services';
import { Doctors } from '../components/layout/Doctors';

export const Home: React.FC = () => {
    return (
        <main>
            <Hero />
            <Introduction />
            {/* Show preview of services and doctors on home */}
            <Services />
            <Doctors />
        </main>
    );
};
