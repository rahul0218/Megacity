import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Globe, Lock, Server, Zap, BarChart3 } from 'lucide-react';

const features = [
    {
        name: 'Global Edge Network',
        description: 'Deploy your data to 300+ edge locations worldwide for sub-millisecond latency.',
        icon: Globe,
    },
    {
        name: 'Real-time Analytics',
        description: 'Visualize your data streams in real-time with our advanced dashboarding tools.',
        icon: BarChart3,
    },
    {
        name: 'Enterprise Security',
        description: 'Bank-grade encryption at rest and in transit, with granular access controls.',
        icon: Lock,
    },
    {
        name: 'Serverless Compute',
        description: 'Run your logic at the edge without managing a single server.',
        icon: Server,
    },
    {
        name: 'Instant Scaling',
        description: 'Handle millions of requests per second with automatic scaling.',
        icon: Zap,
    },
    {
        name: 'AI Integration',
        description: 'Native support for running AI models directly on your data streams.',
        icon: Cpu,
    },
];

export const Features: React.FC = () => {
    return (
        <div className="py-24 sm:py-32 bg-black/50 relative overflow-hidden" id="features">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-secondary">Faster than light</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl font-display">
                        Everything needed to build your digital empire
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-400">
                        Megacity provides the foundational layer for the next generation of high-scale applications.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex flex-col relative group"
                            >
                                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                                    <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-gray-800/50 border border-white/10 group-hover:border-primary/50 group-hover:bg-primary/10 transition-colors">
                                        <feature.icon className="h-5 w-5 flex-none text-primary" aria-hidden="true" />
                                    </div>
                                    {feature.name}
                                </dt>
                                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-400">
                                    <p className="flex-auto">{feature.description}</p>
                                </dd>
                            </motion.div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
};
