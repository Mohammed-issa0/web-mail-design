"use client"

import {
  ArrowLeft,
  Archive,
  Clock,
  Trash2,
  Mail,
  FolderInput,
  MoreVertical,
  Reply,
  Forward,
  ChevronRight,
  ChevronDown,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import type { Email } from "@/lib/types"

interface MailDetailProps {
  email: Email
  onBack: () => void
  onReply: () => void
}

export function MailDetail({ email, onBack, onReply }: MailDetailProps) {
  return (
    <div className="flex-1 bg-white flex flex-col h-full">
      <div className="flex items-center justify-between px-3 py-3 border-b">
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" onClick={onBack} className="h-9 w-9">
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="h-9 w-9">
            <Archive className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="h-9 w-9">
            <Clock className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="h-9 w-9">
            <Trash2 className="h-5 w-5" />
          </Button>
        </div>
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" className="h-9 w-9">
            <Mail className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="h-9 w-9">
            <FolderInput className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="h-9 w-9">
            <MoreVertical className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="px-4 py-4">
          <div className="flex items-center gap-2 mb-4">
            <h1 className="text-xl font-normal">{email.subject}</h1>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <div className="flex items-center gap-1 bg-gray-100 rounded px-2 py-1">
              <span className="text-sm text-gray-700">Inbox</span>
              <button className="text-gray-500 hover:text-gray-700">
                <X className="h-3 w-3" />
              </button>
            </div>
          </div>

          <div className="flex items-start gap-3 mb-6">
            <Avatar className="h-10 w-10 flex-shrink-0">
              <AvatarImage src={email.avatar || "/placeholder.svg"} />
              <AvatarFallback>{email.sender[0]}</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <div className="flex items-baseline gap-2 flex-wrap">
                <span className="font-semibold text-base">{email.sender}</span>
                <span className="text-sm text-gray-600">&lt;{email.senderEmail}&gt;</span>
                <button className="text-sm text-blue-600 hover:underline">Unsubscribe</button>
              </div>
              <button className="flex items-center gap-1 text-sm text-gray-600 mt-1 hover:bg-gray-50 -ml-1 px-1 rounded">
                <span>to me</span>
                <ChevronDown className="h-3 w-3" />
              </button>
            </div>
          </div>

          <div className="mb-6">
            <p className="text-gray-800 leading-relaxed whitespace-pre-wrap text-[15px]">{email.content}</p>
          </div>

          {email.quickReplies && (
            <div className="flex flex-wrap gap-2 mb-6">
              {email.quickReplies.map((reply, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="rounded-lg border-gray-300 bg-white text-sm font-medium px-4 py-2 h-auto hover:bg-gray-50"
                >
                  {reply}
                </Button>
              ))}
            </div>
          )}

          <div className="flex gap-3">
            <Button
              variant="outline"
              className="flex-1 gap-2 bg-white border-gray-300 text-gray-700 font-normal hover:bg-gray-50"
              onClick={onReply}
            >
              <Reply className="h-4 w-4" />
              Reply
            </Button>
            <Button
              variant="outline"
              className="flex-1 gap-2 bg-white border-gray-300 text-gray-700 font-normal hover:bg-gray-50"
            >
              <Forward className="h-4 w-4" />
              Forward
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
