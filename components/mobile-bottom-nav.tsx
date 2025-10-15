"use client"

import { Inbox, CheckCircle2, Send, Calendar, Users } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

interface MobileBottomNavProps {
  activeView: "inbox" | "tasks" | "compose" | "calendar" | "contacts"
  onViewChange: (view: "inbox" | "tasks" | "compose" | "calendar" | "contacts") => void
}

export function MobileBottomNav({ activeView, onViewChange }: MobileBottomNavProps) {
  const navItems = [
    { id: "inbox" as const, label: "Inbox", icon: Inbox },
    { id: "tasks" as const, label: "Tasks", icon: CheckCircle2 },
    { id: "compose" as const, label: "", icon: Send, isCenter: true },
    { id: "calendar" as const, label: "Calendar", icon: Calendar },
    { id: "contacts" as const, label: "Contacts", icon: Users },
  ]

  return (
    <motion.nav
      role="navigation"
      aria-label="Mobile bottom navigation"
      className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t z-50"
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 14 }}
    >
      <div className="flex items-end justify-around px-4 pb-2 pt-1">
        {navItems.map((item) => {
          const isActive = activeView === item.id
          const Icon = item.icon

          if (item.isCenter) {
            // Center FAB (Compose)
            return (
              <motion.button
                key={item.id}
                aria-label="Compose"
                onClick={() => onViewChange(item.id)}
                className={cn(
                  "relative -translate-y-2 rounded-full p-0.5",
                  "bg-gradient-to-b from-[#2a1866] to-[#1a0b3e] shadow-xl"
                )}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Glow ring on hover */}
                <motion.span
                  className="absolute inset-0 rounded-full"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.4 }}
                  transition={{ duration: 0.25 }}
                  style={{
                    boxShadow: "0 0 0 6px rgba(26,11,62,0.15)",
                  }}
                />
                <div className="relative z-[1] bg-[#1a0b3e] rounded-full p-4">
                  {/* You can swap this Image to your logo; ensure it's imported */}
                  <Image
                    src={"/images/logo.png"}
                    alt="Logo"
                    width={24}
                    height={24}
                    className="h-6 w-6 select-none"
                    priority
                  />
                </div>
              </motion.button>
            )
          }

          return (
            <motion.button
              key={item.id}
              onClick={() => onViewChange(item.id)}
              className={cn(
                "group relative flex flex-col items-center gap-1 py-2 px-3 cursor-pointer",
                "transition-[color,transform] duration-200 ease-out"
              )}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.96 }}
              aria-current={isActive ? "page" : undefined}
            >
              <motion.span
                className={cn(
                  "grid place-items-center",
                  isActive ? "text-[#1a0b3e]" : "text-gray-500 group-hover:text-[#1a0b3e]"
                )}
                animate={{ scale: isActive ? 1.05 : 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <Icon className="h-6 w-6" />
              </motion.span>

              <span
                className={cn(
                  "text-[11px] leading-none",
                  isActive ? "text-[#1a0b3e] font-semibold" : "text-gray-500 group-hover:text-[#1a0b3e]"
                )}
              >
                {item.label}
              </span>

              {/* Active underline with shared layout for smooth slide */}
              <AnimatePresence>
                {isActive && (
                  <motion.span
                    layoutId="active-underline"
                    className="absolute -bottom-2 left-1/2 h-1 w-12 -translate-x-1/2 rounded-full bg-[#1a0b3e]"
                    initial={{ opacity: 0, scaleX: 0.6 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    exit={{ opacity: 0, scaleX: 0.6 }}
                    transition={{ type: "spring", stiffness: 300, damping: 24 }}
                  />
                )}
              </AnimatePresence>

              {/* Hover badge (subtle) */}
              <AnimatePresence>
                {!isActive && (
                  <motion.span
                    key="hover-dot"
                    className="pointer-events-none absolute -bottom-1.5 h-1 w-1 rounded-full bg-gray-300"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}
              </AnimatePresence>
            </motion.button>
          )
        })}
      </div>
    </motion.nav>
  )
}
