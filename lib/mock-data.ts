<<<<<<< HEAD
import type { Email, Label } from "./types";

export const mockEmails: Email[] = [
  {
    id: "1",
    sender: "Jeanne Nesty",
    senderEmail: "jeanne@example.com",
    avatar: "/images/woman.png",
    subject: "Weekly update",
    preview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ...",
    time: "3:13 PM",
    isRead: false,
    isStarred: false,
    content:
      "Lorem ipsum dolor sit amet consectetur. Ac eget eu eget ullamcorper tellus sem scelerisque sit ante. Lorem ipsum dolor sit amet consectetur. Ac eget eu eget ullamcorper tellus sem scelerisque sit ante.Lorem ipsum dolor sit amet consectetur. Ac eget eu eget ullamcorper tellus sem scelerisque sit ante.Lorem ipsum dolor sit amet consectetur. Ac eget eu eget ullamcorper tellus sem scelerisque sit ante.Lorem ipsum dolor sit amet consectetur. Ac eget eu eget ullamcorper tellus sem scelerisque sit ante.Lorem ipsum dolor sit amet consectetur. Ac eget eu eget ullamcorper tellus sem scelerisque sit ante.\n\nLorem ipsum dolor sit amet consectetur. Ac eget eu eget ullamcorper tellus sem scelerisque sit ante.Lorem ipsum dolor sit amet consectetur. Ac eget eu eget ullamcorper tellus sem scelerisque sit ante.Lorem ipsum dolor sit amet consectetur. Ac eget eu eget ullamcorper tellus sem scelerisque sit ante.",
  },
  {
    id: "2",
    sender: "John Lennon",
    senderEmail: "john@example.com",
    avatar: "/images/man.png",
    subject: "UI project : Client Dashboard",
    preview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ...",
    time: "3:13 PM",
    isRead: false,
    isStarred: false,
    content:
      "Lorem ipsum dolor sit amet consectetur. Ac eget eu eget ullamcorper tellus sem scelerisque sit ante.",
  },
  {
    id: "3",
    sender: "Services PayPal",
    senderEmail: "service@paypal.com",
    avatar: "/images/paypal.png",
    subject: "Payment received",
    preview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ...",
    time: "3:13 PM",
    isRead: false,
    isStarred: false,
    content:
      "Lorem ipsum dolor sit amet consectetur. Ac eget eu eget ullamcorper tellus sem scelerisque sit ante.",
  },
  {
    id: "4",
    sender: "Spotify",
    senderEmail: "email@domain.com",
    avatar: "/images/man2.png",
    subject: "Daily mix available",
    preview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ...",
    time: "3:13 PM",
    isRead: false,
    isStarred: false,
    content:
      "Lorem ipsum dolor sit amet consectetur. Ac eget eu eget ullamcorper tellus sem scelerisque sit ante. Lorem ipsum dolor sit amet consectetur. Ac eget eu eget ullamcorper tellus sem scelerisque sit ante.Lorem ipsum dolor sit amet consectetur. Ac eget eu eget ullamcorper tellus sem scelerisque sit ante.Lorem ipsum dolor sit amet consectetur. Ac eget eu eget ullamcorper tellus sem scelerisque sit ante.Lorem ipsum dolor sit amet consectetur. Ac eget eu eget ullamcorper tellus sem scelerisque sit ante.Lorem ipsum dolor sit amet consectetur. Ac eget eu eget ullamcorper tellus sem scelerisque sit ante.\n\nLorem ipsum dolor sit amet consectetur. Ac eget eu eget ullamcorper tellus sem scelerisque sit ante.Lorem ipsum dolor sit amet consectetur. Ac eget eu eget ullamcorper tellus sem scelerisque sit ante.Lorem ipsum dolor sit amet consectetur. Ac eget eu eget ullamcorper tellus sem scelerisque sit ante.",
    quickReplies: [
      "Looking forward to it!",
      "We will be there!",
      "Thanks for the update!",
    ],
  },
  {
    id: "5",
    sender: "Mathias Goblet",
    senderEmail: "mathias@example.com",
    avatar: "/images/apple.png",
    subject: "Financial information",
    preview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ...",
    time: "3:13 PM",
    isRead: false,
    isStarred: false,
    content:
      "Lorem ipsum dolor sit amet consectetur. Ac eget eu eget ullamcorper tellus sem scelerisque sit ante.",
  },
  {
    id: "6",
    sender: "Apple",
    senderEmail: "apple@example.com",
    avatar: "/images/man2.png",
    subject: "Weekly update",
    preview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ...",
    time: "3:13 PM",
    isRead: false,
    isStarred: false,
    content:
      "Lorem ipsum dolor sit amet consectetur. Ac eget eu eget ullamcorper tellus sem scelerisque sit ante.",
  },
  {
    id: "7",
    sender: "Apple",
    senderEmail: "apple@example.com",
    avatar: "/images/woman.png",
    subject: "Your Apple bill",
    preview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ...",
    time: "3:13 PM",
    isRead: true,
    isStarred: false,
    content:
      "Lorem ipsum dolor sit amet consectetur. Ac eget eu eget ullamcorper tellus sem scelerisque sit ante.",
  },
];

