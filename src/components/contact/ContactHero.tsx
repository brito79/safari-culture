"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const ContactHero = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section ref={ref} className="relative h-screen overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/hero-home/1741347488261_Final-Hoanib-11.jpg`}
                    alt="Contact us about your Namibian wilderness adventure"
                    fill
                    className="object-cover"
                    priority
                />
            </div>
            
            {/* Overlay for better text visibility */}
            <div className="absolute inset-0 bg-black/50" />
            
            {/* Content */}
            <div className="relative z-10 h-full flex items-center">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full">
                    <div className="max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                        >
                            <motion.h1 
                                className="text-5xl sm:text-7xl lg:text-8xl font-light text-white mb-6 leading-tight"
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                            >
                                Plan Your
                                <span className="block text-white">Journey</span>
                            </motion.h1>
                        </motion.div>
                        
                        <motion.p 
                            className="text-xl sm:text-2xl text-white tracking-wide mb-8 font-light"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                        >
                            Let&apos;s Create Your Namibian Adventure
                        </motion.p>
                        
                        <motion.p 
                            className="text-xl text-white max-w-3xl leading-relaxed mb-10"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                        >
                            Our travel designers are ready to craft your perfect wilderness experience. 
                            From single camp stays to multi-camp journeys, we&apos;ll help you discover 
                            the magic of Namibia&apos;s pristine landscapes.
                        </motion.p>

                        <motion.div
                            className="flex flex-col sm:flex-row gap-4"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
                        >
                            <a
                                href="#contact-form"
                                className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-medium transition-colors duration-300 shadow-lg text-center"
                            >
                                Start Planning
                            </a>
                            <a 
                                href="#contact-info"
                                className="px-8 py-4 border-2 border-white/80 text-white hover:bg-white/10 rounded-full font-medium transition-colors duration-300 backdrop-blur-sm text-center"
                            >
                                Contact Information
                            </a>
                        </motion.div>
                    </div>
                </div>
            </div>
            
            {/* Scroll Indicator */}
            <motion.div 
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 1, delay: 1, ease: "easeOut" }}
            >
                <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce" />
                </div>
            </motion.div>
        </section>
    );
};

export default ContactHero;
