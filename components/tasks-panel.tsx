"use client"

import { X, CheckCircle2, MoreVertical } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { useState, useEffect } from "react"
import { AddTaskDialog } from "@/components/add-task-dialog"
import { motion, AnimatePresence } from "framer-motion"
import type { Task } from "@/lib/types"

interface TasksPanelProps {
  onClose: () => void
}

export function TasksPanel({ onClose }: TasksPanelProps) {
  const [tasks, setTasks] = useState<Task[]>([])
  const [showAddDialog, setShowAddDialog] = useState(false)

  useEffect(() => {
    const savedTasks = localStorage.getItem("mail-app-tasks")
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks))
    }
  }, [])

  useEffect(() => {
    if (tasks.length > 0 || localStorage.getItem("mail-app-tasks")) {
      localStorage.setItem("mail-app-tasks", JSON.stringify(tasks))
    }
  }, [tasks])

  const handleAddTask = (title: string, date: string) => {
    const newTask: Task = {
      id: Date.now().toString(),
      title,
      date: date || new Date().toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" }),
      completed: false,
      createdAt: Date.now(),
    }
    setTasks([...tasks, newTask])
  }

  const handleToggleTask = (taskId: string) => {
    setTasks(tasks.map((task) => (task.id === taskId ? { ...task, completed: !task.completed } : task)))
  }

  const handleDeleteTask = (taskId: string) => {
    setTasks(tasks.filter((task) => task.id !== taskId))
  }

  const hasActiveTasks = tasks.some((t) => !t.completed)

  return (
    <>
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed md:relative inset-0 md:inset-auto md:w-96 border-l bg-white flex flex-col z-30"
      >
        <div className="flex items-center justify-between px-4 py-3 border-b bg-gray-100 md:bg-white">
          <h2 className="font-semibold">Tasks</h2>
          <Button variant="ghost" size="icon" onClick={onClose} className="md:flex">
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div className="px-4 py-3 border-b">
          <Button variant="ghost" className="w-full justify-start gap-2" onClick={() => setShowAddDialog(true)}>
            <CheckCircle2 className="h-4 w-4" />
            Add a task
          </Button>
        </div>

        {hasActiveTasks ? (
          <div className="flex-1 overflow-y-auto">
            <AnimatePresence>
              {tasks.map((task) => (
                <motion.div
                  key={task.id}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-start gap-3 px-4 py-4 border-b hover:bg-gray-50"
                >
                  <Checkbox
                    checked={task.completed}
                    onCheckedChange={() => handleToggleTask(task.id)}
                    className={task.completed ? "border-[#1a0b3e] bg-[#1a0b3e]" : ""}
                  />
                  <div className="flex-1 min-w-0">
                    <p className={task.completed ? "line-through text-gray-500" : "font-medium"}>{task.title}</p>
                    <p className="text-xs text-gray-500 mt-1">{task.date}</p>
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => handleDeleteTask(task.id)}>
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="flex-1 flex flex-col items-center justify-center p-8"
          >
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
          </motion.div>
        )}
      </motion.div>

      <AddTaskDialog isOpen={showAddDialog} onClose={() => setShowAddDialog(false)} onAdd={handleAddTask} />
    </>
  )
}
