import React from "react";

export const Loading = () => {
  return (
    <div className="bg-linear-to-r flex min-h-screen flex-col items-center justify-center gap-8 from-gray-100 via-white to-blue-100 dark:from-gray-950 dark:via-slate-800 dark:to-blue-950">
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-sky-600 border-t-black dark:border-cyan-400 dark:border-t-white"></div>
      </div>
    </div>
  );
};
