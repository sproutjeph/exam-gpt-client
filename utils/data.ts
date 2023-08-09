import { ITextBook } from "@/types/types";

export const testimonials = [
  {
    name: "Jesse",
    avatar: "J",
    title: "Student UNN Nuska",
    description: "This is the best application I've ever used!",
  },
  {
    name: "Jephthah",
    avatar: "J",
    title: "Student IMT Enugu",
    description: "I used this app  for my JAMB",
  },
  {
    name: "Wisdom",
    avatar: "W",
    title: "Student ESUT",
    description: "This app helped me pass my JAMB Exam!",
  },
  {
    name: "Rita",
    avatar: "R",
    title: "Student",
    description:
      "The best in class, definitely worth the premium subscription!",
  },
];

export const tiers = [
  {
    title: "Free",
    price: "0",
    description: [
      "2 CB Test",
      "5 free Slove With AI",
      "Help center access",
      "Email support",
    ],
    buttonText: "Sign up for free",
    buttonVariant: "outlined",
  },
  {
    title: "Standard",
    subheader: "Most popular",
    price: "15",
    description: [
      "60 Slove With AI per Day",
      "Unlimted CB Test",
      "Text Books",
      "Help center access",
      "Priority email support",
    ],
    buttonText: "Get started",
    buttonVariant: "contained",
  },
  {
    title: "Pro",
    price: "30",
    description: [
      "Unlimited Slove With AI",
      "Unlimited CB Test",
      "Text Books",
      "Help center access",
      "Priority email support",
    ],
    buttonText: "Contact us",
    buttonVariant: "outlined",
  },
];
export const footers = [
  {
    title: "Company",
    description: ["Team", "History", "Contact us", "Locations"],
  },
  {
    title: "Features",
    description: ["Slove With AI", "Computer base test", "Text Books"],
  },
  {
    title: "Resources",
    description: [
      "Resource",
      "Resource name",
      "Another resource",
      "Final resource",
    ],
  },
  {
    title: "Legal",
    description: ["Privacy policy", "Terms of use"],
  },
];

export const textBooks: ITextBook[] = [
  {
    id: 1,
    subject: "Physics",
    image: "/physics1.jpeg",
    date: "September 14, 2016",
    title: `Comprehensive physics textbook delving into fundamental principles, from mechanics to quantum mechanics. Clear explanations, diagrams, and real-world examples empower learners with essential insights and problem-solving skills."`,
    description: `"Fundamentals of Physics: Exploring the Principles of the Physical World"

This comprehensive physics textbook offers a profound exploration of the fundamental principles that govern the natural world. Covering a wide range of topics, from mechanics and thermodynamics to electromagnetism and quantum mechanics, this book serves as an essential resource for both introductory and advanced physics courses. The clear and concise explanations, supported by illustrative diagrams and real-world examples, enable students to grasp complex concepts with ease. Designed to foster critical thinking and problem-solving skills, the textbook engages readers in thought-provoking exercises and applications that enhance their understanding of the intricate laws that shape the universe. Whether for students or enthusiasts, this textbook provides a solid foundation in physics, bridging theory and application for a deeper appreciation of the physical realm.

`,
  },
  {
    id: 2,
    subject: "Biology",
    image: "/Biology1.jpeg",
    date: "",
    title: `Comprehensive physics textbook delving into fundamental principles, from mechanics to quantum mechanics. Clear explanations, diagrams, and real-world examples empower learners with essential insights and problem-solving skills."`,
    description: "",
  },
  {
    id: 3,
    subject: "Mathmetics",
    image: "/maths1.webp",
    date: "",
    title: "",
    description: "",
  },
  {
    id: 4,
    subject: "Chemistry",
    image: "/chemistry1.jpeg",
    date: "",
    title: "",
    description: "",
  },
];
