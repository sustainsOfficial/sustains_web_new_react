import React from "react";
import { motion } from "framer-motion";
import { Handshake } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "./AnimationHelpers";
import SectionHeader from "./SectionHeader";
import "./ClientStrip.css";

const defaultClients = [
  "QuRapid",
  "Loomet Fashions",
  "VJ Solutions",
  "HippieGoTrails",
];

const ClientStrip = ({ clients = defaultClients, className = "" }) => {
  return (
    <section className={`shared-clients-section ${className}`}>
      <div className="shared-clients-wrapper">
        <FadeIn>
          <SectionHeader
            badge={{ icon: <Handshake size={16} />, text: "Tech Partnerships" }}
            title="Trusted By"
            titleGradient="Companies We Partner With"
          />
        </FadeIn>
        <StaggerContainer className="shared-clients-grid" stagger={0.1}>
          {clients.map((name) => (
            <StaggerItem key={name}>
              <motion.div
                className="shared-client-badge"
                whileHover={{ scale: 1.05, y: -2 }}
              >
                {name}
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default ClientStrip;
