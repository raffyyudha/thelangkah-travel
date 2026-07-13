"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight, MoreHorizontal, X } from "lucide-react";
import { googleReviews } from "@/data/googleReviews";

// Large Google Logo SVG component
const GoogleLogo = () => (
    <svg viewBox="0 0 272 92" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z" fill="#EA4335" />
        <path d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z" fill="#FBBC05" />
        <path d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z" fill="#4285F4" />
        <path d="M225 3v65h-9.5V3h9.5z" fill="#34A853" />
        <path d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z" fill="#EA4335" />
        <path d="M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49.01z" fill="#4285F4" />
    </svg>
);

// Avatar colors for variety
const avatarColors = [
    "bg-teal-500",
    "bg-blue-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-orange-500",
    "bg-green-500",
    "bg-indigo-500",
    "bg-red-500",
];

export default function TestimonialSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [reviewCount, setReviewCount] = useState<number[]>([]);

    // Generate stable random review counts on mount
    useEffect(() => {
        setReviewCount(googleReviews.map(() => Math.floor(Math.random() * 20) + 5));
    }, []);

    // Auto-play functionality
    useEffect(() => {
        let interval: NodeJS.Timeout;

        if (isAutoPlaying) {
            interval = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % googleReviews.length);
            }, 6000);
        }

        return () => clearInterval(interval);
    }, [isAutoPlaying]);

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % googleReviews.length);
        setIsAutoPlaying(false);
    };

    const goToPrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + googleReviews.length) % googleReviews.length);
        setIsAutoPlaying(false);
    };

    const currentReview = googleReviews[currentIndex];
    const avatarColor = avatarColors[currentIndex % avatarColors.length];

    return (
        <div className="w-full max-w-lg mx-auto px-4 py-8">
            {/* Header Section - Stars at top */}
            <div className="text-center mb-6">
                {/* 5 Stars */}
                <div className="flex justify-center gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                            key={star}
                            className="w-6 h-6 md:w-7 md:h-7"
                            style={{ fill: '#FBBF24', color: '#FBBF24' }}
                        />
                    ))}
                </div>

                {/* Rating Text */}
                <p className="text-gray-600 text-base md:text-lg mb-1">
                    4.9 / 5 Average Rating
                </p>
                <p className="text-gray-900 font-bold text-lg md:text-xl mb-6">
                    Based on 180+ verified reviews
                </p>

                {/* Large Google Logo */}
                <div className="w-40 md:w-48 h-14 md:h-16 mx-auto">
                    <GoogleLogo />
                </div>
            </div>

            {/* Review Card */}
            <div className="relative group">
                <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.12)] border border-gray-100 p-5 md:p-6 transition-all duration-300">
                    <div key={currentIndex} className="animate-fadeIn">
                        {/* Card Header with X and Menu */}
                        <div className="flex justify-between items-start mb-4">
                            <div className="flex items-center gap-3">
                                {/* X Close Button */}
                                <button className="text-gray-400 hover:text-gray-600 transition-colors">
                                    <X size={20} />
                                </button>

                                {/* Avatar */}
                                <div className={`w-10 h-10 md:w-11 md:h-11 rounded-full ${avatarColor} flex items-center justify-center text-white font-semibold text-base md:text-lg shrink-0 overflow-hidden`}>
                                    {currentReview.avatar ? (
                                        <Image
                                            src={currentReview.avatar}
                                            alt={currentReview.name}
                                            width={44}
                                            height={44}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        currentReview.name.charAt(0).toUpperCase()
                                    )}
                                </div>

                                {/* Name & Review Count */}
                                <div className="flex flex-col">
                                    <h4 className="font-semibold text-gray-900 text-sm md:text-base leading-tight">
                                        {currentReview.name}
                                    </h4>
                                    <span className="text-xs text-gray-500">
                                        {reviewCount[currentIndex] || 10} ulasan
                                    </span>
                                </div>
                            </div>

                            {/* More Menu */}
                            <button className="text-gray-400 hover:text-gray-600 transition-colors p-1">
                                <MoreHorizontal size={20} />
                            </button>
                        </div>

                        {/* Rating Stars & Date */}
                        <div className="flex items-center gap-2 mb-4">
                            <div className="flex gap-0.5">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star
                                        key={star}
                                        className="w-4 h-4"
                                        style={{ fill: '#FBBF24', color: '#FBBF24' }}
                                    />
                                ))}
                            </div>
                            <span className="text-xs text-gray-500">{currentReview.date}</span>
                        </div>

                        {/* Review Text */}
                        <div className="space-y-3">
                            <p className="text-gray-800 text-sm md:text-base leading-relaxed">
                                {currentReview.text}
                            </p>

                            {/* Translate Link */}
                            <button className="text-[#1a73e8] text-sm hover:underline">
                                Lihat terjemahan
                            </button>
                        </div>
                    </div>
                </div>

                {/* Navigation Arrows */}
                <button
                    onClick={goToPrev}
                    className="absolute -left-3 md:-left-14 top-1/2 -translate-y-1/2 bg-white text-gray-600 p-2 rounded-full shadow-lg border border-gray-200 hover:bg-gray-50 hover:shadow-xl transition-all z-10"
                    aria-label="Previous review"
                >
                    <ChevronLeft size={22} />
                </button>

                <button
                    onClick={goToNext}
                    className="absolute -right-3 md:-right-14 top-1/2 -translate-y-1/2 bg-white text-gray-600 p-2 rounded-full shadow-lg border border-gray-200 hover:bg-gray-50 hover:shadow-xl transition-all z-10"
                    aria-label="Next review"
                >
                    <ChevronRight size={22} />
                </button>
            </div>

            {/* View All Reviews Button */}
            <div className="text-center mt-8">
                <a
                    href="https://www.google.com/search?q=go+whale+shark+sumbawa+reviews"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 bg-white border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 hover:border-gray-400 transition-all shadow-sm"
                >
                    View all reviews
                </a>
            </div>
        </div>
    );
}
