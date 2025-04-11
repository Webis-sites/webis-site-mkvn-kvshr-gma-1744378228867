'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaDumbbell, FaUsers, FaHeartbeat, FaWeight, FaAppleAlt, FaClipboardCheck } from 'react-icons/fa';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  imageUrl: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, imageUrl }) => {
  return (
    <motion.div
      className="relative overflow-hidden rounded-2xl h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <div className="absolute inset-0 z-0">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30 backdrop-blur-sm"></div>
      </div>
      
      <div className="relative z-10 h-full p-6 flex flex-col bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
        <div className="flex justify-end mb-4">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-[#45B7D1] to-[#FFEEAD] text-white shadow-[0_4px_10px_rgba(69,183,209,0.3)]">
            <span className="text-3xl">{icon}</span>
          </div>
        </div>
        
        <h3 className="text-xl font-bold mb-2 text-right text-white">{title}</h3>
        <p className="text-right text-white/80 flex-grow">{description}</p>
        
        <motion.div 
          className="mt-4 text-left"
          whileHover={{ x: -5 }}
          transition={{ duration: 0.2 }}
        >
          <button className="flex items-center gap-2 text-[#FFEEAD] font-medium">
            <span>קרא עוד</span>
            <span className="transform rotate-180">&#8594;</span>
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

const ServicesSection: React.FC = () => {
  const [services] = useState<ServiceCardProps[]>([
    {
      icon: <FaDumbbell />,
      title: "אימון אישי",
      description: "אימונים אישיים מותאמים לצרכים שלך עם מאמנים מוסמכים ומנוסים שיעזרו לך להשיג את המטרות שלך.",
      imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      icon: <FaUsers />,
      title: "אימונים קבוצתיים",
      description: "מגוון רחב של שיעורים קבוצתיים כמו יוגה, פילאטיס, זומבה ועוד, בהדרכת מדריכים מקצועיים.",
      imageUrl: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      icon: <FaHeartbeat />,
      title: "אימוני קרדיו",
      description: "ציוד קרדיו מתקדם לשיפור סיבולת לב-ריאה, שריפת קלוריות ושיפור הבריאות הכללית.",
      imageUrl: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      icon: <FaWeight />,
      title: "אימוני כוח",
      description: "אזור משקולות חופשיות ומכונות כוח מתקדמות לבניית שרירים, חיזוק וחיטוב הגוף.",
      imageUrl: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      icon: <FaAppleAlt />,
      title: "ייעוץ תזונה",
      description: "ייעוץ תזונתי אישי עם דיאטנים מוסמכים שיעזרו לך לבנות תוכנית תזונה מותאמת אישית.",
      imageUrl: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      icon: <FaClipboardCheck />,
      title: "הערכת כושר",
      description: "בדיקות כושר מקיפות להערכת המצב הנוכחי שלך וקביעת יעדים ריאליסטיים להתקדמות.",
      imageUrl: "https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    }
  ]);

  return (
    <section id="services" dir="rtl" className="py-16 px-4 md:px-8 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-white"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            השירותים שלנו
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-[#45B7D1] to-[#FFEEAD] mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          ></motion.div>
          <motion.p 
            className="text-lg text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            במכון כושר גמא אנו מציעים מגוון רחב של שירותים מקצועיים כדי לעזור לך להשיג את יעדי הכושר והבריאות שלך
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              imageUrl={service.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;