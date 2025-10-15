"use client"

import { useState, useRef } from "react"
import { Menu, Search, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion, AnimatePresence } from "framer-motion"

interface MobileHeaderProps {
  title: string
  showBack?: boolean
  onBack?: () => void
  onMenuClick?: () => void
  showSearch?: boolean
  /**
   * When true, the text input will instantly blur on focus so the keyboard won't open on mobile
   */
  disableInputFocus?: boolean
}

export function MobileHeader({
  title,
  showBack,
  onBack,
  onMenuClick,
  showSearch = true,
  disableInputFocus = true,
}: MobileHeaderProps) {
  const [isSearchOpen, setIsSearchOpen] = useState(true)
  const inputRef = useRef<HTMLInputElement | null>(null)

  const handleFocus = () => {
    if (!disableInputFocus) return
    // Immediately remove focus so mobile keyboard doesn't show
    inputRef.current?.blur()
  }

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") {
      // If focusing is enabled, blur on submit
      (e.target as HTMLInputElement).blur()
    }
  }

  return (
    <motion.header
      className="md:hidden bg-[#E8E8E8] border-b"
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 180, damping: 20 }}
    >
      <div className="flex items-center justify-between px-4 py-3">
        {showBack ? (
          <Button variant="ghost" size="icon" onClick={onBack} aria-label="Back">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        ) : (
          <Button variant="ghost" size="icon" onClick={onMenuClick} aria-label="Open menu">
            <Menu className="h-5 w-5" />
          </Button>
        )}

        <motion.h1
          className="text-base font-medium text-gray-900"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
        >
          {title}
        </motion.h1>

        <motion.img
          src="/images/user.png"
          alt="User avatar"
          className="h-9 w-9 rounded-full"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        />
      </div>

      {showSearch && (
        <div className="px-4 pb-3">
          <AnimatePresence initial={false}>
            {isSearchOpen && (
              <motion.div
                key="search"
                className="relative w-full"
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.18 }}
              >
                <motion.span
                  className="absolute left-3 top-1/2 -translate-y-1/2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <Search className="h-4 w-4 text-gray-400" />
                </motion.span>

                {/*
                  Input: visually interactive but won't keep focus if disableInputFocus=true.
                  We also remove native outlines and add nice focus ring if focusing is allowed.
                */}
                <input
                 
                  placeholder="Search"
                  className={[
                    "pl-10 bg-[#F7F8FC] w-full h-10",
                    "outline-none ring-0 focus-visible:ring-2 focus-visible:ring-accent",
                  
                    "rounded-xl transition-[transform,box-shadow] duration-200",
                    "hover:shadow-sm",
                  ].join(" ")}
                  onFocus={handleFocus}
                  onKeyDown={handleKeyDown}
                  onMouseDown={(e) => {
                    
                  }}
                />

                
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </motion.header>
  )
}
