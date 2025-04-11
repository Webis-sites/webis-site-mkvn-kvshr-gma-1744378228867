'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

const GymHero: React.FC = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
        delay: 0.8,
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
      transition: {
        duration: 0.3,
      },
    },
    tap: {
      scale: 0.98,
      boxShadow: '0 5px 10px rgba(0, 0, 0, 0.1)',
    },
  };

  return (
    <section 
      id="gym-hero" 
      dir="rtl" 
      className="relative h-screen w-full overflow-hidden"
      aria-label="מכון כושר גמא - מידע ראשי"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
          alt="מכון כושר מודרני"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content Container */}
      <motion.div
        className="relative z-10 flex h-full w-full flex-col items-end justify-center px-6 sm:px-12 md:px-16 lg:px-24"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-2xl text-right">
          {/* Glassmorphism Card */}
          <motion.div 
            className="rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 p-8 md:p-10 shadow-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Heading */}
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-right text-white mb-4"
              variants={itemVariants}
            >
              מכון כושר מוביל בישראל
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-lg md:text-xl text-right text-white/90 mb-8"
              variants={itemVariants}
            >
              חווית לקוח מושלמת בכל ביקור
            </motion.p>

            {/* CTA Button - Neumorphic Style */}
            <motion.button
              className="px-8 py-4 rounded-xl bg-gradient-to-l from-[#45B7D1] to-[#45B7D1]/80 text-white font-bold text-lg 
                        shadow-[6px_6px_12px_rgba(0,0,0,0.2),-6px_-6px_12px_rgba(255,255,255,0.1)] 
                        hover:shadow-[8px_8px_16px_rgba(0,0,0,0.25),-8px_-8px_16px_rgba(255,255,255,0.15)] 
                        active:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.2),inset_-4px_-4px_8px_rgba(255,255,255,0.1)]
                        border border-white/10 backdrop-blur-sm transition-all"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              aria-label="קבע תור עכשיו"
            >
              קבע תור עכשיו
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* Decorative Elements - Glassmorphism Shapes */}
      <motion.div 
        className="absolute top-1/4 left-10 w-24 h-24 md:w-32 md:h-32 rounded-full 
                  bg-gradient-to-tr from-[#45B7D1]/30 to-[#FFEEAD]/30 
                  backdrop-blur-md border border-white/20 z-1"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      />
      
      <motion.div 
        className="absolute bottom-1/3 left-1/4 w-16 h-16 md:w-24 md:h-24 rounded-lg 
                  bg-gradient-to-bl from-[#FFEEAD]/30 to-[#45B7D1]/30 
                  backdrop-blur-md border border-white/20 z-1 rotate-12"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.5, scale: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      />
    </section>
  );
};

export default GymHero;