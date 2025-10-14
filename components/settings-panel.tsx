"use client"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"

interface SettingsPanelProps {
  onClose: () => void
}

export function SettingsPanel({ onClose }: SettingsPanelProps) {
  const [activeTab, setActiveTab] = useState<"general" | "security" | "account" | "files">("general")

  return (
    <div className="flex-1 bg-white flex flex-col">
      <div className="px-6 py-4 border-b">
        <h1 className="text-2xl font-semibold">Settings</h1>
      </div>

      <div className="border-b">
        <div className="flex gap-6 px-6">
          <button
            className={`py-3 border-b-2 font-medium ${
              activeTab === "general" ? "border-[#1a0b3e] text-[#1a0b3e]" : "border-transparent text-gray-600"
            }`}
            onClick={() => setActiveTab("general")}
          >
            General
          </button>
          <button
            className={`py-3 border-b-2 font-medium ${
              activeTab === "security" ? "border-[#1a0b3e] text-[#1a0b3e]" : "border-transparent text-gray-600"
            }`}
            onClick={() => setActiveTab("security")}
          >
            Security & Privacy
          </button>
          <button
            className={`py-3 border-b-2 font-medium ${
              activeTab === "account" ? "border-[#1a0b3e] text-[#1a0b3e]" : "border-transparent text-gray-600"
            }`}
            onClick={() => setActiveTab("account")}
          >
            Account & Integration
          </button>
          <button
            className={`py-3 border-b-2 font-medium ${
              activeTab === "files" ? "border-[#1a0b3e] text-[#1a0b3e]" : "border-transparent text-gray-600"
            }`}
            onClick={() => setActiveTab("files")}
          >
            Files & Calendar
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6">
        {activeTab === "general" && (
          <div className="space-y-6 max-w-2xl">
            <div className="flex items-center justify-between">
              <label className="font-medium">Language:</label>
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-600">display language:</span>
                <Select defaultValue="en-us">
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en-us">English(US)</SelectItem>
                    <SelectItem value="ar">العربية</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="font-medium">Time Format:</label>
              <Select defaultValue="12">
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="12">12-hour</SelectItem>
                  <SelectItem value="24">24-hour</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center justify-between">
              <label className="font-medium">Refresh Time:</label>
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-600">Every:</span>
                <Select defaultValue="1">
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 Min</SelectItem>
                    <SelectItem value="5">5 Min</SelectItem>
                    <SelectItem value="10">10 Min</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="font-medium">Themes:</label>
              <Select defaultValue="default">
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="default">Default</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="light">Light</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center justify-between">
              <label className="font-medium">Messages Per Page:</label>
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-600">conversations per page</span>
                <Select defaultValue="50">
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="25">25</SelectItem>
                    <SelectItem value="50">50</SelectItem>
                    <SelectItem value="100">100</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="font-medium">Desktop notifications:</label>
              <Select defaultValue="on">
                <SelectTrigger className="w-64">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="on">New mail notifications on</SelectItem>
                  <SelectItem value="off">New mail notifications off</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex justify-end pt-4">
              <Button className="bg-[#1a0b3e] hover:bg-[#2a1b4e] text-white px-8">Save</Button>
            </div>
          </div>
        )}

        {activeTab === "security" && (
          <div className="space-y-6 max-w-2xl">
            <div className="flex items-start justify-between">
              <label className="font-medium">Two-factor verification:</label>
              <div className="flex items-center gap-4">
                <Button className="bg-[#1a0b3e] hover:bg-[#2a1b4e] text-white">Enable</Button>
                <span className="text-sm text-gray-600">
                  Increase your security by enabling two factor verification for your account:
                </span>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Checkbox id="paranoid" />
              <label htmlFor="paranoid" className="text-sm leading-relaxed">
                <span className="font-medium">Paranoid encryption:</span>
                <br />
                <span className="text-gray-600">
                  Enables browser-level on-the-fly encryption in Files. Files are encrypted/decrypted right on this
                  device, even the server itself cannot get access to non-encrypted content of paranoid-encrypted files.
                  Encryption method is AES256.
                </span>
              </label>
            </div>

            <div className="flex items-start gap-4">
              <Checkbox id="file-encryption" />
              <label htmlFor="file-encryption" className="text-sm">
                <span className="font-medium">File encryption:</span>
                <br />
                <span className="text-gray-600">
                  Every time while upload you will be asked if the file should be encrypted.
                </span>
              </label>
            </div>

            <div className="flex justify-end pt-4">
              <Button className="bg-[#1a0b3e] hover:bg-[#2a1b4e] text-white px-8">Save</Button>
            </div>
          </div>
        )}

        {activeTab === "account" && (
          <div className="space-y-6 max-w-2xl">
            <div className="flex items-center justify-between">
              <label className="font-medium">Connect to Google:</label>
              <div className="flex items-center gap-4">
                <Button className="bg-[#1a0b3e] hover:bg-[#2a1b4e] text-white">Connect</Button>
                <span className="text-sm text-gray-600">Can log in using Google account</span>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Checkbox id="google-drive" />
              <label htmlFor="google-drive" className="text-sm">
                <span className="font-medium">Google Drive in Files:</span>
                <br />
                <span className="text-gray-600">Enable Google Drive in Files</span>
              </label>
            </div>

            <div className="flex justify-end pt-4">
              <Button className="bg-[#1a0b3e] hover:bg-[#2a1b4e] text-white px-8">Save</Button>
            </div>
          </div>
        )}

        {activeTab === "files" && (
          <div className="space-y-6 max-w-2xl">
            <div className="flex items-start gap-4">
              <Checkbox id="table-view" />
              <label htmlFor="table-view" className="text-sm">
                <span className="font-medium">Files Table view:</span>
                <br />
                <span className="text-gray-600">Enable Table view for files list</span>
              </label>
            </div>

            <div className="flex items-start gap-4">
              <Checkbox id="preview-pane" />
              <label htmlFor="preview-pane" className="text-sm">
                <span className="font-medium">Preview pane:</span>
                <br />
                <span className="text-gray-600">Enable Preview pane</span>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <label className="font-medium">Workday starts:</label>
              <div className="flex items-center gap-4">
                <Select defaultValue="09:00">
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="09:00">09:00 AM</SelectItem>
                    <SelectItem value="08:00">08:00 AM</SelectItem>
                  </SelectContent>
                </Select>
                <span className="text-sm text-gray-600">Ends</span>
                <Select defaultValue="18:00">
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="18:00">06:00 PM</SelectItem>
                    <SelectItem value="17:00">05:00 PM</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="font-medium">Week starts on:</label>
              <Select defaultValue="sunday">
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sunday">Sunday</SelectItem>
                  <SelectItem value="monday">Monday</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center justify-between">
              <label className="font-medium">Default Tab:</label>
              <Select defaultValue="month">
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="month">Month</SelectItem>
                  <SelectItem value="week">Week</SelectItem>
                  <SelectItem value="day">Day</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex justify-end pt-4">
              <Button className="bg-[#1a0b3e] hover:bg-[#2a1b4e] text-white px-8">Save</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
