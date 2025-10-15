"use client";

import { useState } from "react";
import { MailHeader } from "@/components/mail-header";
import { MailSidebar } from "@/components/mail-sidebar";
import { MailList } from "@/components/mail-list";
import { MailDetail } from "@/components/mail-detail";
import { RightSidebar } from "@/components/right-sidebar";
import { CalendarPanel } from "@/components/calendar-panel";
import { TasksPanel } from "@/components/tasks-panel";
import { NewMessageDialog } from "@/components/new-message-dialog";
import { SettingsPanel } from "@/components/settings-panel";
import { MobileBottomNav } from "@/components/mobile-bottom-nav";
import { MobileHeader } from "@/components/mobile-header";
import { MobileMenu } from "@/components/mobile-menu";
import { ContactsPanel } from "@/components/contacts-panel";
import { mockEmails } from "@/lib/mock-data";
import type { Email, MailFolder } from "@/lib/types";

type RightSidebarView = "calendar" | "notes" | "tasks" | "contacts" | null;

export default function MailApp() {
  const [activeFolder, setActiveFolder] = useState<MailFolder>("all");
  const [selectedEmail, setSelectedEmail] = useState<Email | null>(null);
  const [emails, setEmails] = useState(mockEmails);
  const [rightSidebarView, setRightSidebarView] =
    useState<RightSidebarView>(null);
  const [showNewMessage, setShowNewMessage] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [viewMode, setViewMode] = useState<"list" | "split">("list");
  const [mobileView, setMobileView] = useState<
    "inbox" | "tasks" | "compose" | "calendar" | "contacts"
  >("inbox");
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleStarToggle = (emailId: string) => {
    setEmails(
      emails.map((email) =>
        email.id === emailId ? { ...email, isStarred: !email.isStarred } : email
      )
    );
  };

  const handleEmailSelect = (email: Email) => {
    setSelectedEmail(email);
    setViewMode("split");
    setEmails(
      emails.map((e) => (e.id === email.id ? { ...e, isRead: true } : e))
    );
  };

  const handleBack = () => {
    setViewMode("list");
    setSelectedEmail(null);
  };

  const handleMobileViewChange = (
    view: "inbox" | "tasks" | "compose" | "calendar" | "contacts"
  ) => {
    setMobileView(view);
    if (view === "compose") {
      setShowNewMessage(true);
    } else if (view === "tasks") {
      setRightSidebarView("tasks");
    } else if (view === "calendar") {
      setRightSidebarView("calendar");
    } else if (view === "contacts") {
      setRightSidebarView("contacts");
    } else {
      setRightSidebarView(null);
    }
  };

  return (
    // mail header
    <div className="h-screen flex flex-col bg-gray-50">
      <div className="hidden md:block">
        <MailHeader
          onNewMessage={() => setShowNewMessage(true)}
          onSettingsClick={() => setShowSettings(!showSettings)}
        />
      </div>

      <MobileHeader
        title={
          selectedEmail
            ? "Email Subject"
            : mobileView === "tasks"
            ? "Tasks"
            : mobileView === "calendar"
            ? "Calendar"
            : mobileView === "contacts"
            ? "Contacts"
            : "Inbox"
        }
        showBack={selectedEmail !== null}
        onBack={handleBack}
        onMenuClick={() => setShowMobileMenu(true)}
        showSearch={!selectedEmail}
      />

      <MobileMenu
        isOpen={showMobileMenu}
        onClose={() => setShowMobileMenu(false)}
        activeFolder={activeFolder}
        onFolderChange={setActiveFolder}
        onSignOut={() => console.log("Sign out")}
      />

      <div className="flex-1 flex overflow-hidden pb-16 md:pb-0">
        <div className="hidden md:block">
          <MailSidebar
            activeFolder={activeFolder}
            onFolderChange={setActiveFolder}
            onSignOut={() => console.log("Sign out")}
          />
        </div>

        {showSettings ? (
          <SettingsPanel onClose={() => setShowSettings(false)} />
        ) : viewMode === "list" || selectedEmail === null ? (
          <MailList
            emails={emails}
            selectedEmail={selectedEmail}
            onEmailSelect={handleEmailSelect}
            onStarToggle={handleStarToggle}
          />
        ) : (
          <>
            <div className="hidden md:block">
              <MailList
                emails={emails}
                selectedEmail={selectedEmail}
                onEmailSelect={handleEmailSelect}
                onStarToggle={handleStarToggle}
              />
            </div>
            {selectedEmail && (
              <MailDetail
                email={selectedEmail}
                onBack={handleBack}
                onReply={() => setShowNewMessage(true)}
              />
            )}
          </>
        )}

        {!showSettings && (
          <>
            <div className="hidden md:block">
              <RightSidebar
                activeView={rightSidebarView}
                onViewChange={setRightSidebarView}
              />
            </div>

            {rightSidebarView === "calendar" && (
              <CalendarPanel onClose={() => setRightSidebarView(null)} />
            )}

            {rightSidebarView === "tasks" && (
              <TasksPanel onClose={() => setRightSidebarView(null)} />
            )}

            {rightSidebarView === "contacts" && (
              <ContactsPanel onClose={() => setRightSidebarView(null)} />
            )}
          </>
        )}
      </div>

      <MobileBottomNav
        activeView={mobileView}
        onViewChange={handleMobileViewChange}
      />

      {showNewMessage && (
        <NewMessageDialog onClose={() => setShowNewMessage(false)} />
      )}
    </div>
  );
}
