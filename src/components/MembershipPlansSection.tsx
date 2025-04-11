'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaTimes, FaArrowLeft } from 'react-icons/fa';

// Define types for membership plans
interface Feature {
  id: number;
  name: string;
  included: boolean;
}

interface Plan {
  id: number;
  title: string;
  price: number;
  duration: string;
  features: Feature[];
  recommended: boolean;
  ctaText: string;
  color: string;
}

const MembershipPlans: React.FC = () => {
  // Define membership plans
  const [plans] = useState<Plan[]>([
    {
      id: 1,
      title: 'בסיסי',
      price: 99,
      duration: 'לחודש',
      features: [
        { id: 1, name: 'גישה לאולם הכושר', included: true },
        { id: 2, name: 'שעות פעילות מוגבלות', included: true },
        { id: 3, name: 'אימון אישי חודשי', included: false },
        { id: 4, name: 'גישה לשיעורי סטודיו', included: false },
        { id: 5, name: 'שימוש בסאונה וג׳קוזי', included: false },
      ],
      recommended: false,
      ctaText: 'הצטרף עכשיו',
      color: '#e0e0e0',
    },
    {
      id: 2,
      title: 'סטנדרט',
      price: 149,
      duration: 'לחודש',
      features: [
        { id: 1, name: 'גישה לאולם הכושר', included: true },
        { id: 2, name: 'שעות פעילות מלאות', included: true },
        { id: 3, name: 'אימון אישי חודשי', included: true },
        { id: 4, name: 'גישה לשיעורי סטודיו', included: false },
        { id: 5, name: 'שימוש בסאונה וג׳קוזי', included: false },
      ],
      recommended: true,
      ctaText: 'הצטרף עכשיו',
      color: '#45B7D1',
    },
    {
      id: 3,
      title: 'פרימיום',
      price: 199,
      duration: 'לחודש',
      features: [
        { id: 1, name: 'גישה לאולם הכושר', included: true },
        { id: 2, name: 'שעות פעילות מלאות', included: true },
        { id: 3, name: 'שני אימונים אישיים בחודש', included: true },
        { id: 4, name: 'גישה לשיעורי סטודיו', included: true },
        { id: 5, name: 'שימוש בסאונה וג׳קוזי', included: true },
      ],
      recommended: false,
      ctaText: 'הצטרף עכשיו',
      color: '#FFEEAD',
    },
    {
      id: 4,
      title: 'VIP',
      price: 299,
      duration: 'לחודש',
      features: [
        { id: 1, name: 'גישה לאולם הכושר', included: true },
        { id: 2, name: 'שעות פעילות מלאות', included: true },
        { id: 3, name: 'ארבעה אימונים אישיים בחודש', included: true },
        { id: 4, name: 'גישה בלתי מוגבלת לשיעורי סטודיו', included: true },
        { id: 5, name: 'שימוש בסאונה, ג׳קוזי וטיפולי ספא', included: true },
      ],
      recommended: false,
      ctaText: 'הצטרף עכשיו',
      color: '#f0f0f0',
    },
  ]);

  return (
    <section 
      id="membership-plans" 
      className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen"
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">תוכניות מנוי</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            בחר את תוכנית המנוי המתאימה לך ביותר והתחל את מסע הכושר שלך עוד היום במכון כושר גמא
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: plan.id * 0.1 }}
              whileHover={{ 
                y: plan.recommended ? -10 : -5,
                boxShadow: plan.recommended 
                  ? '0 25px 50px -12px rgba(0, 0, 0, 0.25)' 
                  : '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
              }}
              className={`relative rounded-2xl overflow-hidden ${
                plan.recommended 
                  ? 'transform -translate-y-4 shadow-2xl' 
                  : 'shadow-lg'
              }`}
            >
              <div 
                className={`h-full flex flex-col backdrop-blur-sm bg-white/80 border border-gray-100`}
                style={{
                  boxShadow: plan.recommended 
                    ? 'inset 0 2px 6px rgba(69, 183, 209, 0.2), 0 10px 20px rgba(69, 183, 209, 0.15)' 
                    : 'inset 0 2px 4px rgba(0, 0, 0, 0.05)'
                }}
              >
                {plan.recommended && (
                  <div className="absolute top-0 left-0 right-0 bg-[#45B7D1] text-white py-1 text-center text-sm font-medium">
                    מומלץ
                  </div>
                )}
                
                <div 
                  className={`p-8 text-right ${plan.recommended ? 'pt-12' : 'pt-8'}`}
                  style={{
                    background: `linear-gradient(135deg, ${plan.color}20, ${plan.color}50)`,
                  }}
                >
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.title}</h3>
                  <div className="flex items-baseline justify-end mb-6">
                    <span className="text-gray-600 mr-2">{plan.duration}</span>
                    <span className="text-4xl font-bold">₪{plan.price}</span>
                  </div>
                </div>
                
                <div className="flex-grow p-8 pt-4 bg-white/90">
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature.id} className="flex items-center justify-between">
                        <span className="text-gray-700">{feature.name}</span>
                        {feature.included ? (
                          <span className="flex-shrink-0 h-6 w-6 bg-[#45B7D1] rounded-full flex items-center justify-center">
                            <FaCheck className="text-white text-xs" />
                          </span>
                        ) : (
                          <span className="flex-shrink-0 h-6 w-6 bg-gray-200 rounded-full flex items-center justify-center">
                            <FaTimes className="text-gray-400 text-xs" />
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="p-8 pt-0 bg-white/90">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-3 px-6 rounded-xl flex items-center justify-center text-white font-medium transition-all duration-300 ${
                      plan.recommended 
                        ? 'bg-[#45B7D1] hover:bg-[#3da7c1]' 
                        : 'bg-gray-700 hover:bg-gray-800'
                    }`}
                    style={{
                      boxShadow: plan.recommended 
                        ? '0 4px 14px rgba(69, 183, 209, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.4)' 
                        : '0 4px 6px rgba(0, 0, 0, 0.1), inset 0 1px 1px rgba(255, 255, 255, 0.1)'
                    }}
                    aria-label={`הצטרף לתוכנית ${plan.title}`}
                  >
                    <span>{plan.ctaText}</span>
                    <FaArrowLeft className="mr-2 text-sm" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-600">
            יש לך שאלות נוספות? <a href="#contact" className="text-[#45B7D1] font-medium hover:underline">צור קשר</a> עם צוות השירות שלנו
          </p>
        </div>
      </div>
    </section>
  );
};

export default MembershipPlans;