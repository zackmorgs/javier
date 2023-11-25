"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { TitleMd } from './title';
import '@/styles/gallery.scss';

interface ImageProps {
    src: string;
    alt: string;
}

interface GalleryProps {
    title: string;
    galleryImages: ImageProps[];
    className?: string;
}

export default function Gallery({ title, galleryImages, className }: GalleryProps) {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const handleImageClick = (imageSrc: string) => {
        setSelectedImage(imageSrc);
    };

    return (
        <section className={`gallery ${className || ''}`}>
            <div className="max-w-7xl mx-auto px-5 sm:px-6 py-3 mb-4">
                <div className="border-b border-gray-300 pb-2 mb-4 text-center">
                    <TitleMd>{title}</TitleMd>
                </div>
                <ul className="gallery-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                    {galleryImages.map((image, index) => (
                        <li key={index} className="cursor-pointer">
                            <Image
                                src={image.src}
                                alt={image.alt}
                                width={375}
                                height={375}
                                className="gallery-img"
                                onClick={() => handleImageClick(image.src)}
                            />
                        </li>
                    ))}
                </ul>
            </div>
            {selectedImage && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={() => setSelectedImage(null)}>
                    <Image src={selectedImage} alt="Selected Image" layout="fill" objectFit="contain" />
                </div>
            )}
        </section>
    );
}
