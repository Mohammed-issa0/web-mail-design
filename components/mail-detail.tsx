"use client"

import {
  ArrowLeft,
  Archive,
  AlertCircle,
  Trash2,
  Mail,
  MoveRight,
  MoreVertical,
  Star,
  Reply,
  Forward,
  Printer,
  ExternalLink,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import type { Email } from "@/lib/types"
import { Badge } from "@/components/ui/badge"

interface MailDetailProps {
  email: Email
  onBack: () => void
  onReply: () => void
}

export function MailDetail({ email, onBack, onReply }: MailDetailProps) {
  return (
    <div className="flex-1 bg-white flex flex-col">
      <div className="flex items-center gap-1 md:gap-2 px-2 md:px-4 py-3 border-b">
        <Button variant="ghost" size="icon" onClick={onBack} className="md:flex">
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <Archive className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <AlertCircle className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <Trash2 className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <Mail className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <MoveRight className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <MoreVertical className="h-5 w-5" />
        </Button>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="px-4 md:px-6 py-4">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-2">
            <div className="flex items-center gap-2">
              <h1 className="text-xl md:text-2xl font-semibold">{email.subject}</h1>
              <Badge variant="secondary" className="rounded-md hidden md:inline-flex">
                <Mail className="h-3 w-3 mr-1" />
                Inbox
                <button className="ml-1 hover:bg-gray-300 rounded-full px-1">×</button>
              </Badge>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="hidden md:flex">
                <Printer className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hidden md:flex">
                <ExternalLink className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6 gap-3">
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src={email.avatar || "/placeholder.svg"} />
                <AvatarFallback>{email.sender[0]}</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2">
                  <span className="font-semibold text-sm md:text-base">{email.sender}</span>
                  <span className="text-xs md:text-sm text-gray-600">&lt;{email.senderEmail}&gt;</span>
                  <button className="text-xs md:text-sm text-blue-600 hover:underline self-start">Unsubscribe</button>
                </div>
                <div className="text-xs md:text-sm text-gray-600">
                  to me
                  <button className="ml-1 text-gray-400">▼</button>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs md:text-sm text-gray-600">9:14 AM (8 hours ago)</span>
              <Button variant="ghost" size="icon" className="hidden md:flex">
                <Star className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hidden md:flex">
                <Reply className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hidden md:flex">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="prose max-w-none mb-6">
            <p className="text-gray-700 leading-relaxed whitespace-pre-wrap text-sm md:text-base">{email.content}</p>
          </div>

          {email.quickReplies && (
            <div className="flex flex-wrap gap-2 mb-6">
              {email.quickReplies.map((reply, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="rounded-full border-gray-300 bg-transparent text-xs md:text-sm"
                >
                  {reply}
                </Button>
              ))}
            </div>
          )}

          <div className="flex gap-2">
            <Button variant="outline" className="gap-2 bg-transparent flex-1 md:flex-none" onClick={onReply}>
              <Reply className="h-4 w-4" />
              Reply
            </Button>
            <Button variant="outline" className="gap-2 bg-transparent flex-1 md:flex-none">
              <Forward className="h-4 w-4" />
              Forward
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
