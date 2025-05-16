"use client";

import { useState, useEffect, useRef } from "react";

interface UseGameStatusBarProps {
  value: number;
  maxValue?: number;
  animated?: boolean;
}

export function useGameStatusBar({
  value,
  maxValue = 100,
  animated = true,
}: UseGameStatusBarProps) {
  const [displayValue, setDisplayValue] = useState(value);
  const [isIncreasing, setIsIncreasing] = useState(false);
  const [isDecreasing, setIsDecreasing] = useState(false);
  const prevValueRef = useRef(value);

  const percentage = Math.min(Math.max(0, (value / maxValue) * 100), 100);

  useEffect(() => {
    if (value !== prevValueRef.current) {
      if (value > prevValueRef.current) {
        setIsIncreasing(true);
        setTimeout(() => setIsIncreasing(false), 1000);
      } else {
        setIsDecreasing(true);
        setTimeout(() => setIsDecreasing(false), 1000);
      }

      if (animated) {
        const diff = value - prevValueRef.current;
        const steps = 20;
        const increment = diff / steps;
        let currentStep = 0;

        const interval = setInterval(() => {
          currentStep++;
          setDisplayValue(prevValueRef.current + increment * currentStep);

          if (currentStep >= steps) {
            clearInterval(interval);
            setDisplayValue(value);
          }
        }, 20);
      } else {
        setDisplayValue(value);
      }

      prevValueRef.current = value;
    }
  }, [value, animated]);

  return {
    displayValue,
    percentage,
    isIncreasing,
    isDecreasing,
  };
}
