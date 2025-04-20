"use client";

import React, { useState } from "react";
import Image from "next/image";

type ImageData = {
  src: string;
  alt: string;
};

type ImageGridWithModalProps = {
  images: ImageData[];
};

export default function ImageGridWithModal({ images }: ImageGridWithModalProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const openModal = (index: number) => {
    setSelectedImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
    setIsModalOpen(false);
  };

  const showPrevImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + images.length) % images.length);
    }
  };

  const showNextImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % images.length);
    }
  };

  const selectedImage = selectedImageIndex !== null ? images[selectedImageIndex] : null;

  return (
    <div>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <li
            key={index}
            className="border border-gray-300 cursor-pointer"
            onClick={() => openModal(index)}
          >
            <Image src={image.src} alt={image.alt} width={500} height={500} />
          </li>
        ))}
      </ul>

      {isModalOpen && selectedImage && (
        <div className="fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-10">
          <div className="relative">
            <button
              className="absolute -top-12 -right-8 text-white text-6xl cursor-pointer"
              onClick={closeModal}
            >
              &times;
            </button>
            <button
              className="absolute -left-6 top-1/2 transform -translate-y-1/2 text-white text-3xl cursor-pointer"
              onClick={showPrevImage}
            >
              &#8249;
            </button>
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={800}
              height={800}
              className="rounded"
            />
            <button
              className="absolute -right-6 top-1/2 transform -translate-y-1/2 text-white text-3xl cursor-pointer"
              onClick={showNextImage}
            >
              &#8250;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}