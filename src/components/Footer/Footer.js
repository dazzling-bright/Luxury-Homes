import React from "react";
import {
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

import SocialIcon from "./Socials";
import LanguageDropdown from "./languageDropdown";

const FooterSection = ({ title, items }) => (
  <section className="flex flex-col">
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <ul className="space-y-1">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </section>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerData = [
    {
      title: "LuxuryVacay",
      items: [
        "Visit us: Block D, Garki 2, Abuja",
        "Call us: +234-8000-920-400",
        "Email us: info@luxuryvacay.com",
      ],
    },
    {
      title: "About",
      items: [
        "Company",
        "Sponsorships",
        "Trips",
        "Events",
        "Magazine Features",
      ],
    },
    {
      title: "Product",
      items: ["Discounts", "Offers", "Customers", "Locations", "Reviews"],
    },
    {
      title: "For Customers",
      items: ["Help Center", "FAQs", "Features", "Community", "Support"],
    },
  ];

  const socialLinks = [
    { href: "https://twitter.com", icon: FaTwitter },
    { href: "https://instagram.com", icon: FaInstagram },
    { href: "https://facebook.com", icon: FaFacebookF },
    { href: "https://linkedin.com", icon: FaLinkedinIn },
    { href: "https://youtube.com", icon: FaYoutube },
  ];

  return (
    <footer className="bg-orange-500 p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {footerData.map((section, index) => (
        <FooterSection
          key={index}
          title={section.title}
          items={section.items}
        />
      ))}
      <div className="font-thin text-sm col-span-1 md:col-span-2 lg:col-span-4 mt-6 text-center">
        <div className="flex justify-center items-center space-x-4">
          <LanguageDropdown />
          <p>Privacy Policy</p>
          <p>Terms</p>
          <p>Copyright &copy; {currentYear} Luxury Vacays</p>
          {socialLinks.map((link, index) => (
            <SocialIcon key={index} href={link.href} icon={link.icon} />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
