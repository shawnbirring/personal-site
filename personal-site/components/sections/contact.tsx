import { FaGithub, FaLinkedin, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const contactItems = [
  {
    icon: <FaGithub />,
    title: "GitHub",
    value: "shawnbirring",
    link: "https://github.com/shawnbirring"
  },
  {
    icon: <FaLinkedin />,
    title: "LinkedIn",
    value: "shawnbirring",
    link: "https://linkedin.com/in/shawnbirring"
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    value: "sbirring4@my.bcit.ca",
    link: "mailto:sbirring4@my.bcit.ca"
  },
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    value: "236-380-2753",
    link: "tel:2363802753"
  }
];

export default function ContactSection({ id }: { id: string }) {
  return (
    <section id={id} className="mb-10">
      <h2 className="text-2xl font-bold mb-4">Contact</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {contactItems.map((item, idx) => (
          <a
            key={idx}
            href={item.link}
            className="flex items-center space-x-3 p-4 border border-zinc-800 rounded-md hover:bg-zinc-900 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="text-xl">{item.icon}</div>
            <div>
              <div className="text-sm font-medium">{item.title}</div>
              <div className="text-muted-foreground text-sm">{item.value}</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
