import React, { useState, useEffect } from "react";
import { Loading } from "../../assets/components/loading/Loading";

export const Error404 = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const minimumLoadTime = 700;
    const startTime = Date.now();

    const timer = setTimeout(() => {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = minimumLoadTime - elapsedTime;

      setTimeout(
        () => {
          setIsLoading(false);
        },
        Math.max(0, remainingTime),
      );
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="bg-linear-to-r from-gray-950 via-slate-800 to-blue-950 flex min-h-screen flex-col items-center justify-center gap-8">
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="text-9xl font-bold text-white">404</div>
        <div className="text-2xl font-semibold tracking-wider text-white">
          HALAMAN TIDAK DITEMUKAN
        </div>
      </div>
      <div className="hover:text-zinc-900 cursor-pointer rounded-xl border-2 px-3 py-2 text-lg font-semibold text-white transition-all hover:border-white hover:bg-white">
        <a href="/">Kembali ke Homepage</a>
      </div>
    </div>
  );
};
