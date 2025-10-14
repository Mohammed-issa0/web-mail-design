"use client"

import { X, CheckCircle2, MoreVertical } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { useState } from "react"

interface TasksPanelProps {
  onClose: () => void
}

export function TasksPanel({ onClose }: TasksPanelProps) {
  const [tasks] = useState([
    { id: 1, title: "Design Homepage", date: "Thu, Nov 23", completed: false },
    { id: 2, title: "Design Homepage", date: "Thu, Nov 23", completed: false },
    { id: 3, title: "Design Homepage", date: "Thu, Nov 23", completed: true },
  ])

  const hasActiveTasks = tasks.some((t) => !t.completed)

  return (
    <div className="fixed md:relative inset-0 md:inset-auto md:w-96 border-l bg-white flex flex-col z-30">
      <div className="flex items-center justify-between px-4 py-3 border-b bg-gray-100 md:bg-white">
        <h2 className="font-semibold">Tasks</h2>
        <Button variant="ghost" size="icon" onClick={onClose} className="md:flex">
          <X className="h-4 w-4" />
        </Button>
      </div>

      <div className="px-4 py-3 border-b">
        <Button variant="ghost" className="w-full justify-start gap-2">
          <CheckCircle2 className="h-4 w-4" />
          Add a task
        </Button>
      </div>

      {hasActiveTasks ? (
        <div className="flex-1 overflow-y-auto">
          {tasks.map((task) => (
            <div key={task.id} className="flex items-start gap-3 px-4 py-4 border-b hover:bg-gray-50">
              <Checkbox checked={task.completed} className={task.completed ? "border-[#1a0b3e] bg-[#1a0b3e]" : ""} />
              <div className="flex-1 min-w-0">
                <p className={task.completed ? "line-through text-gray-500" : "font-medium"}>{task.title}</p>
                <p className="text-xs text-gray-500 mt-1">{task.date}</p>
              </div>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex-1 flex flex-col items-center justify-center p-8">
          <div className="w-48 h-48 mb-4 flex items-center justify-center">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <rect x="60" y="80" width="80" height="100" fill="#e5e7eb" />
              <circle cx="100" cy="100" r="30" fill="#1a0b3e" />
              <text x="100" y="110" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">
                DONE
              </text>
              <rect x="40" y="120" width="40" height="60" fill="#d1d5db" />
              <circle cx="60" cy="140" r="8" fill="#fbbf24" />
              <rect x="20" y="170" width="20" height="10" fill="#10b981" />
            </svg>
          </div>
          <h3 className="font-semibold text-lg mb-1">All tasks complete</h3>
          <p className="text-sm text-gray-600">Nice Work!</p>
        </div>
      )}
    </div>
  )
}
