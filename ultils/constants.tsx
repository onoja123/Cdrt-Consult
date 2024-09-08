import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

export const footerLinks = [
  {
    title: "Explore",
    links: [
      { text: "Home", url: "/" },
      { text: "About us", url: "/about-us" },
      { text: "Our Team", url: "/artisans-training" },
      { text: "Contact us", url: "/join-waitlist" },
      // { text: "Blog", url: "/" },
    ],
  },
  {
    title: "Legal",
    links: [
      { text: "Terms of Use", url: "/terms-of-use" },
      {
        text: "Privacy Policy",
        url: "/privacy-policy",
      },
      // {
      //   text: "Disclaimer",
      //   url: "/",
      // },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: FaInstagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: FaFacebook,
    link: "https://www.facebook.com",
  },
  {
    id: "social-media-3",
    icon: RiTwitterXFill,
    link: "https://x.com",
  },
  {
    id: "social-media-4",
    icon: FaLinkedin,
    link: "https://www.linkedin.com/",
  },
  {
    id: "social-media-5",
    icon: FaWhatsapp,
    link: "https://whatsapp.com/",
  },
];
