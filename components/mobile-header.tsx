"use client"

import { Menu, Search, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface MobileHeaderProps {
  title: string
  showBack?: boolean
  onBack?: () => void
  onMenuClick?: () => void
  showSearch?: boolean
}

export function MobileHeader({ title, showBack, onBack, onMenuClick, showSearch = true }: MobileHeaderProps) {
  return (
    <header className="md:hidden bg-gray-100 border-b">
      <div className="flex items-center justify-between px-4 py-3">
        {showBack ? (
          <Button variant="ghost" size="icon" onClick={onBack}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
        ) : (
          <Button variant="ghost" size="icon" onClick={onMenuClick}>
            <Menu className="h-5 w-5" />
          </Button>
        )}

        <h1 className="text-base font-medium text-gray-900">{title}</h1>

        <Avatar className="h-8 w-8">
          <AvatarImage src="/images/design-mode/New%20Message.png" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </div>

      {showSearch && (
        <div className="px-4 pb-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input placeholder="Search" className="pl-10 bg-white border-gray-200 rounded-lg" />
          </div>
        </div>
      )}
    </header>
  )
}
