"use client"

import { X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CalendarPanelProps {
  onClose: () => void
}

export function CalendarPanel({ onClose }: CalendarPanelProps) {
  const hours = ["7 AM", "8 AM", "9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"]

  return (
    <div className="fixed md:relative inset-0 md:inset-auto md:w-96 border-l bg-white flex flex-col z-30">
      <div className="flex items-center justify-between px-4 py-3 border-b bg-gray-100 md:bg-white">
        <h2 className="font-semibold">Calendar</h2>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-4 w-4" />
        </Button>
      </div>

      <div className="px-4 py-3 border-b">
        <Button variant="outline" className="w-full justify-between bg-transparent">
          Today
          <ChevronDown className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex-1 overflow-y-auto">
        {hours.map((hour) => (
          <div key={hour} className="px-4 py-4 md:py-3 border-b text-sm text-gray-600">
            {hour}
          </div>
        ))}
      </div>
    </div>
  )
}
