'use client'
import React, { useState, useEffect, useRef } from 'react'

const Features = (props) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  // Extract number from title (first numeric chunk) e.g., "6.5K+" -> 6.5, "24/7" -> 24
  const extractNumber = (str) => {
    const match = str.match(/\d+(?:\.\d+)?/);
    return match ? parseFloat(match[0]) : 0;
  };

  // Extract suffix as the rest of the string after the first number
  // e.g., "6.5K+" -> "K+", "24/7" -> "/7", "100" -> ""
  const extractSuffix = (str) => {
    const match = str.match(/\d+(?:\.\d+)?/);
    if (!match) return '';
    const start = str.indexOf(match[0]);
    return str.slice(start + match[0].length);
  };

  const targetNumber = extractNumber(props.title);
  const suffix = extractSuffix(props.title);

  // Format number: show decimals only for K+ suffixes, otherwise show whole numbers
  const formatNumber = (num) => {
    if (suffix.toLowerCase().includes('k') || suffix.toLowerCase().includes('m')) {
      return num.toFixed(1); // Show one decimal for K+ or M+
    }
    return Math.round(num).toString(); // Show whole number for regular numbers
  };

  // Intersection Observer to detect when element is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 } // Trigger when 30% of element is visible
    );

    const currentElement = elementRef.current;

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  // Animate counter when visible
  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = targetNumber / steps;
    const stepDuration = duration / steps;

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      if (currentStep >= steps) {
        setCount(targetNumber);
        clearInterval(timer);
      } else {
        setCount(prev => Math.min(prev + increment, targetNumber));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible, targetNumber]);

  return (
   <div ref={elementRef} className='flex items-center justify-center p-4 rounded-xl bg-gray-100 shadow-md text-center gap-2 flex-col w-full h-full min-w-0'>
    <h1 className='text-xl sm:text-3xl font-extrabold transition-transform'>
      {formatNumber(count)}{suffix}
    </h1>
  <p className='text-sm text-gray-500 break-all sm:break-normal'>{props.description}</p>

   </div>
  )
}

export default Features