"use client"

import {
  X,
  Minus,
  Maximize2,
  ChevronDown,
  Paperclip,
  Link2,
  Smile,
  ImageIcon,
  Lock,
  Pen,
  MoreVertical,
  Trash2,
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  List,
  ListOrdered,
  IndentDecrease,
  IndentIncrease,
  Undo,
  Redo,
  Type,
  Mail,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState, useRef } from "react"

interface NewMessageDialogProps {
  onClose: () => void
}

export function NewMessageDialog({ onClose }: NewMessageDialogProps) {
  const [recipients, setRecipients] = useState("")
  const [subject, setSubject] = useState("")
  const [showCcBcc, setShowCcBcc] = useState(false)
  const [cc, setCc] = useState("")
  const [bcc, setBcc] = useState("")
  const [fontSize, setFontSize] = useState("14px")
  const [fontFamily, setFontFamily] = useState("Sans Serif")
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [showFormatToolbar, setShowFormatToolbar] = useState(true)
  const [activeToolbar, setActiveToolbar] = useState<string | null>(null)
  const [textColor, setTextColor] = useState("#000000")
  const editorRef = useRef<HTMLDivElement>(null)

  const execCommand = (command: string, value?: string) => {
    document.execCommand(command, false, value)
    editorRef.current?.focus()
  }

  const handleUndo = () => execCommand("undo")
  const handleRedo = () => execCommand("redo")
  const handleBold = () => execCommand("bold")
  const handleItalic = () => execCommand("italic")
  const handleUnderline = () => execCommand("underline")
  const handleAlignLeft = () => execCommand("justifyLeft")
  const handleAlignCenter = () => execCommand("justifyCenter")
  const handleAlignRight = () => execCommand("justifyRight")
  const handleBulletList = () => execCommand("insertUnorderedList")
  const handleNumberedList = () => execCommand("insertOrderedList")
  const handleIndent = () => execCommand("indent")
  const handleOutdent = () => execCommand("outdent")

  const handleFontChange = (font: string) => {
    setFontFamily(font)
    execCommand("fontName", font)
  }

  const handleSizeChange = (size: string) => {
    setFontSize(size)
    execCommand("fontSize", size)
  }

  const handleColorChange = (color: string) => {
    setTextColor(color)
    execCommand("foreColor", color)
  }

  const handleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
  }

  const handleMinimize = () => {
    setIsMinimized(true)
  }

  const handleRestore = () => {
    setIsMinimized(false)
  }

  const toggleFormatToolbar = () => {
    setShowFormatToolbar(!showFormatToolbar)
  }

  const handleToolbarChange = (toolbar: string) => {
    setActiveToolbar(activeToolbar === toolbar ? null : toolbar)
  }

  if (isMinimized) {
    return (
      <div
        className="hidden md:block fixed bottom-4 right-20 bg-[#1a0b3e] text-white rounded-full p-3 shadow-lg cursor-pointer hover:bg-[#2a1b4e] transition-colors z-50"
        onClick={handleRestore}
        title="Restore message"
      >
        <Mail className="h-5 w-5" />
      </div>
    )
  }

  return (
    <div
      className={`fixed bg-white flex flex-col transition-all z-50 ${
        isFullscreen
          ? "inset-0 rounded-none"
          : "md:bottom-0 md:right-20 md:w-[600px] md:max-h-[650px] md:rounded-t-lg md:shadow-2xl md:border inset-0 md:inset-auto"
      }`}
    >
      <div className="flex items-center justify-between px-4 py-3 md:py-2.5 bg-[#3d3d3d] text-white md:rounded-t-lg">
        <h3 className="font-normal text-sm">New Message</h3>
        <div className="flex items-center gap-0.5">
          <Button
            variant="ghost"
            size="icon"
            className="hidden md:flex h-7 w-7 text-white hover:bg-white/20"
            onClick={handleMinimize}
            title="Minimize"
          >
            <Minus className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="hidden md:flex h-7 w-7 text-white hover:bg-white/20"
            onClick={handleFullscreen}
            title={isFullscreen ? "Exit fullscreen" : "Fullscreen"}
          >
            <Maximize2 className="h-3.5 w-3.5" />
          </Button>
          <Button variant="ghost" size="icon" className="h-7 w-7 text-white hover:bg-white/20" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="flex items-center px-4 py-3 md:py-2.5 border-b">
          <Input
            placeholder="To:"
            value={recipients}
            onChange={(e) => setRecipients(e.target.value)}
            className="border-0 focus-visible:ring-0 px-0 text-sm flex-1"
          />
        </div>

        <div className="px-4 py-3 md:py-2.5 border-b md:hidden">
          <Input
            placeholder="Cc:"
            value={cc}
            onChange={(e) => setCc(e.target.value)}
            className="border-0 focus-visible:ring-0 px-0 text-sm"
          />
        </div>

        <div className="px-4 py-3 md:py-2.5 border-b md:hidden">
          <Input
            placeholder="Bcc:"
            value={bcc}
            onChange={(e) => setBcc(e.target.value)}
            className="border-0 focus-visible:ring-0 px-0 text-sm"
          />
        </div>

        {showCcBcc && (
          <>
            <div className="hidden md:block px-4 py-2.5 border-b">
              <Input
                placeholder="Cc"
                value={cc}
                onChange={(e) => setCc(e.target.value)}
                className="border-0 focus-visible:ring-0 px-0 text-sm"
              />
            </div>
            <div className="hidden md:block px-4 py-2.5 border-b">
              <Input
                placeholder="Bcc"
                value={bcc}
                onChange={(e) => setBcc(e.target.value)}
                className="border-0 focus-visible:ring-0 px-0 text-sm"
              />
            </div>
          </>
        )}

        <div className="flex items-center px-4 py-3 md:py-2.5 border-b">
          <Input
            placeholder="Subject:"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="border-0 focus-visible:ring-0 px-0 text-sm flex-1"
          />
          <Button variant="ghost" size="icon" className="md:hidden h-8 w-8" title="Attach file">
            <Paperclip className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex-1 px-4 py-4 md:py-3 overflow-auto">
          <div
            ref={editorRef}
            contentEditable
            className="outline-none min-h-full text-sm text-gray-700"
            data-placeholder="Body Text"
            style={{
              fontFamily: fontFamily === "Sans Serif" ? "system-ui, -apple-system, sans-serif" : fontFamily,
            }}
            suppressContentEditableWarning
          />
        </div>

        {showFormatToolbar && (
          <div className="hidden md:block px-3 py-2 border-t bg-gray-50">
            {activeToolbar === "font" ? (
              <div className="flex items-center gap-2 flex-wrap">
                <Button
                  variant="ghost"
                  className="h-8 px-3 text-xs hover:bg-gray-200"
                  onClick={() => handleFontChange("Arial")}
                >
                  Arial
                </Button>
                <Button
                  variant="ghost"
                  className="h-8 px-3 text-xs hover:bg-gray-200"
                  onClick={() => handleFontChange("Times New Roman")}
                >
                  Times New Roman
                </Button>
                <Button
                  variant="ghost"
                  className="h-8 px-3 text-xs hover:bg-gray-200"
                  onClick={() => handleFontChange("Courier New")}
                >
                  Courier New
                </Button>
                <Button
                  variant="ghost"
                  className="h-8 px-3 text-xs hover:bg-gray-200"
                  onClick={() => handleFontChange("Georgia")}
                >
                  Georgia
                </Button>
                <Button
                  variant="ghost"
                  className="h-8 px-3 text-xs hover:bg-gray-200"
                  onClick={() => handleFontChange("Verdana")}
                >
                  Verdana
                </Button>
              </div>
            ) : activeToolbar === "size" ? (
              <div className="flex items-center gap-2 flex-wrap">
                <Button
                  variant="ghost"
                  className="h-8 px-3 text-xs hover:bg-gray-200"
                  onClick={() => handleSizeChange("1")}
                >
                  Small
                </Button>
                <Button
                  variant="ghost"
                  className="h-8 px-3 text-xs hover:bg-gray-200"
                  onClick={() => handleSizeChange("3")}
                >
                  Normal
                </Button>
                <Button
                  variant="ghost"
                  className="h-8 px-3 text-xs hover:bg-gray-200"
                  onClick={() => handleSizeChange("5")}
                >
                  Large
                </Button>
                <Button
                  variant="ghost"
                  className="h-8 px-3 text-xs hover:bg-gray-200"
                  onClick={() => handleSizeChange("7")}
                >
                  Huge
                </Button>
              </div>
            ) : activeToolbar === "color" ? (
              <div className="flex items-center gap-2 flex-wrap">
                {["#000000", "#e74c3c", "#3498db", "#2ecc71", "#f39c12", "#9b59b6", "#1abc9c", "#34495e"].map(
                  (color) => (
                    <button
                      key={color}
                      className="h-8 w-8 rounded border-2 border-gray-300 hover:border-gray-500"
                      style={{ backgroundColor: color }}
                      onClick={() => handleColorChange(color)}
                      title={color}
                    />
                  ),
                )}
              </div>
            ) : activeToolbar === "align" ? (
              <div className="flex items-center gap-1">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 hover:bg-gray-200"
                  onClick={handleAlignLeft}
                  title="Align left"
                >
                  <AlignLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 hover:bg-gray-200"
                  onClick={handleAlignCenter}
                  title="Align center"
                >
                  <AlignCenter className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 hover:bg-gray-200"
                  onClick={handleAlignRight}
                  title="Align right"
                >
                  <AlignRight className="h-4 w-4" />
                </Button>
              </div>
            ) : (
              <div className="flex items-center gap-0.5 flex-wrap">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 hover:bg-gray-200"
                  onClick={handleUndo}
                  title="Undo"
                >
                  <Undo className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 hover:bg-gray-200"
                  onClick={handleRedo}
                  title="Redo"
                >
                  <Redo className="h-4 w-4" />
                </Button>

                <div className="w-px h-5 bg-gray-300 mx-1" />

                <Button
                  variant="ghost"
                  className="h-8 px-2 text-xs hover:bg-gray-200"
                  onClick={() => handleToolbarChange("font")}
                  title="Font family"
                >
                  {fontFamily}
                  <ChevronDown className="h-3 w-3 ml-1" />
                </Button>

                <Button
                  variant="ghost"
                  className="h-8 px-2 text-xs hover:bg-gray-200"
                  onClick={() => handleToolbarChange("size")}
                  title="Font size"
                >
                  <Type className="h-3.5 w-3.5" />
                  <ChevronDown className="h-3 w-3 ml-1" />
                </Button>

                <div className="w-px h-5 bg-gray-300 mx-1" />

                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 hover:bg-gray-200"
                  onClick={handleBold}
                  title="Bold"
                >
                  <Bold className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 hover:bg-gray-200"
                  onClick={handleItalic}
                  title="Italic"
                >
                  <Italic className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 hover:bg-gray-200"
                  onClick={handleUnderline}
                  title="Underline"
                >
                  <Underline className="h-4 w-4" />
                </Button>

                <Button
                  variant="ghost"
                  className="h-8 px-2 hover:bg-gray-200"
                  onClick={() => handleToolbarChange("color")}
                  title="Text color"
                >
                  <span className="text-xs font-semibold">A</span>
                  <ChevronDown className="h-3 w-3 ml-1" />
                </Button>

                <div className="w-px h-5 bg-gray-300 mx-1" />

                <Button
                  variant="ghost"
                  className="h-8 px-1.5 hover:bg-gray-200"
                  onClick={() => handleToolbarChange("align")}
                  title="Align"
                >
                  <AlignLeft className="h-4 w-4" />
                  <ChevronDown className="h-3 w-3 ml-0.5" />
                </Button>

                <Button
                  variant="ghost"
                  className="h-8 px-1.5 hover:bg-gray-200"
                  onClick={handleBulletList}
                  title="Bullet list"
                >
                  <List className="h-4 w-4" />
                  <ChevronDown className="h-3 w-3 ml-0.5" />
                </Button>

                <Button
                  variant="ghost"
                  className="h-8 px-1.5 hover:bg-gray-200"
                  onClick={handleNumberedList}
                  title="Numbered list"
                >
                  <ListOrdered className="h-4 w-4" />
                  <ChevronDown className="h-3 w-3 ml-0.5" />
                </Button>

                <Button
                  variant="ghost"
                  className="h-8 px-1.5 hover:bg-gray-200"
                  onClick={handleOutdent}
                  title="Decrease indent"
                >
                  <IndentDecrease className="h-4 w-4" />
                  <ChevronDown className="h-3 w-3 ml-0.5" />
                </Button>

                <Button
                  variant="ghost"
                  className="h-8 px-1.5 hover:bg-gray-200"
                  onClick={handleIndent}
                  title="Increase indent"
                >
                  <IndentIncrease className="h-4 w-4" />
                  <ChevronDown className="h-3 w-3 ml-0.5" />
                </Button>

                <div className="w-px h-5 bg-gray-300 mx-1" />

                <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-gray-200" title="More options">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </div>
            )}
          </div>
        )}

        <div className="flex items-center justify-between px-3 md:px-3 py-3 md:py-2.5 border-t">
          <div className="flex items-center gap-1">
            <Button className="bg-[#1a0b3e] hover:bg-[#2a1b4e] text-white h-9 px-4 md:px-4 text-sm">Send</Button>
            <Button variant="ghost" size="icon" className="h-9 w-9 hover:bg-gray-100">
              <ChevronDown className="h-4 w-4" />
            </Button>

            <div className="w-px h-5 bg-gray-300 mx-1" />

            <Button
              variant="ghost"
              size="icon"
              className={`hidden md:flex h-9 w-9 hover:bg-gray-100 relative ${showFormatToolbar ? "bg-gray-100" : ""}`}
              onClick={toggleFormatToolbar}
              title="Format text"
            >
              <Type className="h-4 w-4 font-bold" />
              {showFormatToolbar && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1a0b3e]" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hidden md:flex h-9 w-9 hover:bg-gray-100"
              title="Attach file"
            >
              <Paperclip className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hidden md:flex h-9 w-9 hover:bg-gray-100"
              title="Insert link"
            >
              <Link2 className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hidden md:flex h-9 w-9 hover:bg-gray-100"
              title="Insert emoji"
            >
              <Smile className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hidden md:flex h-9 w-9 hover:bg-gray-100"
              title="Insert image"
            >
              <ImageIcon className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden md:flex h-9 w-9 hover:bg-gray-100" title="Encryption">
              <Lock className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden md:flex h-9 w-9 hover:bg-gray-100" title="Signature">
              <Pen className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon" className="h-9 w-9 hover:bg-gray-100" title="More options">
              <MoreVertical className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-9 w-9 hover:bg-gray-100" title="Delete draft">
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <style jsx>{`
        [contenteditable][data-placeholder]:empty:before {
          content: attr(data-placeholder);
          color: #9ca3af;
          pointer-events: none;
        }
      `}</style>
    </div>
  )
}
