import type { Email, Label } from "./types"

export const mockEmails: Email[] = [
  {
    id: "1",
    sender: "Jeanne Nesty",
    senderEmail: "jeanne@example.com",
    avatar:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Account%20%26%20Integration%20-%20Settings-qlOhgOgKaFjbiuqgUVR9fUNIYKNwxP.png",
    subject: "Weekly update",
    preview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ...",
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
    avatar:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/General%20-%20Settings-vd5rW4v6KGGhvjcpRNGbWPnyKcyVDe.png",
    subject: "UI project : Client Dashboard",
    preview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ...",
    time: "3:13 PM",
    isRead: false,
    isStarred: false,
    content: "Lorem ipsum dolor sit amet consectetur. Ac eget eu eget ullamcorper tellus sem scelerisque sit ante.",
  },
  {
    id: "3",
    sender: "Services PayPal",
    senderEmail: "service@paypal.com",
    avatar:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Calendar%20View-AF9MsVU3NGF8ik4BervkY2TrtDoV4M.png",
    subject: "Payment received",
    preview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ...",
    time: "3:13 PM",
    isRead: false,
    isStarred: false,
    content: "Lorem ipsum dolor sit amet consectetur. Ac eget eu eget ullamcorper tellus sem scelerisque sit ante.",
  },
  {
    id: "4",
    sender: "Spotify",
    senderEmail: "email@domain.com",
    avatar:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Email%20Message-Z4w1LQwZFAjulEXD6BuwqHVH9fYH2G.png",
    subject: "Daily mix available",
    preview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ...",
    time: "3:13 PM",
    isRead: false,
    isStarred: false,
    content:
      "Lorem ipsum dolor sit amet consectetur. Ac eget eu eget ullamcorper tellus sem scelerisque sit ante. Lorem ipsum dolor sit amet consectetur. Ac eget eu eget ullamcorper tellus sem scelerisque sit ante.Lorem ipsum dolor sit amet consectetur. Ac eget eu eget ullamcorper tellus sem scelerisque sit ante.Lorem ipsum dolor sit amet consectetur. Ac eget eu eget ullamcorper tellus sem scelerisque sit ante.Lorem ipsum dolor sit amet consectetur. Ac eget eu eget ullamcorper tellus sem scelerisque sit ante.Lorem ipsum dolor sit amet consectetur. Ac eget eu eget ullamcorper tellus sem scelerisque sit ante.\n\nLorem ipsum dolor sit amet consectetur. Ac eget eu eget ullamcorper tellus sem scelerisque sit ante.Lorem ipsum dolor sit amet consectetur. Ac eget eu eget ullamcorper tellus sem scelerisque sit ante.Lorem ipsum dolor sit amet consectetur. Ac eget eu eget ullamcorper tellus sem scelerisque sit ante.",
    quickReplies: ["Looking forward to it!", "We will be there!", "Thanks for the update!"],
  },
  {
    id: "5",
    sender: "Mathias Goblet",
    senderEmail: "mathias@example.com",
    avatar:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Split%20Home%20page-oZXExc1JRwSu0xu48jzSVODeu4tK8G.png",
    subject: "Financial information",
    preview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ...",
    time: "3:13 PM",
    isRead: false,
    isStarred: false,
    content: "Lorem ipsum dolor sit amet consectetur. Ac eget eu eget ullamcorper tellus sem scelerisque sit ante.",
  },
  {
    id: "6",
    sender: "Apple",
    senderEmail: "apple@example.com",
    avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Home%20page-CejabEoPo5eAMvMbiCaWmybCIWnE01.png",
    subject: "Weekly update",
    preview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ...",
    time: "3:13 PM",
    isRead: false,
    isStarred: false,
    content: "Lorem ipsum dolor sit amet consectetur. Ac eget eu eget ullamcorper tellus sem scelerisque sit ante.",
  },
  {
    id: "7",
    sender: "Apple",
    senderEmail: "apple@example.com",
    avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Task%20View-o4RC2pvZLsKy3gdIueCF6U4pF8Uls1.png",
    subject: "Your Apple bill",
    preview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ...",
    time: "3:13 PM",
    isRead: true,
    isStarred: false,
    content: "Lorem ipsum dolor sit amet consectetur. Ac eget eu eget ullamcorper tellus sem scelerisque sit ante.",
  },
]

export const mockLabels: Label[] = [
  { id: "1", name: "Work", color: "#3b82f6" },
  { id: "2", name: "Personal", color: "#10b981" },
  { id: "3", name: "Important", color: "#ef4444" },
]
