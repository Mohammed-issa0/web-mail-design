"use client"

import { useEffect, useRef } from "react"
import { X, Inbox, AlertCircle, Send, Archive, Pin, ChevronDown, Plus, LogOut, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { MailFolder } from "@/lib/types"
import { motion, AnimatePresence } from "framer-motion"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  activeFolder: MailFolder
  onFolderChange: (folder: MailFolder) => void
  onSignOut: () => void
}

export function MobileMenu({ isOpen, onClose, activeFolder, onFolderChange, onSignOut }: MobileMenuProps) {
  const firstFocusable = useRef<HTMLButtonElement | null>(null)

  const folders = [
    { id: "all" as MailFolder, label: "All Mail", icon: BookOpen, count: 16 },
    { id: "inbox" as MailFolder, label: "Inbox", icon: Inbox },
    { id: "spam" as MailFolder, label: "Spam", icon: AlertCircle },
    { id: "sent" as MailFolder, label: "Sent", icon: Send },
    { id: "archive" as MailFolder, label: "Archive", icon: Archive },
    { id: "pinned" as MailFolder, label: "Pinned", icon: Pin },
  ]

  useEffect(() => {
    if (!isOpen) return

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    document.addEventListener("keydown", onKey)

    // Prevent body scroll while menu is open
    const { overflow } = document.body.style
    document.body.style.overflow = "hidden"

    // Focus first item on open
    setTimeout(() => firstFocusable.current?.focus(), 50)

    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = overflow
    }
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="md:hidden fixed inset-0 bg-black/50 z-40"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />

          {/* Drawer */}
          <motion.aside
            role="dialog"
            aria-modal
            aria-label="Mailbox folders"
            className="md:hidden fixed left-0 top-0 bottom-0 w-80 bg-white z-50 flex flex-col shadow-2xl"
            initial={{ x: -320, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -320, opacity: 0 }}
            transition={{ type: "spring", stiffness: 220, damping: 26 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.05}
            onDragEnd={(_, info) => {
              if (info.offset.x < -80) onClose()
            }}
          >
            {/* Header */}
            <div className="p-4 border-b">
              <div className="flex items-center justify-between gap-2">
                <select
                  className="flex-1 px-3 py-2 border rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#1a0b3e]/30"
                  defaultValue="Example@gmail.com"
                >
                  <option>Example@gmail.com</option>
                </select>
                <Button variant="ghost" size="icon" onClick={onClose} className="ml-1" aria-label="Close menu">
                  <X className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Folders */}
            <div className="flex-1 overflow-y-auto p-2">
              {folders.map((folder, idx) => {
                const isActive = activeFolder === folder.id
                const Icon = folder.icon

                return (
                  <motion.div
                    key={folder.id}
                    layout
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.02 * idx, type: "spring", stiffness: 300, damping: 22 }}
                  >
                    <Button
                      ref={idx === 0 ? firstFocusable : undefined}
                      variant="ghost"
                      className={cn(
                        "group relative w-full justify-start gap-3 px-3 py-3 h-auto font-normal rounded-xl",
                        "transition-colors",
                        isActive
                          ? "bg-[#f4f3f8] text-gray-900 font-medium"
                          : "hover:bg-gray-100/80 text-gray-700"
                      )}
                      onClick={() => {
                        onFolderChange(folder.id)
                        onClose()
                      }}
                      onMouseEnter={() => {}}
                    >
                      {/* Active accent bar */}
                      <AnimatePresence>
                        {isActive && (
                          <motion.span
                            layoutId="active-folder-accent"
                            className="absolute left-0 top-1/2 -translate-y-1/2 h-6 w-1.5 rounded-r-full bg-[#1a0b3e]"
                            initial={{ opacity: 0, scaleY: 0.6 }}
                            animate={{ opacity: 1, scaleY: 1 }}
                            exit={{ opacity: 0, scaleY: 0.6 }}
                          />
                        )}
                      </AnimatePresence>

                      {/* Icon */}
                      <motion.span
                        className={cn(
                          "grid place-items-center",
                          isActive ? "text-[#1a0b3e]" : "text-gray-500 group-hover:text-[#1a0b3e]"
                        )}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.96 }}
                        transition={{ type: "spring", stiffness: 400, damping: 20 }}
                      >
                        <Icon className="h-5 w-5" />
                      </motion.span>

                      {/* Label */}
                      <span className="flex-1 text-left text-sm">{folder.label}</span>

                      {/* Count badge */}
                      <AnimatePresence>
                        {folder.count != null && (
                          <motion.span
                            key={`${folder.id}-count`}
                            className="inline-flex min-w-6 items-center justify-center rounded-full px-2 py-0.5 text-xs bg-gray-100 text-gray-700"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                          >
                            {folder.count}
                          </motion.span>
                        )}
                      </AnimatePresence>

                      {/* Hover ripple */}
                      <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-xl">
                        <motion.span
                          className="absolute inset-0 bg-[#1a0b3e]/5"
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                          transition={{ duration: 0.15 }}
                          style={{ maskImage: "radial-gradient(180px 180px at var(--x,50%) var(--y,50%), #000 20%, transparent 60%)" }}
                        />
                      </span>
                    </Button>
                  </motion.div>
                )
              })}

              {/* More */}
              <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 }}>
                <Button
                  variant="ghost"
                  className="w-full justify-start gap-3 px-3 py-3 h-auto font-normal rounded-xl hover:bg-gray-100/80"
                >
                  <motion.span whileHover={{ rotate: 180 }} transition={{ type: "spring", stiffness: 260, damping: 18 }}>
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  </motion.span>
                  <span className="flex-1 text-left">More</span>
                </Button>
              </motion.div>

              {/* Labels header */}
              <div className="pt-4 mt-4 border-t">
                <div className="flex items-center justify-between px-3 py-2">
                  <span className="font-semibold text-sm">Labels</span>
                  <Button variant="ghost" size="icon" className="h-6 w-6" aria-label="Add label">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 border-t">
              <Button
                variant="ghost"
                className="w-full justify-start gap-3 px-3 py-3 h-auto font-normal rounded-xl text-red-600 hover:text-red-700 hover:bg-red-50"
                onClick={onSignOut}
              >
                <motion.span whileHover={{ x: 3 }} whileTap={{ scale: 0.98 }}>
                  <LogOut className="h-5 w-5" />
                </motion.span>
                <span>Sign Out</span>
              </Button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}

// Optional: dynamic hover ripple position (attach where you render MobileMenu)
// Example usage to set CSS variables --x and --y on pointer move:
// <div onPointerMove={(e) => {
//   const target = e.currentTarget as HTMLElement
//   const rect = target.getBoundingClientRect()
//   target.style.setProperty('--x', `${e.clientX - rect.left}px`)
//   target.style.setProperty('--y', `${e.clientY - rect.top}px`)
// }}>...</div>
