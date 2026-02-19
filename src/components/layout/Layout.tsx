import React from 'react';
import { Navbar } from './Navbar';

interface LayoutProps {
    children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans">
            <Navbar />
            <main className="pt-16">
                {children}
            </main>
            <footer className="py-8 text-center text-muted-foreground text-sm border-t border-muted/20">
                © 2024 Megacity. All rights reserved.
            </footer>
        </div>
    );
};
