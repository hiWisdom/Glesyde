import { Menu } from "@/types/menu";

const menuData: Menu[] = [

  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },

  {
    id: 2,
    title: "Services",
    newTab: false,
    path: "/#features",
    submenu: [
      {
        id: 31,
        title: "Website Development(UI & UX Web Design)",
        newTab: false,
        path: "/blog",
      },
      {
        id: 34,
        title: "Mobile Application Development",
        newTab: false,
        path: "/auth/signin",
      },
      {
        id: 35,
        title: "WordPress for Enterprise",
        newTab: false,
        path: "/auth/signup",
      },
      {
        id: 35,
        title: "Online Shops & E-Commerce",
        newTab: false,
        path: "/docs",
      },
      {
        id: 35.1,
        title: "Website & Relauch",
        newTab: false,
        path: "/support",
      },
      {
        id: 36,
        title: "Content Migration",
        newTab: false,
        path: "/error",
      },
      {
        id: 36,
        title: "Payment Gateways",
        newTab: false,
        path: "/error",
      },
      {
        id: 36,
        title: "Auditing & Code Review",
        newTab: false,
        path: "/error",
      },
      {
        id: 36,
        title: "Quality Assurance",
        newTab: false,
        path: "/error",
      },
      {
        id: 36,
        title: "Security & Performace",
        newTab: false,
        path: "/error",
      },
      {
        id: 36,
        title: "SEO & Content Marketing",
        newTab: false,
        path: "/error",
      },
      {
        id: 36,
        title: "Custom Integrations",
        newTab: false,
        path: "/error",
      },
      {
        id: 36,
        title: "Consulting & Conception",
        newTab: false,
        path: "/error",
      },
      {
        id: 36,
        title: "Training & Workshops",
        newTab: false,
        path: "/error",
      },
    ],
  },

  {
    id: 2.1,
    title: "Blog",
    newTab: false,
    path: "/blog",
  },

  {
    id: 2.3,
    title: "Our Work",
    newTab: false,
    path: "/docs",
  },

  {
    id: 3,
    title: "About us",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Team",
        newTab: false,
        path: "/blog",
      },
      {
        id: 34,
        title: "Our Values",
        newTab: false,
        path: "/auth/signin",
      },
      {
        id: 35,
        title: "Partners",
        newTab: false,
        path: "/auth/signup",
      },
    ],
  },
  
];

export default menuData;
