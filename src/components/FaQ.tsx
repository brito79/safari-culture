"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import Link from 'next/link';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface FAQSection {
  id: string;
  title: string;
  number: string;
  items: FAQItem[];
}

// Placeholder data - you'll provide the actual questions later
const faqSections: FAQSection[] = [
  {
    id: 'general',
    title: 'General',
    number: '01',
    items: [
      {
        id: 'general-1',
        question: 'What currency is used in Namibia?',
        answer: 'The currency in Namibia is the Namibian Dollar (NAD) which is fixed to, and therefore equivalent to, the South African Rand (ZAR). The South African Rand is widely accepted throughout the country.'
      },
      {
        id: 'general-2',
        question: 'What time zone is Namibia in?',
        answer: 'Namibia shares the same time as all of Southern Africa, which is two hours ahead of Greenwich Mean Time – (GMT) + 2 hours, in the Central Africa Time Zone (CAT).'
      },
      {
        id: 'general-3',
        question: 'What is the capital of Namibia?',
        answer: 'Windhoek – it serves as the gateway for international flights and is typically the first departure point for your Wilderness flights to your Namibian safari destination.'
      },
      {
        id: 'general-4',
        question: 'Can I use my credit cards in Namibia?',
        answer: 'MasterCard and Visa (both with raised credit card numbers so that an imprint may be taken) are generally accepted throughout Namibia, including at Wilderness camps. Holders of other cards are advised to clarify with a commercial bank whether their card is acceptable in Namibia. Unfortunately, American Express and Diners Club specifically are no longer accepted in Namibia and, therefore, not at our camps either.'
      },
      {
        id: 'general-5',
        question: 'What should I pack for a safari in Namibia?',
        answer: 'We advise guests to wear comfortable and casual clothing while on safari. Neutral colours are best for game viewing. You may also want to pack swimming gear and clothing suitable for adventuring. Game drives usually take place in the early morning and late afternoon, which can be cold, especially in winter. Temperatures usually warm up during the day, so it is best to dress in layers. There may be restrictions on luggage weight or size for your journey – so please check the details with your Travel Designer.'
      },
      {
        id: 'general-6',
        question: 'What power sockets do they use in Namibia?',
        answer: 'While some camps and lodges are linked to the national power grid, most of ours are situated in pristine and remote wilderness areas where we need to generate our own electricity. We do this by making use of solar panels and/or generators, which charge a bank of batteries and provide electricity to the camp/lodge through an inverter system. We use 220V-powered plug points (3-prong round/2-prong round) for lighting, fans, the charging of batteries and sleep apnoea machines.'
      },
      {
        id: 'general-7',
        question: 'What is Namibia known for?',
        answer: 'Namibia is world famous for having some of the highest dunes in the world, at Sossusvlei, located in one of the oldest deserts in the world, and for the immense Etosha National Park, one of the world\'s great conservation areas. Namibia also offers some of the world\'s best wildlife viewing, from desert-adapted elephants, lions and giraffes, to other fascinating wildlife, plants and natural wonders. Namibia also has a diverse array of cultures, including the semi-nomadic Himba people who you can authentically engage with during a visit to Wilderness Serra Cafema.'
      },
      {
        id: 'general-8',
        question: 'Where is Namibia located?',
        answer: 'Namibia is located in the south-western reaches of Africa, with South Africa to the south and east, Botswana to the east, Angola and Zambia to the north, and the Atlantic Ocean to the west.'
      },
      {
        id: 'general-9',
        question: 'When is a good time to visit Namibia?',
        answer: 'Namibia is a great year-round destination. Some of the best months to visit are between June and October. This is the dry season when the temperature is not too hot or too cold.'
      }
    ]
  },
  {
    id: 'visas',
    title: 'Visas',
    number: '02',
    items: [
      {
        id: 'visas-1',
        question: 'Do I need a visa to travel to Namibia?',
        answer: 'Namibia currently offers visa-free travel to all countries for stays up to 90 days. Your passport must be valid for at least six months beyond the date you expect to leave Namibia.'
      }
    ]
  },
  {
    id: 'vaccinations',
    title: 'Vaccinations',
    number: '03',
    items: [
      {
        id: 'vaccinations-1',
        question: 'What is the COVID protocol for travelling to Namibia?',
        answer: 'We address all concerns surrounding COVID in line with the latest recommendations from the World Health Organization and other leading authorities. Please speak to your Travel Designer for the latest travel advisory updates, to ensure that you are prepared for all COVID travel requirements in Namibia before your departure.'
      },
      {
        id: 'vaccinations-2',
        question: 'Is Namibia malaria free?',
        answer: 'No. Malaria is a risk in some parts of Namibia. Please chat to your Travel Designer or travel clinic before your departure, to make sure you have enough time to take any prescription medicine needed to prevent malaria.'
      },
      {
        id: 'vaccinations-3',
        question: 'Do I need a yellow fever vaccination to visit Namibia?',
        answer: 'If you are travelling to Namibia from areas prone to yellow fever, you must have a valid yellow fever vaccination certificate. We advise our guests to also have an updated TPD (tetanus, polio, diphtheria) vaccine and a hepatitis A vaccine. Please make sure to check with your travel clinic and Travel Designer before your holiday.'
      }
    ]
  }
];

