"use client"

import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { motion } from "framer-motion"

interface CalendarPanelProps {
  onClose: () => void
}

export function CalendarPanel({ onClose }: CalendarPanelProps) {
  const [currentDate, setCurrentDate] = useState(new Date())

  const hours = ["7 AM", "8 AM", "9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"]

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const goToPreviousDay = () => {
    const newDate = new Date(currentDate)
    newDate.setDate(newDate.getDate() - 1)
    setCurrentDate(newDate)
  }

  const goToNextDay = () => {
    const newDate = new Date(currentDate)
    newDate.setDate(newDate.getDate() + 1)
    setCurrentDate(newDate)
  }

  const goToToday = () => {
    setCurrentDate(new Date())
  }

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed md:relative inset-0 md:inset-auto md:w-96 border-l bg-white flex flex-col z-30"
    >
      <div className="flex items-center justify-between px-4 py-3 border-b bg-gray-100 md:bg-white">
        <h2 className="font-semibold">Calendar</h2>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-4 w-4" />
        </Button>
      </div>

      <div className="px-4 py-3 border-b space-y-3">
        <div className="flex items-center justify-between gap-2">
          <Button variant="ghost" size="icon" onClick={goToPreviousDay}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <div className="flex-1 text-center">
            <p className="text-sm font-medium">{formatDate(currentDate)}</p>
          </div>
          <Button variant="ghost" size="icon" onClick={goToNextDay}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <Button variant="outline" className="w-full bg-transparent" onClick={goToToday}>
          Today
        </Button>
      </div>

      <div className="flex-1 overflow-y-auto">
        {hours.map((hour, index) => (
          <motion.div
            key={hour}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.03 }}
            className="px-4 py-4 md:py-3 border-b text-sm text-gray-600"
          >
            {hour}
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
