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
    <div className="bg-linear-to-r flex min-h-screen flex-col items-center justify-center gap-8 from-gray-100 via-white to-blue-100 dark:from-gray-950 dark:via-slate-800 dark:to-blue-950">
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="text-9xl font-bold text-black dark:text-white">404</div>
        <div className="text-2xl font-semibold tracking-wider text-black dark:text-white">
          PAGE NOT FOUND
        </div>
      </div>
      <div className="cursor-pointer rounded-xl border-2 border-black px-3 py-2 text-lg font-semibold text-black transition-all hover:border-sky-600 hover:bg-sky-600 hover:text-white dark:border-white dark:text-white dark:hover:border-white dark:hover:bg-white dark:hover:text-zinc-900">
        <a href="/">Back to Homepage</a>
      </div>
    </div>
  );
};
