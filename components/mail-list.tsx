"use client"

import { Checkbox } from "@/components/ui/checkbox"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Star, RefreshCw } from "lucide-react"
import type { Email } from "@/lib/types"
import { cn } from "@/lib/utils"

interface MailListProps {
  emails: Email[]
  selectedEmail: Email | null
  onEmailSelect: (email: Email) => void
  onStarToggle: (emailId: string) => void
}

export function MailList({ emails, selectedEmail, onEmailSelect, onStarToggle }: MailListProps) {
  return (
    <div className="flex-1 bg-white flex flex-col rounded-md">
      <div className="flex items-center gap-2 px-4 py-3 border-b">
        <Checkbox className="text-black" />
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <RefreshCw className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex-1 overflow-y-auto">
        {emails.map((email) => (
          <div
            key={email.id}
            className={cn(
              "flex items-start gap-3 px-4 py-3 border-b cursor-pointer hover:bg-gray-50 transition-colors",
              selectedEmail?.id === email.id && "bg-gray-100",
              !email.isRead && "bg-white",
            )}
            onClick={() => onEmailSelect(email)}
          >
            <Checkbox className="mt-1 flex-shrink-0" />
            <Button
              variant="ghost"
              size="icon"
              className="h-5 w-5 mt-1 p-0 flex-shrink-0"
              onClick={(e) => {
                e.stopPropagation()
                onStarToggle(email.id)
              }}
            >
              <Star className={cn("h-4 w-4", email.isStarred ? "fill-yellow-400 text-yellow-400" : "text-gray-400")} />
            </Button>
            <Avatar className="h-10 w-10 mt-1 flex-shrink-0">
              <AvatarImage src={email.avatar || "/placeholder.svg"} />
              <AvatarFallback>{email.sender[0]}</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0 flex flex-col">
              <div className="flex items-center justify-between gap-2 mb-1">
                <h3 className={cn("font-medium text-sm truncate", !email.isRead && "font-semibold")}>{email.sender}</h3>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <span className="text-xs text-gray-600 whitespace-nowrap">{email.time}</span>
                  {!email.isRead && <div className="h-2 w-2 rounded-full bg-[#1a0b3e]" />}
                </div>
              </div>
              <p className={cn("text-sm mb-1 truncate", !email.isRead ? "font-medium" : "text-gray-600")}>
                {email.subject}
              </p>
              <p className="text-xs text-gray-500 truncate">{email.preview}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
