"use client"

import { Inbox, AlertCircle, Send, Archive, Pin, ChevronDown, Plus, LogOut, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { MailFolder } from "@/lib/types"

interface MailSidebarProps {
  activeFolder: MailFolder
  onFolderChange: (folder: MailFolder) => void
  onSignOut: () => void
}

export function MailSidebar({ activeFolder, onFolderChange, onSignOut }: MailSidebarProps) {
  const folders = [
    { id: "all" as MailFolder, label: "All Mail", icon: BookOpen, count: 16 },
    { id: "inbox" as MailFolder, label: "Inbox", icon: Inbox },
    { id: "spam" as MailFolder, label: "Spam", icon: AlertCircle },
    { id: "sent" as MailFolder, label: "Sent", icon: Send },
    { id: "archive" as MailFolder, label: "Archive", icon: Archive },
    { id: "pinned" as MailFolder, label: "Pinned", icon: Pin },
  ]

  return (
    <aside className="w-56 border-r bg-white flex flex-col">
      <div className="flex-1 p-4 space-y-1">
        {folders.map((folder) => (
          <Button
            key={folder.id}
            variant="ghost"
            className={cn(
              "w-full justify-start gap-3 px-3 py-2 h-auto font-normal",
              activeFolder === folder.id && "bg-gray-200 text-gray-900 font-medium",
            )}
            onClick={() => onFolderChange(folder.id)}
          >
            <folder.icon className="h-5 w-5" />
            <span className="flex-1 text-left">{folder.label}</span>
            {folder.count && <span className="text-sm text-gray-600">{folder.count}</span>}
          </Button>
        ))}

        <Button variant="ghost" className="w-full justify-start gap-3 px-3 py-2 h-auto font-normal">
          <ChevronDown className="h-5 w-5" />
          <span className="flex-1 text-left">More</span>
        </Button>

        <div className="pt-4 mt-4 border-t">
          <div className="flex items-center justify-between px-3 py-2">
            <span className="font-semibold text-sm">Labels</span>
            <Button variant="ghost" size="icon" className="h-6 w-6">
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="p-4 border-t">
        <Button
          variant="ghost"
          className="w-full justify-start gap-3 px-3 py-2 h-auto font-normal text-red-600 hover:text-red-700 hover:bg-red-50"
          onClick={onSignOut}
        >
          <LogOut className="h-5 w-5" />
          <span>Sign Out</span>
        </Button>
      </div>
    </aside>
  )
}
