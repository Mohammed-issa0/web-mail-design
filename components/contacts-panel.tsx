"use client"

import { X, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useState, useEffect } from "react"
import { AddContactDialog } from "@/components/add-contact-dialog"
import { motion, AnimatePresence } from "framer-motion"
import type { Contact } from "@/lib/types"

interface ContactsPanelProps {
  onClose: () => void
}

export function ContactsPanel({ onClose }: ContactsPanelProps) {
  const [contacts, setContacts] = useState<Contact[]>([])
  const [showAddDialog, setShowAddDialog] = useState(false)

  useEffect(() => {
    const savedContacts = localStorage.getItem("mail-app-contacts")
    if (savedContacts) {
      setContacts(JSON.parse(savedContacts))
    }
  }, [])

  useEffect(() => {
    if (contacts.length > 0 || localStorage.getItem("mail-app-contacts")) {
      localStorage.setItem("mail-app-contacts", JSON.stringify(contacts))
    }
  }, [contacts])

  const handleAddContact = (name: string, email: string, phone: string) => {
    const newContact: Contact = {
      id: Date.now().toString(),
      name,
      email,
      phone,
      createdAt: Date.now(),
    }
    setContacts([...contacts, newContact])
  }

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
          <h2 className="font-semibold">Contacts</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div className="px-4 py-3 border-b">
          <Button
            variant="outline"
            className="w-full justify-center bg-transparent"
            onClick={() => setShowAddDialog(true)}
          >
            <Plus className="h-4 w-4 mr-2" />
            Add New Contact
          </Button>
        </div>

        <div className="flex-1 overflow-y-auto">
          <AnimatePresence>
            {contacts.map((contact, index) => (
              <motion.div
                key={contact.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-3 px-4 py-4 border-b hover:bg-gray-50 cursor-pointer"
              >
                <Avatar className="h-12 w-12">
                  <AvatarImage src={contact.avatar || "/placeholder.svg"} />
                  <AvatarFallback>{contact.name[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm">{contact.name}</p>
                  <p className="text-xs text-gray-500 truncate">{contact.email}</p>
                  {contact.phone && <p className="text-xs text-gray-400 truncate">{contact.phone}</p>}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          {contacts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center p-8 text-center"
            >
              <p className="text-gray-500 text-sm">No contacts yet</p>
              <p className="text-gray-400 text-xs mt-1">Add your first contact to get started</p>
            </motion.div>
          )}
        </div>
      </motion.div>

      <AddContactDialog isOpen={showAddDialog} onClose={() => setShowAddDialog(false)} onAdd={handleAddContact} />
    </>
  )
}