export default function FAQ() {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleSection = (sectionId: string) => {
    setOpenSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const toggleItem = (itemId: string) => {
    setOpenItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const sectionVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 20,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      height: 0,
      y: -10
    },
    visible: {
      opacity: 1,
      height: "auto",
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 30,
        duration: 0.4
      }
    },
    exit: {
      opacity: 0,
      height: 0,
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeOut" as const
      }
    }
  };

  const answerVariants = {
    hidden: { 
      opacity: 0, 
      height: 0,
      y: -20 
    },
    visible: {
      opacity: 1,
      height: "auto",
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 200,
        damping: 25,
        duration: 0.5
      }
    },
    exit: {
      opacity: 0,
      height: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-neutral-50 to-neutral-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" as const }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="safari-heading text-3xl sm:text-4xl lg:text-5xl text-neutral-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="safari-body text-lg text-stone-600 max-w-2xl mx-auto">
            Find answers to common questions about your Namibian safari adventure. 
            From travel requirements to health preparations, we have got you covered.
          </p>
        </motion.div>

        {/* FAQ Sections */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {faqSections.map((section) => (
            <motion.div
              key={section.id}
              variants={sectionVariants}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-stone-200/50"
            >
              {/* Section Header */}
              <motion.button
                onClick={() => toggleSection(section.id)}
                className="w-full p-6 sm:p-8 flex items-center justify-between text-left hover:bg-stone-50/50 transition-colors duration-300 group"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <div className="flex items-center space-x-4 sm:space-x-6">
                  <motion.div
                    className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-sunset-400 to-sunset-600 rounded-xl flex items-center justify-center"
                    whileHover={{ rotate: 5, scale: 1.05 }}
                    transition={{ type: "spring" as const, stiffness: 400, damping: 17 }}
                  >
                    <span className="safari-accent text-white text-lg sm:text-xl font-bold">
                      {section.number}
                    </span>
                  </motion.div>
                  <h3 className="safari-heading text-2xl sm:text-3xl text-neutral-900 group-hover:text-sunset-600 transition-colors duration-300">
                    {section.title}
                  </h3>
                </div>
                
                <motion.div
                  animate={{ 
                    rotate: openSections[section.id] ? 180 : 0,
                    scale: openSections[section.id] ? 1.1 : 1
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" as const }}
                  className="flex-shrink-0 w-10 h-10 bg-stone-100 rounded-full flex items-center justify-center group-hover:bg-sunset-100 transition-colors duration-300"
                >
                  {openSections[section.id] ? (
                    <Minus className="w-5 h-5 text-stone-600 group-hover:text-sunset-600" />
                  ) : (
                    <Plus className="w-5 h-5 text-stone-600 group-hover:text-sunset-600" />
                  )}
                </motion.div>
              </motion.button>

              {/* Section Content */}
              <AnimatePresence mode="wait">
                {openSections[section.id] && (
                  <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="border-t border-stone-200/50"
                  >
                    <div className="p-6 sm:p-8 pt-6 space-y-4">
                      {section.items.map((item, index) => (
                        <motion.div
                          key={item.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ 
                            delay: index * 0.1,
                            duration: 0.4,
                            ease: "easeOut" as const
                          }}
                          className="bg-stone-50/50 rounded-xl overflow-hidden border border-stone-200/30"
                        >
                          {/* Question */}
                          <motion.button
                            onClick={() => toggleItem(item.id)}
                            className="w-full p-4 sm:p-6 flex items-center justify-between text-left hover:bg-stone-100/50 transition-colors duration-200 group"
                            whileHover={{ x: 2 }}
                            transition={{ type: "spring" as const, stiffness: 400, damping: 17 }}
                          >
                            <h4 className="safari-body text-base sm:text-lg font-semibold text-neutral-800 group-hover:text-sunset-700 transition-colors duration-200 pr-4">
                              {item.question}
                            </h4>
                            <motion.div
                              animate={{ 
                                rotate: openItems[item.id] ? 45 : 0,
                                scale: openItems[item.id] ? 0.9 : 1
                              }}
                              transition={{ duration: 0.2, ease: "easeOut" as const }}
                              className="flex-shrink-0 w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow duration-200"
                            >
                              <Plus className="w-4 h-4 text-stone-500 group-hover:text-sunset-600" />
                            </motion.div>
                          </motion.button>

                          {/* Answer */}
                          <AnimatePresence mode="wait">
                            {openItems[item.id] && (
                              <motion.div
                                variants={answerVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="border-t border-stone-200/30"
                              >
                                <div className="p-4 sm:p-6 pt-4">
                                  <p className="safari-body text-stone-700 leading-relaxed">
                                    {item.answer}
                                  </p>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" as const }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-sunset-500/10 to-sunset-600/10 rounded-2xl p-8 border border-sunset-200/30">
            <h3 className="safari-heading text-2xl text-neutral-900 mb-4">
              Still have questions?
            </h3>
            <p className="safari-body text-stone-600 mb-6">
              Our travel specialists are here to help you plan your perfect Namibian adventure.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring" as const, stiffness: 400, damping: 17 }}
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-sunset-500 to-sunset-600 text-neutral-700 font-medium rounded-xl hover:from-sunset-600 hover:to-sunset-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              <Link href="/contact">
                Contact Our Experts
              </Link>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
