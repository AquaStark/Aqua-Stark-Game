"use client";

import { useCallback } from "react";

interface UseProfileHeaderProps {
  currency: number;
}

export function useProfileHeader({ currency }: UseProfileHeaderProps) {
  const formattedCurrency = useCallback(() => {
    return currency.toLocaleString();
  }, [currency]);

  return {
    formattedCurrency: formattedCurrency(),
  };
}
