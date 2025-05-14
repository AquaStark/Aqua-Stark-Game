import Link from "next/link"
import { cn } from "@/lib/utils"

interface FooterProps {
  className?: string
}

export function Footer({ className }: FooterProps = {}) {
  return (
    <footer
      className={cn(
        "relative z-10 bg-blue-800 py-6 border-t-2 border-blue-400/50",
        className
      )}
    >
      <div className="container mx-auto px-4 text-center">
        <p className="text-white/80 mb-2">
          © 2025 Aqua Stark - All rights reserved
        </p>
        <div className="flex justify-center gap-4 mt-4">
          <Link href="#" className="text-white hover:text-blue-200 transition-colors">
            Policy and Privacy
          </Link>
          <Link href="#" className="text-white hover:text-blue-200 transition-colors">
            Terms of Service
          </Link>
          <Link href="#" className="text-white hover:text-blue-200 transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  )
}