export const mockLabels: Label[] = [
  { id: "1", name: "Work", color: "#3b82f6" },
  { id: "2", name: "Personal", color: "#10b981" },
  { id: "3", name: "Important", color: "#ef4444" },
=======
import type { Email, Label } from "./types";

export const mockEmails: Email[] = [
  {
    id: "1",
    sender: "Jeanne Nesty",
    senderEmail: "jeanne@example.com",
    avatar: "/images/woman.png",
    subject: "Weekly update",
    preview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ...",
    time: "3:13 PM",
    isRead: false,
    isStarred: false,
    content:
      "Lorem ipsum dolor sit amet consectetur. Ac eget eu eget ullamcorper tellus sem scelerisque sit ante. Lorem ipsum dolor sit amet consectetur. Ac eget eu eget ullamcorper tellus sem scelerisque sit ante.Lorem ipsum dolor sit amet consectetur. Ac eget eu eget ullamcorper tellus sem scelerisque sit ante.Lorem ipsum dolor sit amet consectetur. Ac eget eu eget ullamcorper tellus sem scelerisque sit ante.Lorem ipsum dolor sit amet consectetur. Ac eget eu eget ullamcorper tellus sem scelerisque sit ante.Lorem ipsum dolor sit amet consectetur. Ac eget eu eget ullamcorper tellus sem scelerisque sit ante.\n\nLorem ipsum dolor sit amet consectetur. Ac eget eu eget ullamcorper tellus sem scelerisque sit ante.Lorem ipsum dolor sit amet consectetur. Ac eget eu eget ullamcorper tellus sem scelerisque sit ante.Lorem ipsum dolor sit amet consectetur. Ac eget eu eget ullamcorper tellus sem scelerisque sit ante.",
  },
  {
    id: "2",
    sender: "John Lennon",
    senderEmail: "john@example.com",
    avatar: "/images/man.png",
    subject: "UI project : Client Dashboard",
    preview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ...",
    time: "3:13 PM",
    isRead: false,
    isStarred: false,
    content:
      "Lorem ipsum dolor sit amet consectetur. Ac eget eu eget ullamcorper tellus sem scelerisque sit ante.",
  },
  {
    id: "3",
    sender: "Services PayPal",
    senderEmail: "service@paypal.com",
    avatar: "/images/paypal.png",
    subject: "Payment received",
    preview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ...",
    time: "3:13 PM",
    isRead: false,
    isStarred: false,
    content:
      "Lorem ipsum dolor sit amet consectetur. Ac eget eu eget ullamcorper tellus sem scelerisque sit ante.",
  },
  {
    id: "4",
    sender: "Spotify",
    senderEmail: "email@domain.com",
    avatar: "/images/man2.png",
    subject: "Daily mix available",
    preview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ...",
    time: "3:13 PM",
    isRead: false,
    isStarred: false,
    content:
      "Lorem ipsum dolor sit amet consectetur. Ac eget eu eget ullamcorper tellus sem scelerisque sit ante. Lorem ipsum dolor sit amet consectetur. Ac eget eu eget ullamcorper tellus sem scelerisque sit ante.Lorem ipsum dolor sit amet consectetur. Ac eget eu eget ullamcorper tellus sem scelerisque sit ante.Lorem ipsum dolor sit amet consectetur. Ac eget eu eget ullamcorper tellus sem scelerisque sit ante.Lorem ipsum dolor sit amet consectetur. Ac eget eu eget ullamcorper tellus sem scelerisque sit ante.Lorem ipsum dolor sit amet consectetur. Ac eget eu eget ullamcorper tellus sem scelerisque sit ante.\n\nLorem ipsum dolor sit amet consectetur. Ac eget eu eget ullamcorper tellus sem scelerisque sit ante.Lorem ipsum dolor sit amet consectetur. Ac eget eu eget ullamcorper tellus sem scelerisque sit ante.Lorem ipsum dolor sit amet consectetur. Ac eget eu eget ullamcorper tellus sem scelerisque sit ante.",
    quickReplies: [
      "Looking forward to it!",
      "We will be there!",
      "Thanks for the update!",
    ],
  },
  {
    id: "5",
    sender: "Mathias Goblet",
    senderEmail: "mathias@example.com",
    avatar: "/images/apple.png",
    subject: "Financial information",
    preview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ...",
    time: "3:13 PM",
    isRead: false,
    isStarred: false,
    content:
      "Lorem ipsum dolor sit amet consectetur. Ac eget eu eget ullamcorper tellus sem scelerisque sit ante.",
  },
  {
    id: "6",
    sender: "Apple",
    senderEmail: "apple@example.com",
    avatar: "/images/man2.png",
    subject: "Weekly update",
    preview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ...",
    time: "3:13 PM",
    isRead: false,
    isStarred: false,
    content:
      "Lorem ipsum dolor sit amet consectetur. Ac eget eu eget ullamcorper tellus sem scelerisque sit ante.",
  },
  {
    id: "7",
    sender: "Apple",
    senderEmail: "apple@example.com",
    avatar: "/images/woman.png",
    subject: "Your Apple bill",
    preview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ...",
    time: "3:13 PM",
    isRead: true,
    isStarred: false,
    content:
      "Lorem ipsum dolor sit amet consectetur. Ac eget eu eget ullamcorper tellus sem scelerisque sit ante.",
  },
];

export const mockLabels: Label[] = [
  { id: "1", name: "Work", color: "#3b82f6" },
  { id: "2", name: "Personal", color: "#10b981" },
  { id: "3", name: "Important", color: "#ef4444" },
>>>>>>> 730d31e03963a002dfbf1f635ba6825f3c6d70e4
];
