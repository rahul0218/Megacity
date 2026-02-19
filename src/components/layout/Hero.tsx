import React, { useState, useEffect, useCallback } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

import slide1 from '../../assets/hero/Slider1-2.png';
import slide2 from '../../assets/hero/Slider1-3.png';
import slide3 from '../../assets/hero/Slider1-4-1024x512.png';
import slide4 from '../../assets/hero/Slider1-5.png';
import slide5 from '../../assets/hero/Slider1-6.png';
import slide6 from '../../assets/hero/Slider1-7-1024x512.png';
import slide7 from '../../assets/hero/Untitled-design-1-1024x512.png';
import slide8 from '../../assets/hero/MEGACITY POWERPOINT_page-0022.png';

const slides = [
    {
        id: 1,
        image: slide1,
        subtitle: 'Excellence in Care',
        title: 'Your Loved Ones \nOur Family.',
        description: 'Megacity Nursing Home provides world-class medical attention combined with the warmth of a true home. We are dedicated to dignity, comfort, and joy.',
        primaryCta: 'Explore Our Facility',
        secondaryCta: 'View Services'
    },
    {
        id: 2,
        image: slide2,
        subtitle: 'Professional Medical Staff',
        title: '24/7 Expert \nMedical Attention',
        description: 'Our team of experienced doctors and nurses is available around the clock to ensure the health and safety of every resident.',
        primaryCta: 'Meet Our Doctors',
        secondaryCta: 'Medical Services'
    },
    {
        id: 3,
        image: slide3,
        subtitle: 'Community & Lifestyle',
        title: 'A Vibrant \nLiving Community',
        description: 'We believe active engagement is key to happiness. Our daily activities and social events keep residents connected and thriving.',
        primaryCta: 'View Activities',
        secondaryCta: 'Contact Us'
    },
    {
        id: 4,
        image: slide4,
        subtitle: 'Holistic Wellness',
        title: 'Mind, Body, \nand Soul.',
        description: 'Our approach goes beyond physical health. We nurture emotional well-being through therapy, recreation, and spiritual support.',
        primaryCta: 'Wellness Programs',
        secondaryCta: 'Learn More'
    },
    {
        id: 5,
        image: slide5,
        subtitle: 'Compassionate Staff',
        title: 'Care from \nthe Heart.',
        description: 'Our caregivers are chosen not just for their skills, but for their empathy and dedication to making every resident feel loved.',
        primaryCta: 'Our Team',
        secondaryCta: 'Join Us'
    },
    {
        id: 6,
        image: slide6,
        subtitle: 'Modern Facilities',
        title: 'State-of-the-Art \nInfrastructure',
        description: 'Equipped with the extensive medical facilities and comfortable living spaces designed for safety and ease of mobility.',
        primaryCta: 'Take a Tour',
        secondaryCta: 'Gallery'
    },
    {
        id: 7,
        image: slide7,
        subtitle: 'Legacy of Trust',
        title: 'Serving Since \n1980.',
        description: 'Decades of experience in geriatric care. Trust us to provide the stability and expertise your family deserves.',
        primaryCta: 'Our History',
        secondaryCta: 'Testimonials'
    },
    {
        id: 8,
        image: slide8,
        subtitle: 'Peaceful Environment',
        title: 'Serenity & \nComfort.',
        description: 'A tranquil atmosphere where residents can relax and enjoy their varied interests in peace.',
        primaryCta: 'Visit Us',
        secondaryCta: 'Gallery'
    }
];

export const Hero: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, []);

    const prevSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    }, []);

    // Auto-advance
    useEffect(() => {
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    }, [nextSlide]);

    return (
        <div className="relative bg-gray-50 h-[800px] overflow-hidden">
            {/* Background Images */}
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                        }`}
                >
                    <img
                        src={slide.image}
                        alt={slide.subtitle}
                        className={`w-full h-full ${slide.id === 8 ? 'object-contain object-center' : 'object-cover'}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
                </div>
            ))}

            {/* Content */}
            <div className="relative z-20 mx-auto max-w-7xl px-6 flex h-full items-center lg:px-8">
                <div className="max-w-2xl pt-20">
                    {slides.map((slide, index) => (
                        <div
                            key={slide.id}
                            className={`transition-all duration-700 transform ${index === currentSlide
                                ? 'translate-y-0 opacity-100'
                                : 'translate-y-8 opacity-0 absolute top-0 left-0 pointer-events-none'
                                } ${index === currentSlide ? 'relative' : 'hidden'}`} // hidden to prevent layout shift interaction issues if absolute positioning isn't perfect
                        >
                            <div className="mb-8 flex items-center gap-x-2">
                                <span className="h-0.5 w-8 bg-primary"></span>
                                <span className="text-primary font-bold uppercase tracking-widest text-sm text-shadow-sm">{slide.subtitle}</span>
                            </div>

                            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl mb-6 font-display whitespace-pre-line">
                                {slide.title.includes('Our Family') ? (
                                    <>
                                        Your Loved Ones <br />
                                        <span className="text-primary">Our Family.</span>
                                    </>
                                ) : (
                                    slide.title
                                )}
                            </h1>

                            <p className="mt-6 text-lg leading-8 text-gray-200 max-w-xl">
                                {slide.description}
                            </p>

                            <div className="mt-10 flex items-center gap-x-6">
                                <button className="bg-primary text-white px-8 py-3.5 rounded text-sm font-bold uppercase tracking-wider hover:bg-primary-hover transition-colors shadow-lg shadow-primary/30 flex items-center gap-2 cursor-pointer relative z-30">
                                    {slide.primaryCta} <ArrowRight size={16} />
                                </button>
                                <button className="text-white ring-1 ring-white/50 px-8 py-3.5 rounded text-sm font-bold uppercase tracking-wider hover:bg-white/10 transition-colors flex items-center gap-2 cursor-pointer relative z-30">
                                    {slide.secondaryCta}
                                </button>
                            </div>
                        </div>
                    ))}

                    {/* Slider Indicators */}
                    <div className="mt-20 flex gap-4 absolute bottom-20 left-6 lg:left-8 z-30">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`h-1 transition-all duration-300 ${index === currentSlide ? 'w-12 bg-primary' : 'w-12 bg-gray-600 hover:bg-gray-500'
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Slider Navigation Buttons */}
            <div className="absolute bottom-10 right-10 flex gap-2 z-30">
                <button
                    onClick={prevSlide}
                    className="w-12 h-12 flex items-center justify-center border border-white/20 text-white hover:bg-white/10 transition-colors backdrop-blur-sm cursor-pointer"
                    aria-label="Previous slide"
                >
                    <ChevronLeft size={24} />
                </button>
                <button
                    onClick={nextSlide}
                    className="w-12 h-12 flex items-center justify-center border border-white/20 text-white hover:bg-white/10 transition-colors backdrop-blur-sm cursor-pointer"
                    aria-label="Next slide"
                >
                    <ChevronRight size={24} />
                </button>
            </div>
        </div>
    );
};
