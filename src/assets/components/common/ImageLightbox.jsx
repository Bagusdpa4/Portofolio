import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";

export const ImageLightbox = ({
  images,
  currentIndex,
  isOpen,
  onClose,
  onPrev,
  onNext,
  onSelect,
}) => {
  // Tutup dengan tombol Escape
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!images || images.length === 0) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="z-100 fixed inset-0 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
        >
          {/* Tombol Close */}
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute right-4 top-4 z-10 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-gray-900/70 text-white transition duration-300 hover:bg-cyan-600 sm:right-6 sm:top-6"
          >
            <FaTimes className="h-5 w-5" />
          </button>

          {/* Gambar */}
          <div
            className="relative flex h-full w-full max-w-6xl items-center justify-center px-4 py-16 sm:px-16"
            onClick={(e) => e.stopPropagation()}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={images[currentIndex]}
                alt={`Screenshot ${currentIndex + 1}`}
                className="max-h-full max-w-full rounded-lg object-contain shadow-2xl"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              />
            </AnimatePresence>

            {/* Panah Prev/Next */}
            {images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onPrev();
                  }}
                  aria-label="Previous image"
                  className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-gray-900/70 text-white transition duration-300 hover:bg-cyan-600"
                >
                  <FaChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onNext();
                  }}
                  aria-label="Next image"
                  className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-gray-900/70 text-white transition duration-300 hover:bg-cyan-600"
                >
                  <FaChevronRight className="h-5 w-5" />
                </button>
              </>
            )}
          </div>

          {/* Counter + Dots */}
          {images.length > 1 && (
            <div
              className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3"
              onClick={(e) => e.stopPropagation()}
            >
              <p className="text-sm text-gray-300">
                {currentIndex + 1} / {images.length}
              </p>
              <div className="flex max-w-xs flex-wrap justify-center gap-1.5">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => onSelect(idx)}
                    aria-label={`Go to image ${idx + 1}`}
                    className={`h-4 w-4 cursor-pointer rounded-full transition duration-300 ${
                      idx === currentIndex
                        ? "bg-cyan-400"
                        : "bg-gray-500/60 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
