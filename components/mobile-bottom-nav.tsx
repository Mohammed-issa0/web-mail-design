"use client"

import { Inbox, CheckCircle2, Send, Calendar, Users } from "lucide-react"
import { cn } from "@/lib/utils"

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
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t z-50">
      <div className="flex items-end justify-around px-4 pb-2 pt-1">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onViewChange(item.id)}
            className={cn(
              "flex flex-col items-center gap-1 py-2 px-3 relative transition-colors",
              item.isCenter && "mb-2",
            )}
          >
            {item.isCenter ? (
              <div className="bg-[#1a0b3e] rounded-full p-4 shadow-lg">
                <item.icon className="h-6 w-6 text-white" />
              </div>
            ) : (
              <>
                <item.icon className={cn("h-6 w-6", activeView === item.id ? "text-[#1a0b3e]" : "text-gray-500")} />
                <span
                  className={cn("text-xs", activeView === item.id ? "text-[#1a0b3e] font-medium" : "text-gray-500")}
                >
                  {item.label}
                </span>
                {activeView === item.id && (
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-[#1a0b3e] rounded-full" />
                )}
              </>
            )}
          </button>
        ))}
      </div>
    </nav>
  )
}
