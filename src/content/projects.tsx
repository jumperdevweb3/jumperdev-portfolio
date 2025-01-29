import { Ticket } from 'lucide-react';

import { MessageCircle } from 'lucide-react';

export const projectsContent = [
  {
    title: "Alphagram",
    subtitle: "Web3 Telegram Channel Monetization Platform",
    description: "An innovative Web3 application dedicated to the crypto community, enabling the creation and management of paid channels on Telegram. The platform facilitates knowledge sharing through secure cryptocurrency payments and automated subscription management.",
    image: "/img/projects/alphagram.png",
    tech: ["Next.js", "NestJS", "Solidity", "AWS S3", "Telegram API", "Hardhat", "Remix"],
    features: [
      "Cryptocurrency payment integration with Telegram channels",
      "Automated subscription management and access control",
      "Dedicated Telegram bots for subscription validation",
      "User support system integration",
      "Secure payment processing",
      "Real-time subscription status updates"
    ],
    links: {
      live: "https://alphagram.me",
      github: null
    },
    teamType: "Solo",
    icon: MessageCircle
  },
  {
    title: "Blessed",
    subtitle: "Web3 Ticketing Platform",
    description: "A comprehensive Web3 ticketing platform leveraging blockchain technology for secure and transparent ticket distribution. Built with a focus on preventing fraud and enabling seamless ticket transfers through smart contracts.",
    image: "/img/projects/blessed.png",
    tech: ["Cairo", "Solidity", "NestJS", "Next.js", "AWS", "The Graph", "Hardhat"],
    features: [
      "Blockchain-based ticket verification",
      "API for creating custom environments",
      "Secure payment processing",
      "Real-time event management",
      "Automated access control",
      "Anti-fraud mechanisms"
    ],
    links: {
      live: null,
      github: "https://github.com/BlessedOrg"
    },
    teamType: "Team",
    icon: Ticket
  }
]