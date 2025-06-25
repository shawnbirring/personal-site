import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function ContactCondensed() {
  return (
    <div className="mt-10 pt-6 border-t border-zinc-800 text-center text-sm text-muted-foreground">
      <p>Connect with me:</p>
      <div className="flex justify-center gap-4 mt-2 text-lg">
        <a href="https://github.com/shawnbirring" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/shawnbirring" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </div>
      <p className="mt-2">sbirring4@my.bcit.ca</p>
    </div>
  )
}
