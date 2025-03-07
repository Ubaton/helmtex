"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import backgroundImage from "@/public/assets/background4.jpg"
import { Button } from '../ui/button';
import { ChevronUp } from 'lucide-react';

const WelcomePage = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Toggle visibility of the scroll-to-top button based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Enhanced smooth scroll-to-top functionality
  const scrollToTop = () => {
    // Get the current scroll position
    const currentPosition = window.pageYOffset;
    
    // If browser supports smooth scrolling, use it
    if ('scrollBehavior' in document.documentElement.style) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      // Fallback for browsers that don't support smooth scrolling
      // Implement custom smooth scrolling with JavaScript
      const duration = 500; // ms
      const startTime = performance.now();
      
      const animateScroll = (currentTime) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        
        // Easing function for a smoother feel (ease-out)
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        
        window.scrollTo(0, currentPosition * (1 - easeProgress));
        
        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        }
      };
      
      requestAnimationFrame(animateScroll);
    }
  };
  
  return (
    <div className="relative h-screen bg-cover">
      <Image
        src={backgroundImage}
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority={true}
        className='bg-center sm:bg-right md:bg-center lg-bg-cover'
      />
      <div className="absolute inset-0 bg-black opacity-65" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 sm:px-8">
        <h1 className="text-md sm:text-lg md:text-2xl font-light uppercase tracking-wider animate-fade-in-up">Welcome to</h1>
        <h2 className="text-5xl sm:text-5xl md:text-7xl font-bold my-2 sm:my-4 animate-fade-in-up-delayed">Helm Textile Mills</h2>
        <h3 className="text-lg sm:text-xl md:text-3xl font-light tracking-wide animate-fade-in-up-delay-more">SA&apos;s Leading Textile Company</h3>
      </div>
      
      {/* Scroll-to-Top Button with Tailwind Animations */}
      <div className={`fixed bottom-8 right-8 z-50 transition-all duration-500 ease-in-out transform ${
        isVisible 
          ? 'opacity-100 translate-y-0 scale-100' 
          : 'opacity-0 translate-y-10 scale-75 pointer-events-none'
      }`}>
        <Button
          onClick={scrollToTop}
          className="h-10 w-10 rounded-full bg-blue-500 shadow-lg hover:bg-blue-600 transition-all duration-300 hover:shadow-xl group"
          aria-label="Scroll to top"
        >
          <ChevronUp className="animate-bounce-subtle transform transition-transform duration-300 group-hover:-translate-y-1" />
        </Button>
      </div>
    </div>
  )
};

export default WelcomePage;