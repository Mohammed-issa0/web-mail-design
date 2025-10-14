"use client"

import { X, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface ContactsPanelProps {
  onClose: () => void
}

export function ContactsPanel({ onClose }: ContactsPanelProps) {
  const contacts = [
    { id: 1, name: "Recipient Name", email: "email@domain.com", avatar: "/placeholder.svg" },
    { id: 2, name: "Recipient Name", email: "email@domain.com", avatar: "/placeholder.svg" },
  ]

  return (
    <div className="fixed md:relative inset-0 md:inset-auto md:w-96 border-l bg-white flex flex-col z-30">
      <div className="flex items-center justify-between px-4 py-3 border-b bg-gray-100 md:bg-white">
        <h2 className="font-semibold">Contacts</h2>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-4 w-4" />
        </Button>
      </div>

      <div className="px-4 py-3 border-b">
        <Button variant="outline" className="w-full justify-center bg-transparent">
          <Plus className="h-4 w-4 mr-2" />
          Add New Contact
        </Button>
      </div>

      <div className="flex-1 overflow-y-auto">
        {contacts.map((contact) => (
          <div key={contact.id} className="flex items-center gap-3 px-4 py-4 border-b hover:bg-gray-50 cursor-pointer">
            <Avatar className="h-12 w-12">
              <AvatarImage src={contact.avatar || "/placeholder.svg"} />
              <AvatarFallback>{contact.name[0]}</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-sm">{contact.name}</p>
              <p className="text-xs text-gray-500 truncate">{contact.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
