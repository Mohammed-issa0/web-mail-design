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
