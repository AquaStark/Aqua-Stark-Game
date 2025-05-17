"use client";

import type React from "react";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePagination } from "@/components/storage/hooks/use-pagination";

interface PageButtonProps {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}

function PageButton({ children, active, onClick }: PageButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "w-8 h-8 rounded-full font-bold",
        active
          ? "bg-blue-400 text-white"
          : "bg-blue-700 text-white hover:bg-blue-600"
      )}
    >
      {children}
    </button>
  );
}

interface PaginationControlsProps<T> {
  items: T[];
  itemsPerPage?: number;
  onPageChange?: (items: T[]) => void;
}

export function PaginationControls<T>({
  items,
  itemsPerPage = 10,
  onPageChange,
}: PaginationControlsProps<T>) {
  const {
    currentPage,
    pageNumbers,
    goToPage,
    goToNextPage,
    goToPreviousPage,
    hasItems,
    canGoNext,
    canGoPrevious,
    currentItems,
  } = usePagination({ items, itemsPerPage });

  // Call onPageChange when current items change
  if (onPageChange && currentItems) {
    onPageChange(currentItems);
  }

  if (!hasItems) return null;

  return (
    <div className="flex justify-between mt-6">
      <button
        onClick={goToPreviousPage}
        disabled={!canGoPrevious}
        className={cn(
          "p-2 text-white bg-orange-500 border-2 border-orange-400 rounded-lg shadow-lg",
          canGoPrevious
            ? "hover:bg-orange-600"
            : "opacity-50 cursor-not-allowed"
        )}
      >
        <ChevronLeft size={24} />
      </button>

      <div className="flex items-center gap-2">
        {pageNumbers.map((pageNumber) => (
          <PageButton
            key={pageNumber}
            active={pageNumber === currentPage}
            onClick={() => goToPage(pageNumber)}
          >
            {pageNumber}
          </PageButton>
        ))}
      </div>

      <button
        onClick={goToNextPage}
        disabled={!canGoNext}
        className={cn(
          "p-2 text-white bg-orange-500 border-2 border-orange-400 rounded-lg shadow-lg",
          canGoNext ? "hover:bg-orange-600" : "opacity-50 cursor-not-allowed"
        )}
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}
