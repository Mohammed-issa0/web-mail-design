"use client";

import { Search, Settings, SlidersHorizontal, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface MailHeaderProps {
  onNewMessage: () => void;
  onSettingsClick: () => void;
}

export function MailHeader({ onNewMessage, onSettingsClick }: MailHeaderProps) {
  return (
    <header className="flex justify-between items-center gap-4 bg-[#F7F8FC] px-[16px] py-3 ">
      <Button
        onClick={onNewMessage}
        className="bg-[#1a0b3e] w-[191px] hover:bg-[#453c64] text-white rounded-xl px-6 py-2 h-auto font-medium cursor-pointer"
      >
        <Send className="mr-2 h-4 w-4 font-bold" />
        New Message
      </Button>

      <div className=" relative mr-[-11px] w-[75%]">
        <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search"
          className="pl-10 bg-[#E0E0EA] border-none rounded-lg outline-none focus:outline-none "
        />
        <Button
          variant="ghost"
          size="icon"
          className="text-gray-600 absolute right-2 top-1/2 -translate-y-1/2"
        >
          <SlidersHorizontal className="h-5 w-5" />
        </Button>
      </div>

      <div className="flex justify-between items-center gap-2">
        <button
          variant="ghost"
          size="icon"
          className="text-gray-600"
          onClick={onSettingsClick}
        >
          <Settings className="h-6 w-6" />
        </button>

        <img src="/images/user.png" className="h-9 w-9" />
      </div>
    </header>
  );
}
