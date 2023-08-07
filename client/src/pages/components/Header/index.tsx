import Link from "next/link";

export default function Header() {
  return(
    <header id="header" className="flex">
      <Link href="/" className="header-logo">Matheus</Link>
      <nav className="header-nav flex">
          <Link href="#about" className="header-nav_link">Sobre mim</Link>
          <Link href="#skills" className="header-nav_link">Skills</Link>
          <Link href="#port" className="header-nav_link">Projetos</Link>
          <Link href="#contact" className="header-nav_link">Contato</Link>
      </nav>
      <Link href="https://github.com/ofmxtheuuz" className="github-link">
          <i className="bi bi-github"></i> Github
      </Link>
    </header>
  )
}