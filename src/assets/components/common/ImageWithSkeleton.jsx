import React, { useState } from "react";

export const ImageWithSkeleton = ({
  src,
  alt,
  className = "",
  imgClassName = "",
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 animate-pulse bg-gray-700/50">
          <div className="bg-linear-to-r bg-size-[200%_100%] h-full w-full animate-[shimmer_1.5s_infinite] from-gray-700/50 via-gray-600/50 to-gray-700/50" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        onLoad={() => setIsLoaded(true)}
        className={`transition-opacity duration-500 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } ${imgClassName}`}
      />
    </div>
  );
};
