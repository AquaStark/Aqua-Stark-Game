"use client"

import { Plus } from "lucide-react"

interface CreateAquariumButtonProps {
    onClickAction: () => void
}

export function CreateAquariumButton({ onClickAction }: CreateAquariumButtonProps) {
  return (
    <div className="flex justify-center mt-8">
      <button
        onClick={onClickAction}
        className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-full flex items-center transition-all transform hover:scale-105"
      >
        <Plus className="h-5 w-5 mr-2" />
        Create New Aquarium Space
      </button>
    </div>
  )
}