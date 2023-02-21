import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const SocialList = ({ styles }: { styles?: {} }) => {
  const iconConfig = {
    fill: "#fff",
    fontSize: 24,
  };
  const socialsList = [
    {
      id: 0,
      icon: <BsGithub {...iconConfig} />,
      url: "https://github.com/jumperdevweb3",
    },
    {
      id: 1,
      icon: <BsLinkedin {...iconConfig} />,
      url: "https://www.linkedin.com/in/filipskoczylas/",
    },
    {
      id: 2,
      icon: <FaDiscord {...iconConfig} />,
      url: "https://discord.gg/jheUCreBEj",
    },
    {
      id: 3,
      icon: <MdEmail {...iconConfig} />,
      url: "mailto:jumperweb3dev@gmail.com",
    },
  ];

  return (
    <>
      {socialsList.map((item) => (
        <Link key={item.id} href={item.url} className="z-20 animate-pulse">
          {item.icon}
        </Link>
      ))}
    </>
  );
};
