import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            backdropFilter: 'blur(8px)'
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="fixed inset-0 z-[9999] bg-[#f8f6f3]/95 backdrop-blur-sm flex items-center justify-center overflow-hidden"
        >
          
          {/* Background Glow */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.08, 0.12, 0.08]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="absolute w-[500px] h-[500px] rounded-full bg-[#c9a869] blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
          </div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="relative text-center"
          >

            {/* Small Label */}
            <motion.p
              initial={{ opacity: 0, letterSpacing: '0.4em' }}
              animate={{ opacity: 1, letterSpacing: '0.25em' }}
              transition={{ duration: 1 }}
              className="text-[11px] uppercase tracking-[0.25em] text-[#b89b6a] mb-6 font-medium"
            >
              Premium Beauty Studio
            </motion.p>

            {/* Logo */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="text-[42px] lg:text-[58px] leading-none font-extralight tracking-tight text-[#2d2a26]"
            >
              MJ Studio{' '}
              <span className="italic text-[#9b8f81] font-light">
                Beauty
              </span>
            </motion.h1>

            {/* Divider */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '120px' }}
              transition={{
                duration: 1,
                delay: 0.2
              }}
              className="h-px bg-gradient-to-r from-transparent via-[#c9a869] to-transparent mx-auto mt-8"
            />

            {/* Loading Dots */}
            <div className="mt-8 flex items-center justify-center gap-2">
              {[0, 1, 2].map((item) => (
                <motion.div
                  key={item}
                  animate={{
                    y: [0, -6, 0],
                    opacity: [0.25, 1, 0.25],
                    scale: [1, 1.15, 1]
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: item * 0.18
                  }}
                  className="w-2 h-2 rounded-full bg-[#c9a869]"
                />
              ))}
            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}