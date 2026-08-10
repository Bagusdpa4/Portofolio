import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- Internal Component: Section ---
const Section = ({ id, children, className = "" }) => {
  return (
    <section
      id={id}
      className={`flex min-h-screen flex-col items-center justify-center px-4 pb-16 pt-10 sm:px-8 ${className}`}
    >
      {children}
    </section>
  );
};

// --- TypewriterText Component (Single Cyan Cursor) ---
const TypewriterText = ({ text, delay = 0, speed, initialDelay = 0 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const startTyping = setTimeout(() => {
        const timeout = setTimeout(() => {
          setDisplayedText((prev) => prev + text[currentIndex]);
          setCurrentIndex((prev) => prev + 1);
        }, speed);
        return () => clearTimeout(timeout);
      }, initialDelay);

      return () => clearTimeout(startTyping);
    }
  }, [text, currentIndex, speed, initialDelay]);

  useEffect(() => {
    setDisplayedText("");
    setCurrentIndex(0);
  }, [text]);

  return (
    <motion.p
      className="text-xl font-semibold text-sky-600 dark:text-cyan-300 sm:text-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: delay, duration: 0.5 }}
    >
      {displayedText}
      {/* Blinking Cursor */}
      <motion.span
        aria-hidden="true"
        className="ml-0.5 inline-block h-6 w-1 bg-sky-600 align-text-bottom dark:bg-cyan-300"
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          ease: "easeInOut",
          repeatDelay: 0.5,
        }}
      />
    </motion.p>
  );
};

// Framer Motion Variants
const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};

const badgeAnimationVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
  animateLife: (i) => ({
    scale: [1, 1.01, 1],
    boxShadow: [
      "0 0 8px rgba(6, 182, 212, 0.4)",
      "0 0 16px rgba(6, 182, 212, 0.6)",
      "0 0 8px rgba(6, 182, 212, 0.4)",
    ],
    transition: {
      duration: 2.5,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 0.5 + i * 0.2,
    },
  }),
};

// Animated Badges Component
const AnimatedBadges = () => {
  const badges = [
    "Web Developer",
    "IT Programmer",
    "IT Support",
    "IT Operational",
  ];

  return (
    <motion.div
      className="mt-20 grid grid-cols-2 justify-items-center gap-3 sm:flex sm:flex-wrap sm:justify-center"
      variants={staggerContainerVariants}
      initial="hidden"
      animate="visible"
    >
      {badges.map((badge, i) => (
        <motion.div
          key={i}
          variants={badgeAnimationVariants}
          custom={i}
          initial="hidden"
          animate="visible"
          whileInView="animateLife"
          viewport={{ once: true, amount: 0.5 }}
          whileHover={{
            y: -6,
            scale: 1.08,
            boxShadow: "0 0 20px rgba(6, 182, 212, 0.8)",
          }}
          className="cursor-pointer rounded-lg border border-sky-600/40 bg-white/60 px-4 py-2 text-sm text-black shadow-md transition-all duration-300 hover:border-sky-500/70 dark:border-cyan-500/40 dark:bg-gray-900/40 dark:text-white dark:hover:border-cyan-400/70 sm:text-base"
        >
          <motion.span
            animate={{
              textShadow: [
                "0 0 4px rgba(6, 182, 212, 0.4)",
                "0 0 8px rgba(6, 182, 212, 0.7)",
                "0 0 4px rgba(6, 182, 212, 0.4)",
              ],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5 + i * 0.2,
            }}
          >
            {badge}
          </motion.span>
        </motion.div>
      ))}
    </motion.div>
  );
};

// Main Intro Overlay Component
export const IntroOverlay = ({ showIntro }) => {
  const EXIT_DURATION_MS = 1500;

  useEffect(() => {
    if (showIntro) {
      document.body.style.overflow = "hidden";
      window.scrollTo(0, 0);
    } else {
      const unlockScroll = setTimeout(() => {
        document.body.style.overflow = "unset";
      }, EXIT_DURATION_MS);

      return () => clearTimeout(unlockScroll);
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showIntro]);

  const tagline = "Building Digital Solutions with Precision.";

  const typingSpeed = EXIT_DURATION_MS / tagline.length;

  return (
    <AnimatePresence>
      {showIntro && (
        <motion.div
          key="intro"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 1.5, ease: "easeInOut" },
          }}
          className="bg-linear-to-r fixed inset-0 z-50 flex items-center justify-center from-gray-100 via-white to-blue-100 dark:from-gray-950 dark:via-slate-800 dark:to-blue-950"
        >
          <Section id="intro-overlay" className="pt-0 text-center">
            <div className="mx-auto max-w-4xl py-20">
              <motion.p
                className="mb-4 text-3xl font-light tracking-widest text-black opacity-80 dark:text-white sm:text-5xl"
                variants={textVariants}
              >
                Welcome To My
              </motion.p>
              <motion.h1
                className="text-5xl font-extrabold leading-tight tracking-tighter text-black/40 dark:text-slate-500 sm:text-7xl lg:text-9xl"
                variants={textVariants}
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [1, 0.8, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <span
                  className="bg-linear-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent dark:from-cyan-400 dark:to-blue-400"
                  style={{
                    textShadow:
                      "0 0 10px rgba(2, 132, 199, 0.5), 0 0 20px rgba(2, 132, 199, 0.3)",
                  }}
                >
                  Portfolio
                </span>
                <span
                  style={{
                    textShadow:
                      "0 0 10px rgba(2, 132, 199, 0.2), 0 0 20px rgba(2, 132, 199, 0.1)",
                  }}
                >
                  Website
                </span>
              </motion.h1>
              <motion.div variants={textVariants} className="mt-20">
                <TypewriterText
                  text={tagline}
                  initialDelay={0}
                  speed={typingSpeed}
                />
                <AnimatedBadges />
              </motion.div>
            </div>
          </Section>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
