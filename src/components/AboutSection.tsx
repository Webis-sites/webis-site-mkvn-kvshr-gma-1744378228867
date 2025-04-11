'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaDumbbell, FaUsers, FaAward, FaCalendarCheck } from 'react-icons/fa';

interface StatItem {
  icon: JSX.Element;
  value: string;
  label: string;
}

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats: StatItem[] = [
    {
      icon: <FaCalendarCheck className="text-3xl text-primary mb-2" />,
      value: '15+',
      label: 'שנות ניסיון',
    },
    {
      icon: <FaUsers className="text-3xl text-primary mb-2" />,
      value: '1000+',
      label: 'חברי מועדון',
    },
    {
      icon: <FaDumbbell className="text-3xl text-primary mb-2" />,
      value: '50+',
      label: 'מכשירים מתקדמים',
    },
    {
      icon: <FaAward className="text-3xl text-primary mb-2" />,
      value: '20+',
      label: 'מאמנים מוסמכים',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
      },
    },
  };

  return (
    <section 
      id="about" 
      dir="rtl" 
      className="py-16 md:py-24 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100"
      aria-labelledby="about-heading"
    >
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 
              id="about-heading" 
              className="text-4xl md:text-5xl font-bold mb-4 text-gray-800"
            >
              אודות מכון כושר גמא
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              המקום שבו בריאות וכושר נפגשים עם מקצועיות ואיכות ללא פשרות
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div 
              variants={itemVariants} 
              className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-white rounded-2xl transform -rotate-2 shadow-lg"></div>
              <div className="absolute inset-0 bg-white rounded-2xl transform rotate-2 shadow-lg"></div>
              <div className="absolute inset-0 bg-white rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  alt="מכון כושר גמא - אימון איכותי"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="text-right">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
                הסיפור שלנו
              </h3>
              
              <div className="space-y-4 text-gray-600">
                <p>
                  מכון כושר גמא נוסד לפני למעלה מ-15 שנה מתוך חזון להפוך את עולם הכושר לנגיש, מקצועי ומותאם אישית לכל מתאמן ומתאמנת.
                </p>
                <p>
                  אנו מאמינים שכושר גופני הוא לא רק עניין של מראה חיצוני, אלא דרך חיים שמשפרת את האיכות והבריאות בכל היבט. לכן, הקמנו מרכז כושר המשלב את הציוד המתקדם ביותר עם צוות מאמנים מקצועי ומנוסה.
                </p>
                <p>
                  הערכים המובילים אותנו הם מקצועיות, יחס אישי, חדשנות ומחויבות להצלחת המתאמנים שלנו. אנו מתעדכנים באופן קבוע בשיטות האימון החדשות ביותר ומביאים אותן אליכם.
                </p>
              </div>

              <div className="mt-8">
                <div className="inline-block relative">
                  <button 
                    className="relative px-8 py-3 bg-primary text-white font-medium rounded-lg overflow-hidden group"
                    aria-label="קרא עוד על מכון כושר גמא"
                  >
                    <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-secondary rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
                    <span className="relative">קרא עוד</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div 
            variants={itemVariants}
            className="backdrop-blur-md bg-white/70 rounded-2xl p-8 shadow-lg border border-white/20 mb-16"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-800">
              המשימה שלנו
            </h3>
            <p className="text-center text-gray-600 max-w-4xl mx-auto">
              במכון כושר גמא, המשימה שלנו היא להעניק לכל מתאמן ומתאמנת את הכלים, הידע והתמיכה הדרושים להשגת יעדי הכושר והבריאות שלהם. אנו מחויבים ליצור סביבת אימון מזמינה, מקצועית ומעצימה, שבה כל אחד ואחת יכולים להרגיש בנוח ולהתקדם בקצב שלהם. אנו שואפים להיות יותר מסתם מכון כושר - אנחנו קהילה תומכת המעודדת אורח חיים בריא ופעיל.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl md:text-3xl font-bold mb-10 text-center text-gray-800">
              למה לבחור בנו?
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-6 text-center shadow-[5px_5px_15px_rgba(0,0,0,0.05),-5px_-5px_15px_rgba(255,255,255,0.8)] transition-all duration-300 hover:shadow-[inset_5px_5px_10px_rgba(0,0,0,0.05),inset_-5px_-5px_10px_rgba(255,255,255,0.8)]"
                >
                  <div className="flex justify-center">{stat.icon}</div>
                  <h4 className="text-3xl font-bold text-gray-800 mb-1">{stat.value}</h4>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="mt-20 relative overflow-hidden rounded-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 z-0"></div>
            <div className="relative z-10 backdrop-blur-sm bg-white/40 p-8 md:p-12 rounded-2xl border border-white/30 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
                    הצטרפו למשפחת גמא
                  </h3>
                  <p className="text-gray-700 mb-6">
                    אנו מזמינים אתכם להצטרף למשפחת מכון כושר גמא וליהנות מחוויית אימון ברמה אחרת. צוות המאמנים המקצועי שלנו ישמח ללוות אתכם בדרך להשגת היעדים שלכם.
                  </p>
                  <div className="inline-block relative">
                    <button 
                      className="relative px-8 py-3 bg-primary text-white font-medium rounded-lg overflow-hidden group"
                      aria-label="קבע שיעור ניסיון"
                    >
                      <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-secondary rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
                      <span className="relative">קבע שיעור ניסיון</span>
                    </button>
                  </div>
                </div>
                <div className="relative h-[300px] rounded-xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                    alt="אימון קבוצתי במכון כושר גמא"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;