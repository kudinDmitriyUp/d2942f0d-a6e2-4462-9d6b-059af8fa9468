"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import AboutPhoneTimeline from '@/components/sections/about/AboutPhoneTimeline';
import FeatureCardTen from '@/components/sections/feature/FeatureCardTen';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import TestimonialCardFour from '@/components/sections/testimonial/TestimonialCardFour';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Anchor, Ship, Compass, Award, Star, Briefcase, Globe, TrendingUp, DollarSign, Zap, Lock, MapPin, Users, Target } from 'lucide-react';

export default function ExecutivePage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="reveal-blur"
      borderRadius="sharp"
      contentWidth="small"
      sizing="small"
      background="plain"
      cardStyle="glass-flat"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="outline"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="Guglielmo Noya"
          button={{
            text: "Get In Touch",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="30+ Years of Global Executive Leadership"
          description="SVP at APWireless Infrastructure Partners | Former CFO & CEO across Europe, USA & Latin America | Expert in M&A, Business Development & Telecommunications"
          tag="Executive Portfolio"
          tagIcon={Anchor}
          buttons={[
            { text: "Explore Experience", href: "about" },
            { text: "Contact", href: "contact" }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764625484491-av4rwz3i.jpg"
          imageAlt="Sailing on ocean representing journey and leadership"
          frameStyle="card"
        />
      </div>

      <div id="about" data-section="about">
        <AboutPhoneTimeline
          title="Career Voyage Across Continents"
          description="From engineering foundations at Sapienza to C-level executive roles navigating complex telecommunications, M&A, and business development across three continents. Skilled navigator of corporate transformation and strategic growth."
          tag="Professional Journey"
          tagIcon={Ship}
          phoneOne={{
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764625485190-q8b0cv5p.jpg",
            imageAlt: "Executive office workspace"
          }}
          phoneTwo={{
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764625487027-q4ze1aci.jpg",
            imageAlt: "Global business presence map"
          }}
          buttons={[
            { text: "View CV", href: "#" },
            { text: "Learn More", href: "#" }
          ]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardTen
          title="Core Competencies"
          description="Decades of expertise across telecommunications, infrastructure, finance, and international business"
          tag="Expertise"
          tagIcon={Compass}
          features={[
            {
              id: "1",
              title: "General Management & C-Level Strategy",
              description: "Chief Operating Officer, Chief Financial Officer, CEO roles managing large multinational organizations",
              media: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764625485904-9ievd5i1.jpg",
                imageAlt: "Executive leadership team"
              },
              items: [
                { icon: Briefcase, text: "20+ years at director and C-level" },
                { icon: Globe, text: "Multi-country operations management" },
                { icon: TrendingUp, text: "Strategic business transformation" }
              ],
              reverse: false
            },
            {
              id: "2",
              title: "M&A and Corporate Finance",
              description: "Expert advisor on mergers, acquisitions, restructuring and financial planning across telecom and infrastructure sectors",
              media: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764625487732-enxur0un.jpg",
                imageAlt: "Port infrastructure symbolizing logistics"
              },
              items: [
                { icon: DollarSign, text: "Multi-billion transaction experience" },
                { icon: Zap, text: "Restructuring and turnaround expertise" },
                { icon: Lock, text: "Risk management and due diligence" }
              ],
              reverse: true
            },
            {
              id: "3",
              title: "International Business Development",
              description: "Navigating growth strategies across Latin America, Europe, and USA with deep regional market expertise",
              media: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764625488991-sp3gh398.jpg",
                imageAlt: "Telecom network infrastructure"
              },
              items: [
                { icon: MapPin, text: "Latin America market leadership" },
                { icon: Users, text: "Board memberships and advisory roles" },
                { icon: Target, text: "Strategic partnerships and alliances" }
              ],
              reverse: false
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardTwo
          title="Professional Impact"
          description="Track record of delivering results across telecommunications, infrastructure, and financial sectors"
          tag="Achievements"
          tagIcon={Award}
          metrics={[
            { id: "1", value: "30+", description: "Years of Executive Experience" },
            { id: "2", value: "3", description: "Continents (Europe, USA, Latin America)" },
            { id: "3", value: "10+", description: "C-Level Positions Held" },
            { id: "4", value: "3", description: "Board Memberships (GSM, TLC, Media)" }
          ]}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="four-items-2x2-equal-grid"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFour
          title="Industry Recognition"
          description="Trusted by leading companies and industry peers for strategic guidance and business transformation"
          tag="Testimonials"
          tagIcon={Star}
          testimonials={[
            {
              id: "1",
              name: "Industry Peer",
              role: "CEO, Global Infrastructure",
              company: "Major Telecom Provider",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764625489667-w0ly9pba.jpg",
              imageAlt: "Industry leader testimonial"
            },
            {
              id: "2",
              name: "Business Partner",
              role: "Managing Partner, Investment Firm",
              company: "Private Equity Group",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764625490502-ouz9gu99.jpg",
              imageAlt: "Business partner endorsement"
            },
            {
              id: "3",
              name: "Executive Colleague",
              role: "CFO, International Corporation",
              company: "Fortune 500 Company",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764625491219-l4ysddlw.jpg",
              imageAlt: "Executive colleague recommendation"
            },
            {
              id: "4",
              name: "Board Member",
              role: "Chairman, Industry Association",
              company: "Latin American Telecom",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764625492321-e6665n03.jpg",
              imageAlt: "Board member testimonial"
            }
          ]}
          textboxLayout="default"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Let's Connect"
          description="Interested in discussing strategic opportunities, board positions, advisory roles, or business partnerships? Get in touch."
          inputs={[
            { name: "name", type: "text", placeholder: "Full Name", required: true },
            { name: "email", type: "email", placeholder: "Email Address", required: true },
            { name: "subject", type: "text", placeholder: "Subject", required: true }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell me about your opportunity or inquiry...",
            rows: 5,
            required: true
          }}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764625484491-av4rwz3i.jpg"
          imageAlt="Sailing representing smooth business collaboration"
          mediaPosition="right"
          buttonText="Send Message"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Navigate",
              items: [
                { label: "Home", href: "#" },
                { label: "Experience", href: "about" },
                { label: "Expertise", href: "features" },
                { label: "Contact", href: "contact" }
              ]
            },
            {
              title: "Professional",
              items: [
                { label: "LinkedIn Profile", href: "https://linkedin.com/in/guglielmo-noya" },
                { label: "Board Memberships", href: "#" },
                { label: "Advisory Services", href: "#" }
              ]
            },
            {
              title: "Sectors",
              items: [
                { label: "Telecommunications", href: "#" },
                { label: "Infrastructure", href: "#" },
                { label: "Finance", href: "#" },
                { label: "M&A Advisory", href: "#" }
              ]
            }
          ]}
          copyrightText="© 2025 Guglielmo Noya | Senior Executive | Global Business Leader"
        />
      </div>
    </ThemeProvider>
  );
}