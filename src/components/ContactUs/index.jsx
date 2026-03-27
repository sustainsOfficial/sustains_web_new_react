import React from "react";
import {
  Mail,
  Phone,
  MessageCircle,
  Calendar,
  ArrowRight,
} from "lucide-react";
import Hero from "../shared/Hero";
import CTASection from "../shared/CTASection";
import ContactMethodsGrid from "../shared/ContactMethodsGrid";
import ContactForm from "../shared/ContactForm";
import "./index.css";

const Contact = () => {
  const contactMethods = [
    {
      icon: <Mail size={24} />,
      title: "Email Us",
      subtitle: "Get a response within 24 hours",
      details: ["contact@sustains.ai"],
      action: "Send Email",
      method: "email",
    },
    {
      icon: <MessageCircle size={24} />,
      title: "WhatsApp",
      subtitle: "Instant messaging support",
      details: ["Quick responses available"],
      action: "Start Chat",
      method: "whatsapp",
    },
    {
      icon: <Calendar size={24} />,
      title: "Schedule a Call",
      subtitle: "Book a personalized consultation",
      details: ["30-min strategy session"],
      action: "Book Now",
      method: "calendar",
    },
    {
      icon: <Phone size={24} />,
      title: "Call Us",
      subtitle: "+91 89214 13436",
      details: ["Mon-Fri, 9 AM - 6 PM IST"],
      action: "Call Now",
      method: "phone",
    },
  ];

  const handleMethodClick = (method) => {
    switch (method) {
      case "email":
        window.location.href = "mailto:contact@sustains.ai";
        break;
      case "whatsapp":
        window.open("https://wa.me/918921413436", "_blank");
        break;
      case "calendar":
        window.open("https://calendly.com", "_blank");
        break;
      case "phone":
        window.location.href = "tel:+918921413436";
        break;
    }
  };

  return (
    <div className="contactpage-container">
      <Hero
        badge={{ icon: <MessageCircle size={16} />, text: "Get In Touch" }}
        titleMain="Let's Talk About"
        titleGradient="What You're Building"
        description="Energy, wealth, tech, or just exploring — we'd love to hear from you."
      />

      <ContactMethodsGrid
        methods={contactMethods}
        onMethodClick={handleMethodClick}
      />

      <ContactForm />

      <CTASection
        title="Ready to Get Started?"
        description="Explore our products or learn more about our services."
        primaryButton={{
          to: "/products",
          label: "Explore Products",
          icon: <ArrowRight size={18} />,
        }}
        secondaryButton={{ to: "/services", label: "View Services" }}
      />
    </div>
  );
};

export default Contact;
