export interface Email {
  id: string
  sender: string
  senderEmail: string
  avatar: string
  subject: string
  preview: string
  time: string
  isRead: boolean
  isStarred: boolean
  content: string
  quickReplies?: string[]
}

export type MailFolder = "all" | "inbox" | "spam" | "sent" | "archive" | "pinned"

export interface Label {
  id: string
  name: string
  color: string
}

export interface Task {
  id: string
  title: string
  date: string
  completed: boolean
  createdAt: number
}

export interface Contact {
  id: string
  name: string
  email: string
  phone?: string
  avatar?: string
  createdAt: number
}
