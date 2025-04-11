'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaYoga, FaDumbbell, FaRunning, FaAppleAlt, FaSwimmer, FaHeartbeat } from 'react-icons/fa';

// Define trainer interface
interface Trainer {
  id: number;
  name: string;
  specialty: string;
  bio: string;
  image: string;
  icon: JSX.Element;
}

const TrainersSection = () => {
  // Sample trainers data
  const trainers: Trainer[] = [
    {
      id: 1,
      name: 'אביב כהן',
      specialty: 'יוגה',
      bio: 'מדריך יוגה מוסמך עם ניסיון של 8 שנים. מתמחה ביוגה ויניאסה ואשטנגה. מאמין בחיבור בין גוף ונפש.',
      image: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      icon: <FaYoga />
    },
    {
      id: 2,
      name: 'מיכל לוי',
      specialty: 'אימון כוח',
      bio: 'מאמנת כוח מקצועית עם התמחות בבניית שרירים ושיפור כוח. בעלת תואר ראשון בחינוך גופני.',
      image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      icon: <FaDumbbell />
    },
    {
      id: 3,
      name: 'דניאל אברהם',
      specialty: 'אימון קרדיו',
      bio: 'מאמן ריצה וקרדיו עם ניסיון של 10 שנים. מתמחה בשיפור סיבולת לב-ריאה ותוכניות הרזיה.',
      image: 'https://images.unsplash.com/photo-1567013127542-490d757e6349?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      icon: <FaRunning />
    },
    {
      id: 4,
      name: 'נועה שלום',
      specialty: 'תזונה',
      bio: 'דיאטנית קלינית מוסמכת. מתמחה בתזונה ספורטיבית ותוכניות תזונה מותאמות אישית לשיפור ביצועים.',
      image: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      icon: <FaAppleAlt />
    },
    {
      id: 5,
      name: 'יוסי גולן',
      specialty: 'שחייה',
      bio: 'מאמן שחייה מקצועי עם ניסיון של 12 שנים. מתמחה בשיפור טכניקה ואימוני שחייה לכל הרמות.',
      image: 'https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      icon: <FaSwimmer />
    },
    {
      id: 6,
      name: 'שירה אדרי',
      specialty: 'אימון פונקציונלי',
      bio: 'מאמנת כושר פונקציונלי עם התמחות בשיפור יכולות יומיומיות ושיקום. בעלת תעודות הסמכה בינלאומיות.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      icon: <FaHeartbeat />
    }
  ];

  const [hoveredTrainer, setHoveredTrainer] = useState<number | null>(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="trainers-section" dir="rtl" className="py-16 px-4 md:px-8 bg-gradient-to-br from-white to-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            <span className="relative inline-block">
              הצוות המקצועי שלנו
              <span className="absolute bottom-0 right-0 w-full h-1 bg-[#45B7D1]"></span>
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            הכירו את המאמנים המובילים של מכון כושר גמא, שיעזרו לכם להשיג את המטרות שלכם
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {trainers.map((trainer) => (
            <motion.div
              key={trainer.id}
              className="relative"
              variants={itemVariants}
              onMouseEnter={() => setHoveredTrainer(trainer.id)}
              onMouseLeave={() => setHoveredTrainer(null)}
              onFocus={() => setHoveredTrainer(trainer.id)}
              onBlur={() => setHoveredTrainer(null)}
            >
              <div 
                className="h-full rounded-2xl overflow-hidden bg-white shadow-[5px_5px_15px_rgba(0,0,0,0.1),-5px_-5px_15px_rgba(255,255,255,0.8)]"
                style={{
                  transition: 'all 0.3s ease',
                  transform: hoveredTrainer === trainer.id ? 'translateY(-5px)' : 'translateY(0)'
                }}
              >
                <div className="p-6 h-full flex flex-col">
                  <div className="flex flex-col items-center mb-4">
                    <div className="relative mb-4 w-40 h-40 rounded-full overflow-hidden border-4 border-[#FFEEAD] shadow-lg">
                      <img 
                        src={trainer.image} 
                        alt={`${trainer.name} - ${trainer.specialty}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-[#45B7D1] bg-opacity-0 transition-all duration-300 hover:bg-opacity-20"></div>
                    </div>
                    
                    <div className="absolute top-36 bg-[#45B7D1] text-white p-3 rounded-full shadow-lg">
                      <span className="text-xl">{trainer.icon}</span>
                    </div>
                  </div>
                  
                  <div className="text-center flex-grow">
                    <h3 className="text-2xl font-bold text-gray-800 mb-1">{trainer.name}</h3>
                    <p className="text-[#45B7D1] font-semibold mb-3">{trainer.specialty}</p>
                    
                    <div 
                      className={`
                        mt-4 p-4 rounded-xl backdrop-blur-sm bg-white/70 border border-white/20
                        transition-all duration-300 overflow-hidden
                        ${hoveredTrainer === trainer.id ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}
                      `}
                      style={{
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)'
                      }}
                    >
                      <p className="text-gray-700 text-right">{trainer.bio}</p>
                    </div>
                  </div>
                  
                  <motion.button
                    className="mt-4 w-full py-3 px-6 rounded-xl text-white font-medium bg-[#45B7D1] hover:bg-[#3da7c0] transition-all duration-300"
                    whileTap={{ scale: 0.97 }}
                    style={{
                      boxShadow: '3px 3px 10px rgba(0,0,0,0.1), -3px -3px 10px rgba(255,255,255,0.8)'
                    }}
                  >
                    קביעת אימון
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrainersSection;