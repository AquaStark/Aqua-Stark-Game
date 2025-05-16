"use client";

import { useEffect, useRef } from "react";

interface UseTipsPopupProps {
  show: boolean;
  onClose: () => void;
}

export function useTipsPopup({ show, onClose }: UseTipsPopupProps) {
  const popupRef = useRef<HTMLDivElement>(null);

  // Handle click outside to close the popup
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  // Auto-close the popup after 8 seconds
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 8000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  return {
    popupRef,
  };
}
