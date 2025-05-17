"use client";

import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function PageHeader() {
  return (
    <nav className="relative z-10 flex justify-between items-center px-6 py-4">
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Aqua_Stark-removebg-preview-ubKSrqYo7jzOH5qXqxEw4CyRHXIjfq.png"
        alt="Aqua Stark Logo"
        width={180}
        height={80}
        className="drop-shadow-lg"
      />
      <div className="flex items-center pr-2">
        <Link href="/">
          <Button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 text-lg rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200 border-2 border-purple-400 border-b-4 border-r-4">
            <ArrowLeft className="mr-2 h-6 w-6" />
            Back
          </Button>
        </Link>
      </div>
    </nav>
  );
}
