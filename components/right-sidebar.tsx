"use client";

import { Calendar, FileText, CheckSquare, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type RightSidebarView = "calendar" | "notes" | "tasks" | "contacts" | null;

interface RightSidebarProps {
  activeView: RightSidebarView;
  onViewChange: (view: RightSidebarView) => void;
}

export function RightSidebar({ activeView, onViewChange }: RightSidebarProps) {
  const views = [
    {
      id: "calendar" as const,
      icon: "/images/calender.png",
      color: "text-green-500",
    },
    {
      id: "notes" as const,
      icon: "/images/notes.png",
      color: "text-yellow-500",
    },
    { id: "tasks" as const, icon: "/images/task.png", color: "text-blue-500" },
    {
      id: "contacts" as const,
      icon: "/images/contact.png",
      color: "text-gray-700",
    },
  ];

  return (
    <div className="w-16  bg-[#F7F8FC] flex flex-col items-center py-4 gap-4">
      {views.map((view) => (
        <Button
          key={view.id}
          variant="ghost"
          size="icon"
          className={cn(
            "h-12 w-12 rounded-xl",
            activeView === view.id && "bg-gray-100"
          )}
          onClick={() => onViewChange(activeView === view.id ? null : view.id)}
        >
          <img src={view.icon} className={cn("h-6 w-6", view.color)} />
        </Button>
      ))}
    </div>
  );
}
