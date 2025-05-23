"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  backTo: string;
  backText?: string;
  rightContent?: React.ReactNode;
  className?: string;
}

export function PageHeader({
  title,
  backTo,
  backText = "Back",
  rightContent,
  className,
}: PageHeaderProps) {
  return (
    <nav className={cn(
      "relative z-10 p-4 bg-blue-700 border-b-2 border-blue-400/50",
      className
    )}>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mx-auto font-sans max-w-7xl">
        <div className="flex flex-col sm:flex-row sm:items-center">
          <Link href={backTo} className="flex items-center mb-2 sm:mb-0">
            <Button
              variant="ghost"
              className="flex items-center mr-0 sm:mr-2 text-xs text-white rounded-full hover:bg-blue-500/50 px-3 py-1 sm:px-4 sm:py-2"
            >
              <ArrowLeft className="mr-1 sm:mr-2" width={16} />
              <span className="text-xs">{backText}</span>
            </Button>
          </Link>
          <h3 className="text-base sm:text-lg font-semibold text-white">{title}</h3>
        </div>

        {rightContent && (
          <div className="flex items-center gap-2 mt-2 sm:mt-0">{rightContent}</div>
        )}
      </div>
    </nav>
  );
}
