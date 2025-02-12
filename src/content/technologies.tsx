import {
  Bitcoin,
  Boxes,
  Code2,
  Database,
  Globe,
  Layout,
  Server,
  Shield,
  Workflow
} from "lucide-react"

export const technologiesContent: ITechnology[] = [
  {
    icon: Layout,
    name: "Frontend Development",
    skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    icon: Server,
    name: "Backend Development",
    skills: ["Node.js", "NestJS", "RESTful APIs", "GraphQL", "PostgreSQL", "Prisma"],
  },
  {
    icon: Workflow,
    name: "Development Practices",
    skills: ["Agile Methodology", "Scrum", "Code Review", "Technical Documentation", "Testing"],
  },
  {
    icon: Database,
    name: "Cloud & DevOps",
    skills: ["AWS", "CI/CD", "Docker", "Railway", "Vercel"],
  },
  {
    icon: Code2,
    name: "Smart Contracts",
    skills: ["Solidity", "Cairo", "Hardhat", "OpenZeppelin", "Smart Contract Security", "Foundry", "Remix"],
  },
  {
    icon: Globe,
    name: "Web3 Technologies",
    skills: ["Ethers.js", "Web3.js", "IPFS", "The Graph", "Wallet Integration"],
  },
  {
    icon: Shield,
    name: "Security",
    skills: ["Testing", "Monitoring"],
  },
  {
    icon: Boxes,
    name: "Development Tools",
    skills: ["Git", "Figma", "Notion", "Jira"],
  },
  {
    icon: Bitcoin,
    name: "Blockchain",
    skills: ["EVM", "Starknet"],
  },
]