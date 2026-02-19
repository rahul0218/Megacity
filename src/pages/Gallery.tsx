import React, { useState } from 'react';
import { X, Play } from 'lucide-react';

import img1 from '../assets/hero/Slider1-2.png';
import img2 from '../assets/hero/Slider1-3.png';
import img3 from '../assets/hero/Slider1-4-1024x512.png';
import img4 from '../assets/hero/Slider1-5.png';
import img5 from '../assets/hero/Slider1-6.png';
import img6 from '../assets/hero/Slider1-7-1024x512.png';
import img7 from '../assets/hero/Untitled-design-1-1024x512.png';
import img8 from '../assets/hero/MEGACITY POWERPOINT_page-0022.png';

export const GalleryPage: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const images = [
        { src: img1, alt: 'Megacity Nursing Home Facility' },
        { src: img2, alt: 'Patient Care' },
        { src: img3, alt: 'Community Activities' },
        { src: img4, alt: 'Therapy Session' },
        { src: img5, alt: 'Medical Staff' },
        { src: img6, alt: 'Modern Infrastructure' },
        { src: img7, alt: 'Exterior View' },
        { src: img8, alt: 'Reception Area' },
    ];

    return (
        <main className="pt-20">
            <div className="bg-primary/5 py-16">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl font-display mb-4">
                        Our Gallery
                    </h1>
                    <p className="text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
                        A glimpse into the life, care, and community at Megacity Nursing Home.
                    </p>
                </div>
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 space-y-24">
                {/* Video Section */}
                <section>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-display mb-4">
                            Video Tour
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Experience the warmth and dedication of our facility through our video tour.
                        </p>
                    </div>
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-900 aspect-video max-w-4xl mx-auto group cursor-pointer">
                        {/* Placeholder for video - in a real app, this would be an iframe or video tag */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-20 h-20 bg-primary/90 rounded-full flex items-center justify-center group-hover:bg-primary transition-colors text-white pl-1 shadow-lg shadow-primary/20">
                                <Play size={32} fill="currentColor" />
                            </div>
                        </div>
                        <img
                            src={img1}
                            alt="Video Thumbnail"
                            className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-300"
                        />
                        <div className="absolute bottom-8 left-8 right-8 text-white">
                            <h3 className="text-2xl font-bold mb-2">Welcome to Megacity</h3>
                            <p className="text-gray-200">Watch our introduction video to learn more about our services and values.</p>
                        </div>
                    </div>
                </section>

                {/* Photo Gallery */}
                <section>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-display mb-4">
                            Photo Gallery
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Explore our state-of-the-art facilities and everyday moments of joy.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {images.map((image, index) => (
                            <div
                                key={index}
                                className="relative group overflow-hidden rounded-xl aspect-square cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
                                onClick={() => setSelectedImage(image.src)}
                            >
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className="absolute top-4 right-4 text-white hover:text-primary transition-colors p-2"
                        onClick={() => setSelectedImage(null)}
                    >
                        <X size={32} />
                    </button>
                    <img
                        src={selectedImage}
                        alt="Gallery Fullscreen"
                        className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </main>
    );
};
