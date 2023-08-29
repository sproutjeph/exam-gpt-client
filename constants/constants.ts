import { BookTwoTone, MessageOutlined } from "@mui/icons-material";
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
  User,
} from "lucide-react";

export const MAX_FREE_COUNTS = 5;

export const tools = [
  {
    label: "Slove with AI",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-violet-500",
    bgColor: "#FFD700",
  },
  {
    label: "Computer Base Test",
    icon: Computer,
    href: "/music",
    color: "text-emerald-500",
    bgColor: "#00FF00",
  },
  {
    label: "Snap Question To Slove",
    icon: Camera,
    color: "text-pink-700",
    bgColor: "#00FFFF",
    href: "/image",
  },
  {
    label: "Unlimted Questions With AI",
    icon: AirVentIcon,
    color: "text-orange-700",
    bgColor: "#FF1493",
    href: "/video",
  },
  {
    label: "Help Train Our AI",
    icon: Code,
    color: "text-green-700",
    bgColor: "#1E90FF ",
    href: "/code",
  },
];

export const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-[#333333]",
    bgColor: "bg-[#fccb06]",
  },
  {
    label: "Exams",
    icon: BookCopyIcon,
    color: "text-[#FFFFFF]",
    href: "/exams",
    bgColor: "bg-[#00FF00]",
  },
  {
    label: "Ask AI",
    icon: MessageSquare,
    href: "/ask-ai",
    color: "text-[#333333]",
    bgColor: "bg-[#00FFFF]",
  },

  {
    label: "Books",
    icon: Book,
    color: "text-[#FFFFFF]",
    href: "/books",
    bgColor: "bg-[#FF69B4]",
  },
  {
    label: "Upload Question",
    icon: UploadCloud,
    color: "text-[#FFFFFF]",
    href: "/upload-questions",
    bgColor: "bg-[#FF1493]",
  },

  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
    color: "text-[text-white]",
    bgColor: "bg-[#1E90FF]",
  },
  {
    label: "C B Test",
    icon: Computer,
    href: "/computer-base-test",
    color: "text-[#000000]",
    bgColor: "bg-[#1E90FF ]",
  },
  {
    label: "Subscription",
    icon: DollarSign,
    href: "/subscription-prices",
    color: "text-[#FFFFFF]",
    bgColor: "bg-[#8A2BE2]",
  },
  {
    label: "Admin",
    icon: User,
    href: "/admin-dashboard",
    color: "",
    bgColor: "",
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

export const queryKeys = {
  questions: "questions",
  subjects: "subjects",
  allSubjects: "allSubjects",
  users: "users",
  usersApiUseage: "usersApiUseage",
};

export const textBooks = [
  { id: 1, subject: "Physics", image: "/physics1.jpeg" },
  { id: 2, subject: "Biology", image: "/Biology1.jpeg" },
  { id: 3, subject: "Mathmetics", image: "/maths1.webp" },
  { id: 4, subject: "Chemistry", image: "/chemistry1.jpeg" },
];

export const bottomNavLinks = [
  {
    label: "Exams",
    icon: BookTwoTone,
    href: "/exams",
  },
  {
    label: "Ask AI",
    icon: MessageOutlined,
    href: "/ask-ai",
  },
  {
    label: "Books",
    icon: Book,
    href: "/books",
  },
  {
    label: "CB Test",
    icon: Computer,
    href: "/computer-base-test",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
  },
];
