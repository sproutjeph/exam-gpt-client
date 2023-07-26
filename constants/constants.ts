import {
  AirVentIcon,
  Book,
  BookCopyIcon,
  Camera,
  Code,
  Computer,
  DollarSign,
  LayoutDashboard,
  MessageSquare,
  Settings,
  UploadCloud,
} from "lucide-react";

export const MAX_FREE_COUNTS = 5;

export const tools = [
  {
    label: "Slove with AI",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
  },
  {
    label: "Computer Base Test",
    icon: Computer,
    href: "/music",
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
  },
  {
    label: "Snap Question To Slove",
    icon: Camera,
    color: "text-pink-700",
    bgColor: "bg-pink-700/10",
    href: "/image",
  },
  {
    label: "Unlimted Questions With AI",
    icon: AirVentIcon,
    color: "text-orange-700",
    bgColor: "bg-orange-700/10",
    href: "/video",
  },
  {
    label: "Help Train Our AI",
    icon: Code,
    color: "text-green-700",
    bgColor: "bg-green-700/10",
    href: "/code",
  },
];

export const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-white",
  },
  {
    label: "Exams",
    icon: BookCopyIcon,
    color: "text-white",
    href: "/exams",
  },
  {
    label: "Ask AI",
    icon: MessageSquare,
    href: "/ask-ai",
    color: "text-white",
  },

  {
    label: "Books",
    icon: Book,
    color: "text-white",
    href: "/books",
  },
  {
    label: "Upload Question",
    icon: UploadCloud,
    color: "text-white",
    href: "/upload-questions",
  },

  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
    color: "text-white",
  },
  {
    label: "Computer Base Test",
    icon: Computer,
    href: "/computer-base-test",
    color: "text-white",
  },
  {
    label: "Subscription Prices",
    icon: DollarSign,
    href: "/subscription-prices",
    color: "text-white",
  },
];
export const exams = [
  {
    id: "beeba215e2",
    examName: "JAMB",
  },
  {
    id: "35dc83a",
    examName: "WASSCE",
  },
  {
    id: "7d15e2d52a",
    examName: "NECO",
  },
  {
    id: "eeb7d15e2d52a3",
    examName: "POST-UTME",
  },
];
