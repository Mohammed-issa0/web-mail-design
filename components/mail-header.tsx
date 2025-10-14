"use client"

import { Search, Settings, SlidersHorizontal, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface MailHeaderProps {
  onNewMessage: () => void
  onSettingsClick: () => void
}

export function MailHeader({ onNewMessage, onSettingsClick }: MailHeaderProps) {
  return (
    <header className="flex justify-between items-center gap-4 bg-[#F7F8FC] px-6 py-3">
      <Button
        onClick={onNewMessage}
        className="bg-[#1a0b3e] hover:bg-[#2a1d4e] text-white rounded-xl px-6 py-2 h-auto font-medium cursor-pointer"
      >
        <Send className="mr-2 h-4 w-4 font-bold" />
        New Message
      </Button>

      <div className="flex-1 relative max-w-2xl">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Search" className="pl-10 bg-[#E0E0EA] border-0 rounded-lg" />
      </div>

      <Button variant="ghost" size="icon" className="text-gray-600">
        <SlidersHorizontal className="h-5 w-5" />
      </Button>

      <Button variant="ghost" size="icon" className="text-gray-600" onClick={onSettingsClick}>
        <Settings className="h-5 w-5" />
      </Button>

      <Avatar className="h-9 w-9">
        <AvatarImage src="/images/design-mode/New%20Message.png" />
        <AvatarFallback>U</AvatarFallback>
      </Avatar>
    </header>
  )
}
